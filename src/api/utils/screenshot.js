const webshot = require('webshot');
const fs = require('fs');

module.exports = {
    take: () => new Promise((resolve, reject) => {
        var renderStream = webshot('google.com');
        var file = fs.createWriteStream('google.png', {encoding: 'binary'});
        renderStream.on('data', function(data) {
            resolve(file.write(data.toString('binary'), 'binary'));
        });
    })
};