import {shallow} from 'enzyme'
import React from 'react'
import CardList from '../components/CardList'

describe('cardlist tests',()=> {
    
    const mockRobots = [
        {
            id : 1,
            name : 'Sam Jones',
            email : 'samjones@example.com'
        }
    ]
    it('expect to render cardlist component',() => {
        expect(shallow(<CardList robots = {mockRobots}/>)).toMatchSnapshot();
        
    });
})