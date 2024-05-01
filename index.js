const request = require('request');
const express = require('express');
const cors = require('cors');
require("dotenv").config();


const app = express(); 
app.use(cors());
app.set('view engine', 'ejs');


const apiKey = process.env.API_KEY
console.log(apiKey);


let apikey = '1efb072b1eb63aa29d18a2ce598598da';
let pass = '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';
let endpoint = 'orders';

let options = {
  'method': 'GET',
  'url': `https://${apikey}:${pass}@silvertesting.myshopify.com/admin/api/2022-07/${endpoint}.json`,
  'headers': {
    'Content-Type': 'application/json'
  }
};

app.get("/display", (req, resp) => {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        resp.send(response.body);
        console.log(response.body); 
});
});

app.get("/orderdata",(reqs, resp) => {
      resp.render('orders');
});

app.get("/cancel/:id/", (req, resp)=>{
  let orderid = req.params.id;
  // resp.json({id:orderid});

  let options1 = {
    'method': 'POST',
    'url':  `https://${apikey}:${pass}@silvertesting.myshopify.com/admin/api/2022-07/${endpoint}/${orderid}/cancel.json`,
    'headers': {
      'Content-Type': 'application/json'
    }
  }; 
  request(options1, function (error, response) {
    if (error) throw new Error(error);
    resp.send(response.body);
    //console.log(response.body); 
});
}); 


  
app.listen(4400);     
