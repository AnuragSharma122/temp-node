const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('here is about page');
    }
    // res.end(`
    // <h1>Oops</h1>
    // <p>We cant find the page</p>
    // `)
})

server.listen(5000);