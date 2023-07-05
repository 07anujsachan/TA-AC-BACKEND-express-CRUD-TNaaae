 var express  = require('express');

  var app = express();
  // middlewere

  app.set('view' , 'ejs');
  app.set('views' , path.join(__dirname , 'views'))

  app.get('/', (req, res) =>{
    res.render('index.ejs')
  })

  app.listen(3000 ,  () =>{
    console.log('server is listening on port 3k');
  })