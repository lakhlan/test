import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CourseDetailsPage = ({ course }) => {
  return (
    <View style={styles.container}>
      <Image source={course.image} style={styles.courseImage} />
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.author}>Author: {course.author}</Text>
      <Text style={styles.duration}>Duration: {course.duration}</Text>
      <Text style={styles.price}>Price: {course.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CourseDetailsPage;
