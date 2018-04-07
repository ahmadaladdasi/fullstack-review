const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : {type: Number, unique: true, required: true, index: true},
  name: String,
  owner: String,
  owner_id: Number,
  repoURL : String,
  description : String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {

  repos.forEach(repo => {
    let newRepo = new Repo({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      owner_id: repo.owner.id,
      repoURL: repo.html_url,
      description: repo.description
    })
      newRepo.save();
  })

  // This function should save a repo or repos to
  // the MongoDB
}

let query = (cb) => {
  (Repo.find({},'id name owner repoURL description',{"sort": {id : 1}},function(err,doc) {
    cb(doc)
  }));
}

module.exports.save = save;
module.exports.query = query;
