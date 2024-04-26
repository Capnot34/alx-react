import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').exists()).toEqual(true);
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
});