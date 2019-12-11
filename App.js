import React, {Component} from 'react';
import {CardList} from './component/cardList/cardList';
import {SearchBox} from './component/searchBox/searchBox';
import './App.css';


class App extends Component {
  state = {
    monsters:[],
    searchField: ''
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({ monsters:users}));
}

handelChange =(e) => {
  this.setState({searchField: e.target.value})
}
  


render() {
  const {monsters,searchField} = this.state;
  const filterMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
  return (
    <div className="App"  >
     <SearchBox handelChange={this.handelChange} placeholder='search monsters:' />
     <CardList monsterUsers={filterMonsters} />
    </div>
  );
}
}

export default App;
