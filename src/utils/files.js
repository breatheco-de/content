const path = require('path');
const fs = require('fs');
const mime = require('mime-types')
const axios = require('axios');
const fm = require('front-matter');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

const walkAsync = (path) => new Promise((resolve, reject) => {
    walk(path, function(err, list){
      if (err) return reject(err);
      else resolve(list);
    })
});

const walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
      if (err) return done(err);
      var pending = list.length;
      if (!pending) return done(null, results);
      list.forEach(function(file) {
        file = path.resolve(dir, file);
        fs.stat(file, function(err, stat) {
          if (err) return done(err);

          if (stat && stat.isDirectory()) {
            walk(file, function(err, res) {
              if (err) return done(err);

              results = results.concat(res);
              if (!--pending) done(null, results);
            });
          } else {
            results.push(file);
            if (!--pending) done(null, results);
          }
        });
      });
    });
  };


let names = [];
const getContentName = (path) => {
  const m = /.*src\/content\/([a-z\-]+)\/([\[\].a-zA-Z0-9_\-]+)\.md/gm.exec(path);
  if(m) return { type: m[1], name: m[2] }
  else return null;
}
const indexContent = (allContent) => ({
    names, 
    lessons: allContent.map(l => {
        const file = getContentName(l);
        if(!file){
          console.log("Ignoring lesson: Bad path format "+l);
          return null;
        }

        names.push(file.name);
        const [ originalSlug, lang ] = file.name.split('.');
        const content = fs.readFileSync(l, 'utf8');
        let front_matter = fm(content);
        const result = {
            path: l,
            content,
            front_matter,
            originalSlug,
            slug: front_matter.slug || originalSlug,
            lang: lang || "us",
            fileName: file.name,
            type: file.type,
            onlinePath: `${file.type}/${originalSlug}`,
        }
        return result;
    })
});

const regex = {
  relative_images: /!\[.*\]\((\.\/.*\.[a-zA-Z0-9]{2,3})/gm, 
  external_images: /!\[.*\]\(https?:\/(\/{1}[^/)]+)+\/?\)/gm,
  url: /.*(https?:\/\/[a-zA-Z_\-.\/0-9]+).*/gm,
  uploadcare: /.*https:\/\/ucarecdn.com\/([a-zA-Z_\-.\/0-9]+).*/gm
}

const findInFile = (types, content) => {
  const validTypes = Object.keys(regex);
  if(!Array.isArray(types)) types = [types];
  
  let findings = {}
  
  types.forEach(type => {
    if(!validTypes.includes(type)) throw Error("Invalid type: "+type)
    else findings[type] = {};
  });

  types.forEach(type => {

    let count = 0;
    while ((m = regex[type].exec(content)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      // The result can be accessed through the `m`-variable.
      // m.forEach((match, groupIndex) => values.push(match));
      const txt = m[0];
      count++;

      findings[type][m[0]] = m[1];
    }
  })

  return findings;
}

const download = async (url, image_path) => {

  const response =  await axios({
    url,
    responseType: 'stream',
  })
  
  const extension = mime.extension(response.headers['content-type']) 
  if(image_path.indexOf("."+extension) === -1) image_path = image_path + "." + extension;
  
  if(fs.existsSync(image_path)){
    console.log(`Ignoring: Image ${image_path} already exists`)
    return false;
  }
  
  if(response.status != 200){
    console.log(`Ignoring: ${url} because its not a 200 request`)
    return false;
  }
  else{
    return new Promise((resolve, reject) => {
      console.log("Downloading ", image_path, response.headers['content-type'])
      response.data
        .pipe(fs.createWriteStream(image_path))
        .on('finish', () => resolve())
        .on('error', e => reject(e));
    })
  } 
}

const updateLesson = (lesson, newContent=null) => {
  if(!newContent && newContent == "") return false;
  const  { content, path, front_matter } = lesson;
  return fs.writeFileSync(path, newContent);
}

module.exports = {
  walk, indexContent, findInFile, download, updateLesson, walkAsync
}