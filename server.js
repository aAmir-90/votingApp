const express = require( 'express');
const app = express();


app.get('/', (req, res)=>{
    res.send('I am new here')
})
app.listen(5000, (req, res)=>{
    console.log('Listening on port: 5000')
});