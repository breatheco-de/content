const nodeHtmlToImage = require('node-html-to-image')
const fm = require('front-matter');
const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const stat = promisify(fs.stat);

const createThumb = async (lessonPath) => {

    const fileName = lessonPath.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.').toLowerCase();
    if(!fs.existsSync(lessonPath)) console.log("Invalid path "+lessonPath);
    if(fs.existsSync(`./src/assets/${fileName}.jpeg`)) return true;
    
    console.log("Trying to createe "+lessonPath);
    const content = fs.readFileSync(lessonPath, 'utf8');
    //'Gogogo now!'.match(/(go)+/ig)
    const { slug, title, date, tags, status, authors, subtitle } = fm(content).attributes;
    
    console.log("beatch ", title);
    try{
        let result = await nodeHtmlToImage({
            output: './src/assets/'+fileName+'.png',
            html: `<html>
            <head>
            <style>
            body {
                width: 2480px;
                height: 3508px;
            }
            </style>
            </head>
            <body>${title}</body>
            </html>
            `
        })
        console.log(`asd`, result);
        console.log('Image for '+fileName+" created successfully!");
    }
    catch(error){
        console.log(error);

    }
    return true;
}

const pfs = (_path) => 
    new Promise((resolve, reject) => 
        fs.readdir(_path, (err, filenames) => err ? reject(err) : resolve(filenames)))

const walk = async function(dir) {
    var results = [];
    const list = await pfs(dir);
    if (!list.length) return results;
    for(let i = 0; i<list.length; i++){
        let file = list[i];
        file = path.resolve(dir, file);
        const _stat = await stat(file);
        if (_stat && _stat.isDirectory()) {
            const res = await walk(file);
            results = results.concat(res);
            return results;
        } else {
            results = results.concat(list);
            return results;
        }
    }
};

(async () => {
    
    try{
        const files = await walk('src/content/lesson');
        console.log("files", files);
        for(let i = 0; i<files.length; i++){
            console.log("Trying", files.length);
            const resp = await createThumb('./src/content/lesson/'+files[i]);
            console.log("Success!! All thumbs have been generated".green);
            process.exit(0);
        }
        // console.log("list", list)
    }
    catch(error){
        console.log("Error scanning lesson files".red);
        process.exit(1);
    }
})();