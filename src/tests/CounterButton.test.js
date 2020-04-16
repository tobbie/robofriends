import {shallow} from 'enzyme'
import React from 'react'
import CounterButton from '../components/CounterButton'

describe('counter button tests',()=> {
    let wrapper;
    

    it('expect to render counter button component',() => {
        wrapper = shallow(<CounterButton />)
        expect(wrapper).toMatchSnapshot();
        
        
    });

    it('expect to render counter to increment',() => {
        wrapper = shallow(<CounterButton />)
        wrapper.find('[id="ctrButton"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 1})
        wrapper.find('[id="ctrButton"]').simulate('click');
        expect(wrapper.state()).toEqual({count:2})
        
        
    });




})