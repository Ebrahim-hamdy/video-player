import React, { useState } from 'react';

import ReactPlayer from 'react-player';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './VideoItem.scss';

const VideoItem = ({url}) => {
  return (
    <Card className="card-item">
      <CardContent>
        {!url ? (
          <>
          <Typography variant="h4" gutterBottom>
            Welcome to Video Player!
          </Typography>
          <Typography color="textSecondary">
            Playing Videos by adding video URL!
          </Typography>
          </>
        ) : (
          <div className="player-wrapper" style={{ position: 'relative', paddingTop: '50%' }}>
            <ReactPlayer
              url={url}
              controls={true}
              style={{ margin: 'auto', position: 'absolute', top: '0', left: '0' }}
              playing
              width="100%"
              height="100%"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoItem;
