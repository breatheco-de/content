const {walk, indexContent, findInFile, updateLesson, walkAsync } = require("../files")
const fs = require('fs');
const path = require('path');
const { POSSIBLE_STATUS } = require("../variables")

module.exports = {
    args: {
        // Types
        // '--statusTo':    String,
        // '--statusFrom':    String,
        '--slug':    String,
        '--type':    String,
        // '--path':    String,
        // '--test':    String,
        // '--version': Boolean,
        // '--verbose': arg.COUNT,   // Counts the number of times --verbose is passed
        // '--port':    Number,      // --port <number> or --port=<number>
        // '--name':    String,      // --name <string> or --name=<string>
        // '--tag':     [String],    // --tag <string> or --tag=<string>
    },
    defaults: {
        '--slug': null,
        '--type': 'external_images',
        // '--statusTo': null,
        // '--test': false
    },
    run: (args) => {
        
        walk('src/content', async function(err, results) {
            if (err){
                console.log("Error scanning lesson files".red);
                process.exit(1);
            } 
            
            try{
                const result = indexContent(results);

                const images = await walkAsync('src/assets/images')
                let extensions = {};
                images.forEach(p => {
                    const parts = path.basename(p).split(".")
                    extensions[parts[0]] = parts[1];
                })

                if(args['--slug'] !== 'all'){
                    const lesson = result.lessons.find(l => l.originalSlug === args['--slug'])
                    if(lesson){
                        // console.log("Found lesson", lesson)
                        console.log("Localizing ", lesson.originalSlug, lesson.lang)
                        await localizeImage(lesson, args['--type'], extensions)
                    } 
                    else console.log(`Lesson ${args['--slug']} not found`, lesson)
                }
                else{
                    for(let i = 0; i < result.lessons.length; i++){
                        console.log("Localizing ", result.lessons[i].originalSlug, result.lessons[i].lang)
                        await localizeImage(result.lessons[i], args['--type'], extensions)
                    }
                }
                process.exit(0);
            }
            catch(error){
                console.log("Error", error.message);
                process.exit(1);
            }
        })
    }
}


const localizeImage = async (lesson, type='external_images', extensions) => {

    let  { content, front_matter } = lesson;
    const findings = findInFile(type,content);

    const dirPath = path.join(__dirname, '/../../assets/images');

    for(expression in findings[type]){
        let matches = /.*(https?:\/\/[a-zA-Z_\-.\/0-9]+).*/gm.exec(expression);
        if(matches){
            let url = matches[1];
            let fileName = findings[type][expression].replace("/","");
            if(fileName.indexOf(".") === -1){
                if(extensions[fileName]) fileName = fileName + "." + extensions[fileName];
                else console.log("Extension not found for "+fileName)
            } 
            let imagePath = dirPath + "/" + fileName;
            
            if(fs.existsSync(imagePath)){
                console.log(`Replacing ${url} with ${"../../assets/images/"+fileName}`)
                content = content.replace(RegExp(url, 'g'), "../../assets/images/"+fileName)
            }else{
                console.log("Ignored "+url+" not found "+imagePath)
            }
        }
    }
    updateLesson(lesson, content)
}