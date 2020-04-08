import React from 'react'
import Card from './Card'



const CardList = ({robots}) => {
  const cardsArray =   robots.map((user, index) => {
                            return ( <Card key= {index} name = {user.name} email = {user.email} id = {user.id}/>)
                        });
                        console.log('CardList')
   return(<div>
            {cardsArray}
         </div>);
}

export default CardList;