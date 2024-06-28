/**
 * Importa la biblioteca Express.js
 */
import express from 'express';

/**
 * Crea una instancia de la aplicación Express
 */
const app = express();

/**
 * Manejador de ruta para la ruta raíz (/)
 * @param {object} req - Objeto de solicitud
 * @param {object} res - Objeto de respuesta
 */
app.get('/', (req, res) => {
  res.send('Hello Maldonado');
});

/**
 * Manejador de ruta para la ruta /saludo/:nombre
 * @param {object} req - Objeto de solicitud
 * @param {object} res - Objeto de respuesta
 * @param {string} req.params.nombre - Parámetro de ruta "nombre"
 */
app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(`hola ${nombre}`);
});

/**
 * Inicia la aplicación en el puerto 3000
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});