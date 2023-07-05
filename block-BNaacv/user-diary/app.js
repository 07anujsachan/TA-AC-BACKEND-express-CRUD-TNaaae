var express  = require('express');
var path = require('path');
var studentsRouter = require('./routes/students')

var app = express();


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))

app.get('/', (req, res) =>{
  res.render('index.ejs')
})
 app.use('./students' , studentsRouter)

app.use((req ,  res , next) =>{
res.status(404).send('page not found')
})

app.listen(3000 ,  () =>{
  console.log('server is listening on port 3k');
})