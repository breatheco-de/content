const screenshot = require("./utils/screenshot");

module.exports = (req, res) => {
    res.send(`Hello world`)
    // const url = req.query.url || "https://github.com/opsb/node-webshot-server";

    // const file = await screenshot.take(url);
    // res.writeHead(200, { 'Content-Type': 'image/png' });
    // fs.readFile(file, function(err, data){
    //     res.end(data);
    // });
};