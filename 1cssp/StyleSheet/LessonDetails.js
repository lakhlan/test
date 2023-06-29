import React from 'react';
import { View } from 'react-native';
import LessonDetails from './LessonDetails';

const App = () => {
  const selectedLesson = {
    title: 'Lesson 1: Introduction',
    description: 'An introduction to the course',
    duration: '30 minutes',
    difficulty: 'Beginner',
    completed: true,
  };

  return (
    <View>
      <LessonDetails lesson={selectedLesson} />
    </View>
  );
};

export default App;
