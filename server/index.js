const express = require('express');
let app = express();
let bodyparser = require('body-parser');
const getInfo = require('../helpers/github.js');
const saveInfo = require('../database/index.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  let username = req.body.name;
  getInfo.getReposByUsername(username,(err,data)=>{
    if (err) {
      console.log("err",err);
    } else {
      saveInfo.save(data);
    }
    res.send(data);
  });
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  saveInfo.query((data) => res.send(data));

});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
