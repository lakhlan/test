import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const LessonList = ({ lessons }) => {
  const renderLessonItem = ({ item }) => {
    return (
      <View style={styles.lessonItem}>
        <Text style={styles.lessonTitle}>{item.title}</Text>
        <Text style={styles.lessonDuration}>{item.duration}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lessons}
        renderItem={renderLessonItem}
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
  lessonItem: {
    marginBottom: 16,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  lessonDuration: {
    fontSize: 14,
    color: '#999',
  },
});

export default LessonList;
