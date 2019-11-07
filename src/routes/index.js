module.exports = app => {

    // Definición de las rutas
    app.get('/', (req, res) => {
        res.send('Empecemos....... con el index')
    });

};