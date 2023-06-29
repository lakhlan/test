import React from 'react';
import { View } from 'react-native';
import CourseProgress from './CourseProgress';

const App = () => {
  const courses = [
    { id: '1', title: 'Course 1', progress: 0.5 },
    { id: '2', title: 'Course 2', progress: 0.8 },
    { id: '3', title: 'Course 3', progress: 0.2 },
  ];

  return (
    <View style={{ flex: 1 }}>
      {courses.map((course) => (
        <CourseProgress key={course.id} course={course} progress={course.progress} />
      ))}
    </View>
  );
};

export default App;
