import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import TestVideoItem from './VideoItem';

const VideoItem = props => <TestVideoItem {...props} />;

describe('Render VideoSearch', () => {

  it('renders without crashing', () => {
    shallow(<VideoItem />);
  });

  it('render url prop correctly', () => {
    const props = {
      url: 'test url'
    },
    VideoItemComponent = mount(<VideoItem {...props} />);
    expect(VideoItemComponent.prop('url')).toEqual('test url');
  });
});
