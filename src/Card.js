import React, {Component} from 'react'

class Card extends Component{
    render(){
        const {name, email , id } = this.props;
        return(
            <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
                <img alt='robot' src={`https://robohash.org/${id}?200X200`}></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;