var db = require('./database')
const express = require ('express');
const app = express();
// const bodyparser = require('body-parser');
const cors = require('cors');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

db.connect(err => {
  if (err) { console.log('err'); }
  console.log('database Connected....');
})

module.get=(app.get);

// app.get('/products',(req,res)=>{
//   res.send('get database');
// });



app.get('/products', (req, res) => {

  let qr = `Select * from public."products"`

  db.query({


          text: qr

      })

      .then(result => {



          var data1 = [];

          for (var i = 0; i < result.rows.length; i++) {

              data1.push({



                pname:result.rows[i].pname,
                price:result.rows[i].price,
                discription:result.rows[i].discription,
                imgsrc:result.rows[i].imgsrc



              });

          }

          res.send(


              data1

          );


      })

      .catch(err => console.log(err, 'errs'));

});

app.listen(3000, () => {

  console.log('Server Running');

})
