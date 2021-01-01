import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddForm from './AddForm'

configure({adapter: new Adapter()});

describe('App form', ()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<AddForm/>);
    })    
    it('should not have invalid inputs on start',() => {
        expect(wrapper.find(<div className="alert alert-danger mt-1 col-4 ">Invalid input</div>)).not.toHaveLength(3);
    })

    it('should not send the data if not valid',() =>{
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find(<div className="alert alert-danger mt-1 col-4 ">Invalid input</div>)).not.toHaveLength(3);
    })
})