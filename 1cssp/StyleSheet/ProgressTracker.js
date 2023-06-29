import React from 'react';
import { View } from 'react-native';
import ProgressTracker from './ProgressTracker';

const App = () => {
  const currentLesson = 5;
  const totalLessons = 10;

  return (
    <View>
      <ProgressTracker currentLesson={currentLesson} totalLessons={totalLessons} />
    </View>
  );
};

export default App;
