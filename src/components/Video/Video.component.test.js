import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import TestVideoComponent from './Video.component';

const VideoComponent = props => <TestVideoComponent {...props} />;

describe('Render VideoComponent', () => {

  it('renders without crashing', () => {
    shallow(<VideoComponent />);
  });

});
