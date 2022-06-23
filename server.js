const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config()

app.use(express.static('./public'))

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server started on port', process.env.PORT || 5000)
})