import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EnrollPage = ({ course }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    // Add your logic for enrolling the user in the course here
    setIsEnrolled(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      {isEnrolled ? (
        <Text style={styles.enrolledText}>You are enrolled in this course!</Text>
      ) : (
        <Button title="Enroll Now" onPress={handleEnroll} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  enrolledText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default EnrollPage;
