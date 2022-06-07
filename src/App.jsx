import "./App.css";
import React, { Component } from "react";
import Cardlist from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";


class App extends Component {
    constructor() {
        super();
        this.state = {
            monster: [],
            searchField: ''
        };
        this.handleChange = this.handleChange.bind(this); // to bind this.handleChange to the (this.HandleChange) of the class.
        // this.function_1 = this.function_2.bind(this);
        // above line binds this.function_1 to the function_2, so whenever func1 is called, it will actually be function_2.
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(r => console.log(r))
            .then(apiResponse => this.setState({ monster: apiResponse }))
            .catch(error => console.log(error));
    }

    handleChange(e) {
        this.setState({ searchField: e.target.value }, () => { console.log(this.state) })
    }




    render() {
        const monsters = this.state.monster;
        const searchField = this.state.searchField;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Catto Card</h1>
                <div className="main">
                    <SearchBox placeholder={"search for cute cats here 😽"} handleChange={this.handleChange} />
                    <Cardlist monster={filteredMonsters}>
                    </Cardlist>
                </div>

            </div>
        );
    }
}

export default App;
