/*Importar el modulo http
import http from 'http';*/

// Importando expressjs
import express from 'express';

// Crear una instancia de express
const app = express(); // (req, res)=>{...}

// Middleware de parseo de datos del cliente
app.use(express.urlencoded({extended: true}));

// Registrar nuestro primer middleware
app.use((req, res, next)=>{
    console.log("\n📣 Ejecutando el Middleware 1");
    next();
});

app.use((req, res, next)=>{
    // Invocando el siguiente middleware
    console.log(`🏁 ${req.method} - ${req.url}`)
    next();
});

// Middleware de proposito especifico
app.use('/about', (req, res)=>{
    res.send(`
    <h1 style="color: teal">About...</h1>
    <p style= #555> Esta es una pagina creada para aprender
    desarrollo web en Fullstack con JS</p>
    `)
});

//GET /add-product
app.use('/add-product', (req, res, next)=>{
    if(req.method === "POST") return next();
    // Sirviendo el formulario
    console.log("📣 Sirviendo el formulario");
    res.send(`
    <form action="/add-product" method="POST">
     <label for="title">Title</label>
     <input id="title" type="text" name="title">
     <label for="description">Description</label>
     <input id="description" type="text" name="description">
     <button type="submit">Add Product</button>
    </form>
    `);
});

// POST /add-product
app.use('/add.product', (req, res)=>{
    // Realizacion extraccion de los
    // datos en la peticion 
    for(const prop in req.body){
        console.log(`${prop} : ${req.body[prop]}`);
    }
    // Redireccionamiento
    res.redirect('/');
});

app.use((req, res)=>{
    console.log("⭐ Respondiendo al cliente");
    res.send(`
    <h1>Bienvenido a express</h1>
    <p>Este es mi software</p>
    `);
});

/*Crear el servidor 
const server = http.createServer(app);*/

// Definir puertos 
const port = 3000; //5500
const ip = "0.0.0.0"; //127.0.0.1

// Arrancando el server
app.listen(port, ip, ( err )=>{
    console.log("📣 Sirviendo en https://localhost:3000");
    //console.log(`📣 Sirviendo en https://${process.env.IP}:${process.env.PORT}`);
})