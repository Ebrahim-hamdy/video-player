import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MissedVideoCallIcon from '@material-ui/icons/MissedVideoCall';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const VideoList = ({ items, onSearch }) => {
  let [url, setUrl] = useState('');

  return (
    <div>
      {items.length > 0 && (
        <Card style={{ marginTop: 25 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Recently Played
            </Typography>
            <List>
              {items.map((item, index) => {
                return (
                  <div key={index}>
                    <ListItem style={{ cursor: 'pointer' }}>
                      <Avatar>
                        <MissedVideoCallIcon />
                      </Avatar>
                      <ListItemText
                        onClick={() => onSearch(item.url)}
                        primary={item.url}
                        secondary={item.date}
                      />
                    </ListItem>
                    {index !== items.length - 1 ? <Divider variant="inset" component="li" /> : ''}
                  </div>
                );
              })}
            </List>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VideoList;
