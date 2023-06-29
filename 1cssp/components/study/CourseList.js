import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const CourseList = ({ courses }) => {
  const renderCourseItem = ({ item }) => {
    return (
      <View style={styles.courseItem}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  courseItem: {
    marginBottom: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    color: '#999',
  },
});

export default CourseList;
