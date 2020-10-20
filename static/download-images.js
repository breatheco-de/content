const path = require('path');
const fs = require('fs');
const currentPath = path.join(__dirname, './');
const Scraper = require('image-scraper');


walk('src/content/lesson', function(err, results) {
    if (err){
        console.log("Error scanning lesson files".red);
        process.exit(1);
    } 
    
    try{
        const result = indexContent(results);
        result.lessons.forEach(l => {
            downloadImagesFromLesson(l.path)
        })
        console.log("Success!! All files are valid".green);
        process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
});


let log = {
    errors: [],
    ignored: [],
    success: [],
};

const downloadImagesFromLesson = new Promise((resolve, reject) => (path) => {
    var scraper = new Scraper(path);
    scraper.scrape(function(image) { 
        console.log("image", image)
        if(image.attributes)
            if(!log.success.includes(image.attributes.src)){
                image.save();
                log.success.push(image.attributes.src)
            }
            else log.ignored.push(image.attributes.src)
        else{
            console.log(`Error downloading`, image)
            log.errors.push(image)
        }

        fs.writeFileSync(currentPath+"/report.json", JSON.stringify(log, null, 2))
        resolve(log);
    });
})