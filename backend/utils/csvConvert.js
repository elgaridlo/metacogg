const fs = require('fs')
const csv = require('fast-csv')

const convertCsv = (filePath) => {
    return new Promise(function(resolve,reject){
        let fetchData = [];
        fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => {
            fetchData.push(row)
        })
        .on('end', () => {
            resolve(fetchData);
        });
    })
}

module.exports = convertCsv