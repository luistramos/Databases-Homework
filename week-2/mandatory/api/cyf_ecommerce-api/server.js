const express =  require('express');
const app = express();

const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cyf_ecommerce',
    password: 'Teddy123#',
    port: 5432
});

// Consulta todos los clientes de la BD
app.get("/customers", function(req, res) {
    pool.query('select * from customers', (error, result) => {
        res.json(result.rows);
    });
});

// Consulta todos los suplidores de la BD
app.get("/suppliers", function(req, res) {
    pool.query('select * from suppliers', (error, result) => {
        res.json(result.rows);
    });
});

// Consulta todos los productos y suplidores por su nombre
app.get("/products", function(req, res) {
    pool.query('select p.product_name , s.supplier_name from suppliers s join products p on s.id = p.supplier_id', (error, result) => { 
        res.json(result.rows);
    });
});

app.listen(3000, function() {
    console.log("Server is Listening on port 3000. Ready to accept request!");
});    