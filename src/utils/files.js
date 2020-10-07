const path = require('path');
const fs = require('fs');
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


  module.exports = {
    walk, indexLessons
  }