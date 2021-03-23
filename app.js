// // Para crear paginas estaticas se usa de esta manera creando una carpeta public donde iran nuestros archivos
// const express = require('express')
// const app = express()

// // este seria nuestro midelware que es una funcion que se ejecuta antes de que especificar las rutas
// app.use(express.static(__dirname + '/public'))

// app.get('/', (req,res) => res.end('hola mundo desde Express'))

// app.get('/servicios', (req,res) => res.end('pagina de servicios'))

// // este otro midelware es para cuando la ruta no existe osea nuestra pagina 404
// app.use((req, res) => res.status(404).sendFile(__dirname + '/public/404.html'))

// app.listen(3000, () => console.log(`servidor corriendo en el puerto`))
// // =========================================================================================================


// const express = require('express')

// const app = express()

// const port = 3000

// app.use(express.static(__dirname + '/public/'))

// app.get('/', (req, res) => res.end(`express corriendo en el servidor ${port}`))

// app.get('/contact', (req, res) => res.end('para contacto por fredneyparra0@gmail.com'))

// app.use((req, res) => res.status(404).sendFile(__dirname + '/public/404.html'))

// app.listen(port,() => console.log('servidor funcionando correctamente'))


// =====================================================================================
// const express = require('express')

// const app = express()

// const port = 3000

// app.use(express.static(__dirname + '/public'))

// app.get('/contact',(req, res) => res.end('for contact me fredney@gmail.com'))

// app.use((req, res) => res.status(404).sendFile(__dirname + '/public/404.html'))

// app.listen(port, () => console.log(`server run in port ${port}`))

// =====================================================================================

// const express = require('express')

// const app = express()

// const port = 3000

// // para llamar al motor de  plantilla 
// app.set('view engine','ejs')
// app.set('views', __dirname + '/views')

// app.use(express.static(__dirname + '/public'))

// app.use('/', require('./router/routesWeb'))

// app.use((req, res) => res.status(404).render('404'))

// app.listen(port, () => console.log('server run in port ' + port))

// ========================================================================

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index',{titulo: 'hola señor index'})
})



app.listen(port, () => {
  console.log('server run in port ' + port)
}) 