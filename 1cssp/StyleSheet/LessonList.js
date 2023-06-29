import React from 'react';
import { View } from 'react-native';
import LessonList from './LessonList';

const App = () => {
  const lessons = [
    {
      id: 1,
      title: 'Lesson 1: Introduction',
      duration: '30 minutes',
    },
    {
      id: 2,
      title: 'Lesson 2: Getting Started',
      duration: '45 minutes',
    },
    // Add more lesson objects here
  ];

  return (
    <View>
      <LessonList lessons={lessons} />
    </View>
  );
};

export default App;
