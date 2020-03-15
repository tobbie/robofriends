import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll'

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
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })
 
        if(!robots.length){
            return(<h1>Loading....</h1>)
        }
        else{
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
}

export default App