import React, {Component} from 'react';

class Hello extends Component{
    render(){
        return(
            <div className = 'f1 tc'>
                <h1>Hello world</h1>
                <p>{this.props.greetings}</p>
            </div>
           
        )
    }
}

export default Hello