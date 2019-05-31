import React from 'react';
import { shallow } from 'enzyme';
import LunchItems from '../LunchItems';

describe('LunchItems', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LunchItems debug />);

    expect(component).toMatchSnapshot();
  });
});
