const path = require('path');
const fs = require('fs');
const axios = require('axios');
const fm = require('front-matter')

const walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
      if (err) return done(err);
      var pending = list.length;
      if (!pending) return done(null, results);
      list.forEach(function(file) {
        file = path.resolve(dir, file);
        fs.stat(file, function(err, stat) {
          if (stat && stat.isDirectory()) {
            walk(file, function(err, res) {
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
const indexLessons = (allLessons) => ({
    names, 
    lessons: allLessons.map(l => {
        const fileName = l.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.').toLowerCase();
        names.push(fileName);
        const [ originalSlug, lang ] = fileName.split('.');
        const content = fs.readFileSync(l, 'utf8');
        let front_matter = fm(content);
        return {
            path: l,
            content,
            front_matter,
            originalSlug,
            slug: front_matter.slug || originalSlug,
            lang: lang || "us",
            fileName,
            onlinePath: `lesson/${originalSlug}`,
        }
    })
});

const regex = {
  relative_images: /!\[.*\]\((\.\/.*\.[a-zA-Z0-9]{2,3})/gm, 
  external_images: /!\[.*\]\((https?:\/\/.*)\)/gm
}

const findInFile = (types, content) => {
  const validTypes = Object.keys(regex);
  if(!Array.isArray(types)) types = [types];
  
  let findings = {}
  
  types.forEach(type => {
    if(!validTypes.includes(type)) throw Error("Invalid type: "+type)
    else findings[type] = [];
  });

  types.forEach(type => {

    while ((m = regex[type].exec(content)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
          console.log(`Found match, group ${groupIndex}: ${match}`);
        });
      findings[type].push({ expression: m[0], value: m[1] })
    }
  })

  return findings;
}

const download = async (url, image_path) => {
  console.log("Downloading", url)
  const response =  await axios({
    url,
    responseType: 'stream',
  })
    
  console.log("Ready to download", url)
  return new Promise((resolve, reject) => {
    console.log("Response")
    response.data
      .pipe(fs.createWriteStream(image_path))
      .on('finish', () => resolve())
      .on('error', e => reject(e));
  })
}
module.exports = {
  walk, indexLessons, findInFile, download
}