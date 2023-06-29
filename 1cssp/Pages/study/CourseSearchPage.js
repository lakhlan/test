import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const CourseSearchPage = ({ courses, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Call the onSearch callback with the search text
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for courses"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
      {courses.length === 0 ? (
        <Text style={styles.emptyText}>No courses found.</Text>
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
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
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

export default CourseSearchPage;
