import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const FeaturedCourses = ({ courses, onSelectCourse }) => {
  const renderCourseItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.courseItem}
        onPress={() => onSelectCourse(item)}
      >
        <Image source={item.image} style={styles.courseItemImage} />
        <Text style={styles.courseItemTitle}>{item.title}</Text>
        <Text style={styles.courseItemInstructor}>{item.instructor}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  courseItem: {
    width: 200,
    marginRight: 16,
  },
  courseItemImage: {
    width: '100%',
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },
  courseItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseItemInstructor: {
    fontSize: 14,
    color: '#888',
  },
});

export default FeaturedCourses;
