const {walk, indexContent, findInFile, download } = require("../files")
const fs = require('fs');
const path = require('path');
const { POSSIBLE_STATUS } = require("../variables")


module.exports = {
    args: {
        // Types
        // '--statusTo':    String,
        // '--statusFrom':    String,
        '--slug':    String,
        '--path':    String,
        '--type':    String,
        // '--test':    String,
        // '--version': Boolean,
        // '--verbose': arg.COUNT,   // Counts the number of times --verbose is passed
        // '--port':    Number,      // --port <number> or --port=<number>
        // '--name':    String,      // --name <string> or --name=<string>
        // '--tag':     [String],    // --tag <string> or --tag=<string>
    },
    defaults: {
        '--path': null,
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
                console.log("Scaning lesson: ", args['--type'])
                if(args['--slug'] !== 'all'){
                    const lesson = result.lessons.find(l => l.originalSlug === args['--slug'])
                    if(lesson){
                        await downloadImages(lesson, args['--type'],args['--path'])
                        console.log("Successfully downloaded ", lesson.originalSlug, lesson.lang)
                    } 
                    else console.log(`Lesson ${args['--slug']} not found`, lesson)
                }
                else{
                    for(let i = 0; i < result.lessons.length; i++){
                        await downloadImages(result.lessons[i], args['--type'], args['--path'])
                        console.log("Successfully downloaded ", result.lessons[i].originalSlug, result.lessons[i].lang)
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


const downloadImages = async (lesson, type='external_images', downloadPath=null) => {

    const  { content, front_matter } = lesson;
    const findings = findInFile(type,content);

    const dirPath = path.join(__dirname, '/../../assets/images');
    for(expression in findings[type]){
        let matches = /.*(https?:\/\/[a-zA-Z_\-.\/0-9]+).*/gm.exec(expression);
        if(matches){
            let url = matches[1];
            let fileName = findings[type][expression].replace("/","");
            await download(url, `${downloadPath || dirPath}/${fileName}`);
        }
    }
}