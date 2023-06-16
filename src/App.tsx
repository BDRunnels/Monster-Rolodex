// import { Component } from 'react'; // Class Component
import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

// Functional Component
const App = () => {
  
  const [searchField, setSearchField] = useState(''); // [value, setValue] (getter, setter) useState(initialValue)
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    fetchMonsters();
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);
  };

  async function fetchMonsters() {
    try {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      // const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // const translatedData = await response.json();
      // setMonsters(translatedData);
      setMonsters(users); // Never is a special keyword in TypeScript --> opposite of 'any' type. Nothing can get assigned to never. 

    } catch (error) {
      throw error;
    };
  };

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLowerCase().includes(searchField);
  // });
  
  
  return (
    <div className="App">
      <h1 className="app-title"> Monster Rolodex </h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder="Search Monsters" 
        className="monsters-search-box"
      />         
      <CardList monsters={filteredMonsters}/>
    </div>
  );
};

// Class Component
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//         monsters: [],
//         searchField: ''
//     };
//   };

//     componentDidMount() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((users) => this.setState(() => {return {monsters: users}}, () => {console.log(this.state)}))
//     };

//     onSearchChange = (event) => {
//       this.setState(() => {
//         return {searchField: event.target.value.toLowerCase()}
//       });
//     };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
  
//     return (
//       <div className="App">
//         <h1 className="app-title"> Monster Rolodex </h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box"/>          
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   };
// };

export default App;