const express = require('express')
const app = express();
const db=require('./db')
require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json())

const PORT=process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('welcome to my website')
})

const personRoutes=require('./routers/personRoutes');
app.use('/person',personRoutes)

const menuItemRoutes=require('./routers/menuItemRoutes');
app.use('/menuitem',menuItemRoutes)



app.listen(PORT,()=>{
    console.log("listening on port 3000")
})