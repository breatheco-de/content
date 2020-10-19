const {walk, indexContent, updateFrontMatter} = require("../files")
const fs = require('fs');
const { POSSIBLE_STATUS } = require("../variables")


module.exports = {
    args: {
        // Types
        '--statusTo':    String,
        '--statusFrom':    String,
        '--slug':    String,
        '--test':    String,
        // '--version': Boolean,
        // '--verbose': arg.COUNT,   // Counts the number of times --verbose is passed
        // '--port':    Number,      // --port <number> or --port=<number>
        // '--name':    String,      // --name <string> or --name=<string>
        // '--tag':     [String],    // --tag <string> or --tag=<string>
    },
    defaults: {
        '--statusFrom': null,
        '--statusTo': null,
        '--test': false
    },
    run: (args) => {
        if(!args['--slug']) throw Error(`You need to specify a valid lesson --slug instead of:  ${args['--slug']}`);
        if(args['--statusTo']){
            if(!POSSIBLE_STATUS.includes(args['--statusTo'])) throw Error(`The lesson status "${args['--statusTo']}" must be one of: ${POSSIBLE_STATUS.join(", ")}`);
        }

        walk('src/content/lesson', function(err, results) {
            if (err){
                console.log("Error scanning lesson files".red);
                process.exit(1);
            } 
            
            try{
                const result = indexContent(results);
                let newvalues = {}
                let conditions = {}
                if(args['--statusTo']) newvalues.status = args['--statusTo'];
                
                // ⚠️ WARNING!! set status undefined and it will be ignored, 
                // if set to null you will be deleting the status property on the front_matter
                if(args['--statusFrom']) conditions.status = args['--statusFrom'] == "null" ? undefined : args['--statusFrom'];

                if(args['--slug'] !== 'all'){
                    const lesson = result.lessons.find(l => l.originalSlug === args['--slug'])
                    if(lesson) updateFrontMatter(lesson, newvalues, conditions, args['--test'])
                    else console.log(`Lesson ${args['--slug']} not found`, lesson)
                }
                else{
                    result.lessons.forEach(lesson => {
                        updateFrontMatter(lesson, newvalues, conditions, args['--test'])
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