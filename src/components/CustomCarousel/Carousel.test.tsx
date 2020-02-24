import * as React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('<Carousel />', () => {
  test('renders', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});
  