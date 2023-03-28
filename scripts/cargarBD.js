const http = require('http');
const fs = require('fs');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/pokemon/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const pokemonData = JSON.parse(data);
    const req = http.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    
    req.on('error', (error) => {
        console.error(error);
    });

    req.write(JSON.stringify(pokemonData));
    req.end();
});
