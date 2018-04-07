const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username,cb) => {
  //  Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  function callback(err,res,body){
    if(err){
      console.log("err", err);
    } else {
      var info = JSON.parse(body);
      cb(null,info)
    }
  }

  request.get(options,callback)
}

// getReposByUsername("SamGetlan",(data) => data);

module.exports.getReposByUsername = getReposByUsername;
