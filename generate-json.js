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
    const { title, date, tags, status, subtitle } = fm(content).attributes;
    
    if(!title) throw new Error('Missing title');
    if(!date) throw new Error('Missing date');
    if(!tags) throw new Error('Missing tags');
    
    const fileName = path.basename(lesson, '.md').split('.')[0];
    const lang = getLanguage(lesson);
    const translations = lessons.filter(l => l.includes(fileName)).map((l) => { return getLanguage(l) }).filter(l => l !== lang);

    return {
        slug: path.basename(lesson, '.md'),
        status: status || 'published',
        title, date, tags, lang, translations, subtitle
    };
});

const getLanguage = (lesson) => {
    const fileName = path.basename(lesson, '.md');
    if ((/.*\.[a-z]{2}/g).test(fileName)) 
        return fileName.split('.').pop();
    else
        return "en";
};

const createContentJSON =(content, fileName) => {
    if (!fs.existsSync("public/static/api")) fs.mkdirSync("public/static/api");
    fs.writeFileSync("public/static/api/"+fileName+".json", JSON.stringify(content));
};

walk('src/content/lesson/', function(err, results) {
    if (err){
        console.log("Error scanning markdown files");
        process.exit(1);
    } 
    
    try{
        const lessons = buildLessonsData(results);
        createContentJSON(lessons, "lessons");
        console.log("The content.json file was created!");
        process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
});
