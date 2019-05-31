import React from 'react';
import { shallow } from 'enzyme';
import BreakfastItems from '../BreakfastItems';

describe('BreakfastItems', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<BreakfastItems debug />);

    expect(component).toMatchSnapshot();
  });
});