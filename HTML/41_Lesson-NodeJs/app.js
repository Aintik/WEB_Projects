const path = require('path')
const fs = require('fs')
const os = require('os')

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

// const objPath = path.parse(__filename)
// console.log(objPath);

// console.log(path.join(__dirname, 'papka', 'config'));

// fs.mkdir(path.join(__dirname, 'route'), {}, err => {
//     if (err) throw err
//     console.log('folder created');
// })
// fs.writeFile(path.join(__dirname, 'route', 'par.txt'), 'Hello', err => {
//     if (err) throw err
//     console.log('file created');
// })
// fs.appendFile(path.join(__dirname, 'route', 'par.txt'), '\n New text', err =>{
//     if (err) throw err
//     console.log('added');
// })
// fs.readFile(path.join(__dirname, 'route', 'par.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data);
// })
// fs.rename(
//     path.join(__dirname, 'route', 'par.txt'),
//     path.join(__dirname, 'route', 'paragraf.txt'),
//     err => {
//         if (err) throw err
//         console.log('renamed');
//     })

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.arch());