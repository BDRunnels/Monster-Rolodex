import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: [],
        searchField: ''
    };
  };

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => this.setState(() => {return {monsters: users}}, () => {console.log(this.state)}))
    };

    onSearchChange = (event) => {
      this.setState(() => {
        return {searchField: event.target.value.toLowerCase()}
      });
    };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
  
    return (
      <div className="App">
        <h1 className="app-title"> Monster Rolodex </h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box"/>          
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  };
};

export default App;