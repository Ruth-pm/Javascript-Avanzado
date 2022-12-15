const express= require ('express');

const app = express()
const port = 3000;
const resultado = 20 + 15

app.get('/user', (req, res) => {
    // res.send('Hello World!!')
    res.send(`OPERACIÓN MATEMÁTICA: La suma de 20 + 15 = ${resultado}`)
})

app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});