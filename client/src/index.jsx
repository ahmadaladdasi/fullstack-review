import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    this.fillRepos((dbData) => this.setState({repos:dbData}));
  }

  fillRepos (cb) {
    console.log(`Get request sent Repos should be filled`);
    $.ajax({
      "method": "Get",
      "url": "/repos",
      "ContentType": "application/json",
      success: function(data) {
        // console.log(data);
        cb(data)
      },
      fail: function(err){
        console.log(err);
      }
    })
  }

  search (term) {
    let context = this;
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      "method": "POST",
      "url": "/repos",
      "data": {"name": term},
      "ContentType": "application/json",
      success: function(data) {
        console.log(data);
        // console.log(context);
        context.fillRepos((dbData) => context.setState({repos:dbData}))
        // fillRepos(c);
      },
      fail: function(err){
        console.log(err);
      }
    })

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos} key={this.state.repos.id}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
