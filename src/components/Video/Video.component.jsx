import React, { useState } from 'react';

import VideoSearch from './Search/VideoSearch';
import VideoItem from './Item/VideoItem';
import VideoList from './List/VideoList';

const VideoComponent = () => {
  let [url, setUrl] = useState('');
  let [items, setItems] = useState([
    { url: 'https://www.youtube.com/watch?v=yNL9_nvF4Ks', date: '08.05.2019' },
    { url: 'https://www.youtube.com/watch?v=lf8TsRFuks8', date: '10.05.2019' },
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
