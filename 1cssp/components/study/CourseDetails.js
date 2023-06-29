import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetails = ({ course }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.instructor}>{course.instructor}</Text>
      <Text style={styles.duration}>{`Duration: ${course.duration}`}</Text>
      <Text style={styles.price}>{`Price: $${course.price}`}</Text>
      <Text style={styles.rating}>{`Rating: ${course.rating}/5`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  instructor: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  duration: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#333',
  },
});

export default CourseDetails;
