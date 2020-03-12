import React, {Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
//import {robots} from './robots'
import './App.css';
import Scroll from './Scroll'

class App extends Component {
    constructor(){
        super();
        this.state = {
          robots : [],
          searchField : ''
        }
    }

    onSearchChanged = (event) => {
        this.setState({searchField : event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
             .then(response => {return response.json()})
             .then(users => {
                             this.setState({robots : users})
                             });
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })

        return(
            <div className ='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange= {this.onSearchChanged} />
                <Scroll>
                 <CardList robots = {filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App