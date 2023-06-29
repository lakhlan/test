import React from 'react';
import { View } from 'react-native';
import CourseList from './CourseList';

const App = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React framework',
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      description: 'Master JavaScript programming concepts',
    },
    // Add more course objects here
  ];

  return (
    <View>
      <CourseList courses={courses} />
    </View>
  );
};

export default App;
