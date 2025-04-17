const express = require('express')
const path = require('path')

const app = express()

const PORT =3000

app.use(express.static(path.join(__dirname,'views')))
//1

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})