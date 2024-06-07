import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Maldonado');
});

app.get("/saludo/:nombre", (req, res) => {
  const nombre= req.params.nombre
  res.send(`hola ${nombre}`)
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
