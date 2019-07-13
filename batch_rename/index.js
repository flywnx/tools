const fs = require('fs')
function onGetFolder() {
    console.log(__dirname)
    fs.readdir('./', function (err, file) {
        console.log(err, file)
    })
}