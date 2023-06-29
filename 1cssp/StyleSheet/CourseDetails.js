import React from 'react';
import { View } from 'react-native';
import CourseDetails from './CourseDetails';

const App = () => {
  const selectedCourse = {
    title: 'Introduction to React',
    description: 'Learn the basics of React framework',
    instructor: 'John Doe',
    duration: '4 weeks',
    price: 99.99,
    rating: 4.5,
  };

  return (
    <View>
      <CourseDetails course={selectedCourse} />
    </View>
  );
};

export default App;
