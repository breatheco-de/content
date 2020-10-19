const {walk, indexContent, updateFrontMatter, sanitize} = require("../files")
const fs = require('fs');
const { POSSIBLE_STATUS } = require("../variables")


module.exports = {
    args: {
        // Types
        '--slug':    String,
        // '--version': Boolean,
        // '--verbose': arg.COUNT,   // Counts the number of times --verbose is passed
        // '--port':    Number,      // --port <number> or --port=<number>
        // '--name':    String,      // --name <string> or --name=<string>
        // '--tag':     [String],    // --tag <string> or --tag=<string>
    },
    defaults: {
        '--slug': null,
    },
    run: (args) => {

        walk('src/content', function(err, results) {
            if (err){
                console.log("Error scanning lesson files".red);
                process.exit(1);
            } 
            
            try{
                const result = indexContent(results);

                if(args['--slug'] !== 'all'){
                    const lesson = result.lessons.find(l => l.originalSlug === args['--slug'])
                    if(lesson) updateFrontMatter(lesson, sanitize(lesson))
                    else console.log(`Lesson ${args['--slug']} not found`, lesson)
                }
                else{
                    result.lessons.forEach(lesson => {
                        updateFrontMatter(lesson, sanitize(lesson))
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