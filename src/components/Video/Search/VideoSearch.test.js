import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import TestVideoSearch from './VideoSearch';

const VideoSearch = props => <TestVideoSearch {...props} />;

describe('Render VideoSearch', () => {
  it('renders without crashing', () => {
    shallow(<VideoSearch />);
  });

  it('render search input correctly with empty value', () => {
    const props = {
        value: null,
      },
      VideoSearchComponent = mount(<VideoSearch {...props} />);

    expect(VideoSearchComponent.prop('value')).toEqual(null);
  });

  it('check search input change', () => {
    const wrapper = mount(<VideoSearch />),
      urlInput = wrapper.find('input');

    expect(urlInput.prop('value')).toBe('');
    urlInput.simulate('change', { target: { value: 'Changed' } });
    expect(wrapper.find('input').prop('value')).toBe('Changed');
  });

  it('check search click', () => {
    const fnClick = jest.fn();
    const props = {
        value: 'test click',
        onSearch: fnClick,
      },
      VideoSearchComponent = mount(<VideoSearch {...props} />);

    const wrapper = mount(<VideoSearch {...props} />);
    wrapper.find('IconButton').simulate('click');
    expect(fnClick).toHaveBeenCalled();
    expect(VideoSearchComponent.prop('value')).toEqual('test click');
  });
});
