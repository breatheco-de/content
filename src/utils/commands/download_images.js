const {walk, indexLessons, findInFile, download } = require("../files")
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
        // '--test':    String,
        // '--version': Boolean,
        // '--verbose': arg.COUNT,   // Counts the number of times --verbose is passed
        // '--port':    Number,      // --port <number> or --port=<number>
        // '--name':    String,      // --name <string> or --name=<string>
        // '--tag':     [String],    // --tag <string> or --tag=<string>
    },
    defaults: {
        '--path': null,
        // '--statusTo': null,
        // '--test': false
    },
    run: (args) => {
        walk('src/content/lesson', function(err, results) {
            if (err){
                console.log("Error scanning lesson files".red);
                process.exit(1);
            } 
            
            try{
                const result = indexLessons(results);
                let newvalues = {}
                let conditions = {}

                if(args['--slug'] !== 'all'){
                    const lesson = result.lessons.find(l => l.originalSlug === args['--slug'])
                    if(lesson) downloadImages(lesson, args['--path'])
                    else console.log(`Lesson ${args['--slug']} not found`, lesson)
                }
                else{
                    result.lessons.forEach(lesson => {
                        update(lesson, newvalues, conditions, args['--test'])
                    })
                }
                process.exit(0);
            }
            catch(error){
                console.log("Error", error);
                process.exit(1);
            }
        })
    }
}


const downloadImages = async (lesson, downloadPath=null) => {

    const  { content, front_matter } = lesson;
    const findings = findInFile('external_images',content);
    const dirPath = path.join(__dirname, '/../../assets/images');

    for(type in findings){
        for(let i=0;i<findings[type].length; i++){
            let item = findings[type][i];
            const resp = await download(item.value, downloadPath || dirPath);
            console.log("Status: ", resp.status)
        }
    }
}