import React from 'react';
import { View } from 'react-native';
import VideoPlayer from './VideoPlayer';

const App = () => {
  const videoUrl = 'https://www.example.com/video.mp4';

  return (
    <View>
      <VideoPlayer videoUrl={videoUrl} />
    </View>
  );
};

export default App;
