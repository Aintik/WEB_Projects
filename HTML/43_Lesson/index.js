const http = require('http')
const path = require('path')
const fs = require('fs')
const { addAbortSignal } = require('stream')

const server = http.createServer((request,response) => {
    if (request.url == '/contact') {
        fs.readFile(path.join(__dirname, 'Html', 'contact.html'), 'utf-8', (err, data) => {
            if(err) throw err
            response.end(data)
        })
    }
    else if(request.url == '/'){
        response.end('server')
    }
    else if(request.url == '/index'){
        fs.readFile(path.join(__dirname,'Html', 'index.html'), 'utf-8', (err, data) => {
            if(err) throw err
            response.end(data)
        })
    }
    else if (request.url == '/user') {
        fs.readFile(path.join(__dirname,'Html', 'user.html'), 'utf-8', (err, data) => {
            if(err) throw err
            response.end(data)
        })
        }
    else{
        response.end('No server')
    }
})

server.listen(3000, () => console.log('3000 port used'))

