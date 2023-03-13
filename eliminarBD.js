const http = require('http');

// Hacer solicitud GET
http.get('http://localhost:3000/api/pokemon', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const pokemons = JSON.parse(data);

        // Eliminar cada pokemon
        pokemons.forEach((pokemon) => {
            const options = {
                method: 'DELETE',
                path: `/api/pokemon/id/${pokemon._id}`,
                port: 3000,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const req = http.request(options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    console.log(`Pokemon con id ${pokemon._id} eliminado`);
                });
            });

            req.on('error', (err) => {
                console.error(`Error al eliminar pokemon con id ${pokemon._id}: ${err}`);
            });

            req.end();
        });
    });
}).on('error', (err) => {
    console.error(`Error al hacer solicitud GET: ${err}`);
});
