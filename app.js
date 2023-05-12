/*Importar el modulo http
import http from 'http';*/

// Importando expressjs
import express from 'express';

// Crear una instancia de express
const app = express(); // (req, res)=>{...}

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

app.use((req, res)=>{
    console.log("⭐ Respondiendo al cliente");
    res.send(`
    <h1>Welcome to express</h1>
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
    console.log(`📣 Sirviendo en https://${process.env.IP}:${process.env.PORT}`);
})