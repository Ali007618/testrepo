import { useState, useEffect } from "react";

// import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-list.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    let searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredMonstersNew = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonstersNew);
  }, [monsters, searchField]);

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLowerCase().includes(searchField);
  // });

  return (
    <div className="App">
      <h1 className="card-title">Made by Ali</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="Search Monster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//       checkBox: false,
//     };
//   }

//   componentDidMount = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   };

//   onSearchChange = (event) => {
//     // this.setState(() => {
//     //   return { monters: this.state.monsters };
//     // });
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="card-title">Made by Ali</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange}
//           className="search-box"
//           placeholder="Search Monster"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
