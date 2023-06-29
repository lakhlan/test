import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonDetails = ({ lesson }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
      <Text style={styles.duration}>{`Duration: ${lesson.duration}`}</Text>
      <Text style={styles.difficulty}>{`Difficulty: ${lesson.difficulty}`}</Text>
      <Text style={styles.completed}>{`Completed: ${lesson.completed ? 'Yes' : 'No'}`}</Text>
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
  duration: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  difficulty: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  completed: {
    fontSize: 16,
    color: '#333',
  },
});

export default LessonDetails;
