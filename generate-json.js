const fs = require('fs');
const path = require('path');
const fm = require('front-matter');

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

const buildLessonsData = (lessons) => lessons.map(l => {
    const content = fs.readFileSync(l, 'utf8');
    const { title, date, tags, status } = fm(content).attributes;
    
    if(!title) throw new Error('Missing title');
    if(!date) throw new Error('Missing date');
    if(!tags) throw new Error('Missing tags');
    
    return {
        slug: path.basename(l).replace('.md',''),
        status: status || 'published',
        title, date, tags
    };
});

const createContentJSON =(content) => {
    if (!fs.existsSync("public/static/api")) fs.mkdirSync("public/static/api");
    fs.writeFileSync("public/static/api/content.json", JSON.stringify(content));
};

walk('src/content/lesson/', function(err, results) {
    if (err){
        console.log("Error scanning markdown files");
        process.exit(1);
    } 
    
    try{
        const lessons = buildLessonsData(results);
        createContentJSON(lessons);
        console.log("The content.json file was created!");
        process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
});