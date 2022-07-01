const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const router = require('./backend/src/index.routes')
const morgan = require('morgan')
const {json, urlencoded} = require('body-parser')
const connectionDB = require('./backend/config/connectionDB')

dotenv.config()

const app = express()

connectionDB()

app.use(json())
app.use(urlencoded({extended:true}))
app.use(morgan('dev'))

app.use(router)


if(process.env.NODE_ENV ==='production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

app.all('*', (req,res) => {
    res.status(404).json({
        message: `URL ${req.originalUrl} tidak dapat ditemukan`
    })
})


app.listen(process.env.PORT, () => {
    console.log('App is running on port 3010')
})