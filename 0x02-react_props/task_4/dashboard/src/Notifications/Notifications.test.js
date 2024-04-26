import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

    it('renders the text "Here is the list of notifications"', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.text()).toContain('Here is the list of notifications');
    });

    it('first NotificationItem element renders the right html', () => { 
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find(NotificationItem).at(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
    });

  });

  