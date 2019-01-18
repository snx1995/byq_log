const fs = require("fs");

exports.readMD = function readMarkdown(name, success, error){
    let data = fs.readFile(name, (err, data) => {
        if (err) {
            console.error(err);
            if (typeof error == 'function') error(err, data);
        }
        if (typeof success == "function") success(data);
    })
}

exports.test = 2;

