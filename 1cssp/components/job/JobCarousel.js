import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const JobCarousel = ({ jobs, onJobPress }) => {
  const renderJobItem = ({ item }) => (
    <TouchableOpacity
      style={styles.jobItemContainer}
      onPress={() => onJobPress(item.id)}
    >
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  jobItemContainer: {
    width: 200,
    marginRight: 12,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default JobCarousel;
