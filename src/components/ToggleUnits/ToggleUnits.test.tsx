import * as React from 'react';
import { shallow } from 'enzyme';
import ToggleUnits from './ToggleUnits';

describe('<ToggleUnits />', () => {
  test('renders', () => {
    const wrapper = shallow(<ToggleUnits />);
    expect(wrapper).toMatchSnapshot();
  });
});
  