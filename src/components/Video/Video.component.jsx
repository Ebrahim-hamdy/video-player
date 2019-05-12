import React, { useState } from 'react';

import VideoSearch from './Search/VideoSearch';
import VideoItem from './Item/VideoItem';
import VideoList from './List/VideoList';

const VideoComponent = () => {
  let [url, setUrl] = useState('');
  let [items, setItems] = useState([
    { url: 'https://www.youtube.com/watch?v=SsoOG6ZeyUI', date: '5/12/2019, 1:02:17 PM' },
    { url: 'https://www.youtube.com/watch?v=EUSsEch7dZA', date: '5/11/2019, 3:02:17 PM' },
    { url: 'https://vimeo.com/97107551', date: '5/12/2019, 9:02:17 PM' },
  ]);

  const onSearch = value => {
    setUrl(value);

    if (items.some(el => el.url === value)) {
      let filteredItems = items.filter(item => item.url !== value);
      setItems([{ url: value, date: new Date().toLocaleString() }, ...filteredItems]);
    } else {
      setItems([{ url: value, date: new Date().toLocaleString() }, ...items]);
    }
  };

  return (
    <div className="app">
      <VideoSearch onSearch={onSearch} />
      <VideoItem url={url} />
      <VideoList items={items} onSearch={onSearch} />
    </div>
  );
};

export default VideoComponent;
