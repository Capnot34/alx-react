import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => { 
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders a footer tag', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer')).toHaveLength(1);
    });

    it('renders the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain("Copyright");
    });
});