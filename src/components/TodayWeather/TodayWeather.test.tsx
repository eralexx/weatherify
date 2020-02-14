import * as React from 'react';
import { shallow } from 'enzyme';
import TodayWeather from './TodayWeather';

describe('<TodayWeather />', () => {
  test('renders', () => {
    const wrapper = shallow(<TodayWeather />);
    expect(wrapper).toMatchSnapshot();
  });
});
  