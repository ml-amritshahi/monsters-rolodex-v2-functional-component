import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(()=> {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString);
  }

  // const filterMonsters = monsters.filter((monster) => {
  //         return monster.name.toLocaleLowerCase().includes(searchField);
  //       });


  

  return (
    <div>
      <h1 className="a-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      
    <CardList monsters={filteredMonsters}/>
    </div>
  );
};

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters : [],
//       searchField: ''
//     }
//   }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return {monsters: users}
//       },
//       () => {
//         console.log(this.state)
//       }
//       )
//     )
// }

// onSearchChange =  (event) => {
//   // console.log(event.target.value);
//   const searchField = event.target.value.toLocaleLowerCase()

//   this.setState(() => {
//     return {searchField}
//   })
//   ;

// }

//   render() {
//     // Destructure
//     const { monsters, searchField} = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div>
//         <h1 className="a-title">Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className="monsters-search-box"/>
//       <CardList monsters={filterMonsters}/>
//       </div>
//     )
//   }
// }
export default App;
