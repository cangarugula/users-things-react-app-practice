const express = require('express')
const {syncAndSeed,User,Thing,P} = require('./db')
const app = express()
const router = require('./routes')
const path = require('path')
const port = process.env.PORT || 3000

syncAndSeed()


app.get('/',(req,res,next)=> {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.use('/dist',express.static(path.join(__dirname,'dist')))
app.use('/style.css',express.static(path.join(__dirname,'style.css')))

app.use(router)
app.listen(port, ()=> { console.log(`listening on port: ${port}`)})
