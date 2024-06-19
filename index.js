import 'dotenv/config'
import express from 'express'
import studentRoutes from './routes/student.route.js'

const app = express()

const __dirname = import.meta.dirname

// Habilitar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuración de archivos estáticos
app.use(express.static(__dirname + '/public'))

// Routes
app.use('/students', studentRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Servidor andando en el puerto ', PORT))