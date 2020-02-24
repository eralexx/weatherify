import * as React from 'react';
import { shallow } from 'enzyme';
import CustomCard from './CustomCard';

describe('<CustomCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<CustomCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
  