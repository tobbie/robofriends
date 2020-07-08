import {shallow} from 'enzyme'
import React from 'react'
import Card from '../components/Card'

describe('card tests',()=> {
    const mockUser = {name : 'Tobi Akinseye', email : 'tobi@example.com'}
    it('expect to render card component',() => {
        expect(shallow(<Card user = {mockUser}/>)).toMatchSnapshot();
        
    });
})




