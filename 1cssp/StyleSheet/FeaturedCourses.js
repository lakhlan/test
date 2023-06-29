import React, { useCallback } from 'react';
import { View } from 'react-native';
import FeaturedCourses from './FeaturedCourses';

const App = () => {
  const courses = [
    { id: '1', title: 'Course 1', instructor: 'Instructor 1', image: require('./images/course1.jpg') },
    { id: '2', title: 'Course 2', instructor: 'Instructor 2', image: require('./images/course2.jpg') },
    { id: '3', title: 'Course 3', instructor: 'Instructor 3', image: require('./images/course3.jpg') },
  ];

  const handleSelectCourse = useCallback((course) => {
    console.log('Selected course:', course);
    // Perform additional actions when a course is selected
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FeaturedCourses courses={courses} onSelectCourse={handleSelectCourse} />
    </View>
  );
};

export default App;
