import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import TestVideoList from './VideoList';

const VideoList = props => <TestVideoList {...props} />;

describe('Render VideoList', () => {
  it('renders without crashing', () => {
    shallow(<VideoList />);
  });

  it('render items props correctly', () => {
    const props = {
        items: [],
        onSearch: jest.fn(),
      },
      VideoListComponent = mount(<VideoList {...props} />);

    expect(VideoListComponent.prop('items')).toEqual([]);
  });

  it('check search click', () => {
    const fnClick = jest.fn();
    const props = {
      onSearch: fnClick,
      items: [{ url: '', date: '' }],
    };

    const wrapper = mount(<TestVideoList {...props} />);
    wrapper.find('ListItemText').simulate('click');
    expect(fnClick).toHaveBeenCalled();
  });
});
