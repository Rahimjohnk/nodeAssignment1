const http = require('http');
const server = http.createServer((req, res)=>{
    // console.log(req);
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><h1>Hello Node Js</h1></head>');
        res.write(`<body>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        <button type="submit">Submit</button>
                        </form>
                    </body>`);
        res.write('<html>');
        res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const text = parsedBody.split('=')[1];
            console.log(text);
            res.write('<html>');
        res.write(`<head><h1>${text}</h1></head>`);
        res.write('<html>');
        res.end();
        });
        
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<ul>');
        res.write('<li>A</li>');
        res.write('<li>B</li>');
        res.write('<li>C</li>');
        res.write('<li>D</li>');
        res.write('</ul>');
        res.write('<html>');
        res.end();
    }
});

server.listen(3000);