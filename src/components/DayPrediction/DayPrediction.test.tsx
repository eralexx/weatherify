import * as React from 'react';
import { shallow } from 'enzyme';
import DayPrediction from './DayPrediction';

describe('<DayPrediction />', () => {
  test('renders', () => {
    const wrapper = shallow(<DayPrediction />);
    expect(wrapper).toMatchSnapshot();
  });
});
  