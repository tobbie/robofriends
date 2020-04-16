import {shallow} from 'enzyme'
import React from 'react'
import Scroll from '../components/Scroll'

describe('scroll tests',()=> {
    
    
    it('expect to render scroll component',() => {
        expect(shallow(<Scroll/>)).toMatchSnapshot();
        
    });
})