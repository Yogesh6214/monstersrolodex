import {Component} from 'react'
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: "Pichani",
          id: "mons1",
        },
        {
          name: "Chudail",
          id: "mons2",
        },
        {
          name: "Dakani",
          id: "mons3",
        },
        {
          name: "Bharmrakshash",
          id: "mons4",
        },
        {
          name: "Jin",
          id: "mons5",
        },
        {
          name: "Bhoot",
          id: "mons6",
        },
      ],
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
     return (
       <div className="App">
         {
          this.state.monsters.map(monsters => <h1 key={monsters.id}>{monsters.name}</h1>)
         }
       </div>
     );
  }
}

export default App;
