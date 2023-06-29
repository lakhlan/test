import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MyCoursesPage = ({ courses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Courses</Text>
      {courses.length === 0 ? (
        <Text style={styles.emptyText}>You haven't enrolled in any courses yet.</Text>
      ) : (
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <View style={styles.courseItem}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseDescription}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
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
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  courseItem: {
    marginBottom: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default MyCoursesPage;
