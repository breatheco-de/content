const {walk, indexLessons} = require("../files")
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
                const result = indexLessons(results);
                let newvalues = {}
                let conditions = {}
                if(args['--statusTo']) newvalues.status = args['--statusTo'];
                if(args['--statusFrom']) conditions.status = args['--statusFrom'] == "null" ? null : args['--statusFrom'];

                if(args['--slug'] !== 'all'){
                    const lesson = result.lessons.find(l => l.originalSlug === args['--slug'])
                    if(lesson) update(lesson, newvalues, conditions, args['--test'])
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


const update = (lesson, data, conditions={}, test=false) => {

    const  { content, path, front_matter } = lesson;
    if(
        (conditions.status === null && front_matter.attributes.status !== undefined && front_matter.attributes.status !== null)
        ||
        (conditions.status && front_matter.attributes.status !== conditions.status)
    ){
        console.log(`Ignoring lesson ${lesson.slug} because status is not ${conditions.status}`)
        return false;
    }
    
    // clean up the missing data
    Object.keys(data).forEach(key => data[key] === null && delete data[key] )

    let attributes = { ...front_matter.attributes, ...data };

    const newContent = `---
${Object.keys(attributes).reduce((total, key) => {
    if(Array.isArray(attributes[key])) return total+`${key}: [${attributes[key].map(i => `"${i}"`).join(",")}]\n`
    else return total+`${key}: "${attributes[key]}"\n`
},"")}
---

${front_matter.body}`;

    if(test === false){
        console.log("Updating "+path+ " ...")
        fs.writeFileSync(path, newContent);
        console.log("Lesson updated "+lesson.slug, (front_matter.status), front_matter)
    }
    else console.log("TEST: Lesson updated "+path+ " with: ", newContent)
}