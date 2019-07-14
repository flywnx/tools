const fs = require('fs')

function startChange() {
    let input = document.getElementById('input').value,
        output = document.getElementById('output').value,
        num = 1,
        filetype = document.getElementById('filetype').value,
        prefix = document.getElementById('prefix').value,
        suffix = document.getElementById('suffix').value
    
    if(!output) output = input
    fs.readdir(input, function (err, file) {
        console.log(err, file)
        file.forEach(element => {
            let arr = element.split('.')
            if (arr.length <= 1) {
                return
            }
            let oldPath = input + "\\" + element,
                newPath = output + "\\" + prefix + num + suffix + '.' + filetype
            fs.rename(oldPath, newPath, () => {
                console.log(newPath)
            })
            num += 1
        })
    })
}
