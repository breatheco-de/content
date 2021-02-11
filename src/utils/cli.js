const arg = require('arg');
const { dir } = require('console');
const fs = require('fs');
const path = require('path');

let myArgs = process.argv.slice(2);
const command = myArgs[0];
const dirPath = path.join(__dirname, '/commands/'+command) + ".js";
if(fs.existsSync(dirPath)){
    const commandScript = require(dirPath);
    let args = arg(commandScript.args);
    Object.keys(commandScript.args).forEach(_a => 
        args[_a] === undefined ? 
            commandScript.defaults[_a] === undefined ? 
                args[_a] = null 
                : 
                args[_a] = commandScript.defaults[_a]
            :
            null
        )
    commandScript.run(args);
}
else{
    console.error(`Command ${command} not found`)
}
