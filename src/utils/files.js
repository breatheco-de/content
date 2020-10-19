const path = require('path');
const moment = require("moment");
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
  url: /(https?:\/\/[a-zA-Z_\-.\/0-9]+)/gm,
  uploadcare: /https:\/\/ucarecdn.com\/(?:.*\/)*([a-zA-Z_\-.\/0-9]+)/gm
}

const getFM = (content) => {
  return fm(content);
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
  if(!image_path.includes("."+extension)) image_path = image_path + "." + extension;
  
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

const updateContent = (lesson, newContent=null) => {
  if(!newContent && newContent == "") return false;
  const  { content, path, front_matter } = lesson;
  return fs.writeFileSync(path, newContent);
}

const sanitize = (lesson) => {
  const  { content, path, front_matter } = lesson;
  const { slug, title, date, tags, status, authors, subtitle, ...rest } = front_matter.attributes;

  let clean = {}

  // local images use cover_local instead of cover
  if(rest.cover && rest.cover.indexOf("../") > -1){
    clean.cover_local = rest.cover;
    clean.cover = null;
  }

  // date format must be 2020-10-19T12:36:31-04:00
  clean.date = moment(date).format()

  return clean;
}

const updateFrontMatter = (lesson, data, conditions={}, test=false) => {

  const  { content, path, front_matter } = lesson;

  if(typeof(front_matter.attributes.status)==="undefined" || front_matter.attributes.status === null) 
    front_matter.attributes.status = "published";
  
  if(typeof(conditions.status) !== "undefined" && conditions.status !== null){
    if(front_matter.attributes.status !== conditions.status){
      console.log(`Ignoring lesson ${lesson.slug}, status ${front_matter.attributes.status} != ${conditions.status}`)
      return false;
    }
  }
  
  // WARNING! clean up UNDEFINED data, if its null it well not be cleaned, only undefined
  Object.keys(data).forEach(key => data[key] === undefined && delete data[key] )
  
  let attributes = { ...front_matter.attributes, ...data };
  
  // deleting null attributes on front-matters
  Object.keys(attributes).forEach(key => attributes[key] === null && delete attributes[key] )

  const newContent = `---
${Object.keys(attributes).reduce((total, key) => {
  if(Array.isArray(attributes[key])) return total+`${key}: [${attributes[key].map(i => `"${i}"`).join(",")}]\n`
  else return total+`${key}: "${attributes[key]}"\n`
},"")}
---

${front_matter.body}`;

  if(test === false){
      console.log("Updating "+path+ " ...")
      fs.writeFileSync(path, newContent);
      console.log("Lesson updated "+lesson.slug)
  }
  else console.log("TEST: Lesson updated "+path+ " with: ", newContent)
}

module.exports = {
  walk, indexContent, findInFile, download, updateContent, walkAsync, updateFrontMatter, getFM, sanitize
}