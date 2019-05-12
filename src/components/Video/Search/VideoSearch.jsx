import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';

import './VideoSearch.scss';

const VideoSearch = props => {
  let [url, setUrl] = useState('');

  const search = evt => {
    evt.preventDefault();
    props.onSearch(url);
    setUrl('');
  };

  return (
    <Paper className="root" elevation={1}>
      <InputBase
        className="input"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter Video URL"
      />
      <Divider className="divider" />
      <IconButton className="iconButton" onClick={search} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default VideoSearch;
