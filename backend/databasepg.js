const{Client}=require('pg')

const client =new Client({
host:"localhost",
user:"postgres",
port:5432,
password:"root",
databse:"northwind"

})
client.connect();
client.query('Select * from orders',(err,res)=>
{



  if(!err)
  {
    console.log(err.rows);

  }
  else
  {
    console.log(err.message);
  }
  client.end;

})

