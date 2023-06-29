import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SavedJobs = ({ savedJobs }) => {
  const renderJobItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {savedJobs.length > 0 ? (
        <FlatList
          data={savedJobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContentContainer}
        />
      ) : (
        <Text style={styles.emptyText}>No saved jobs.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContentContainer: {
    flexGrow: 1,
  },
  jobItem: {
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 14,
    color: '#888',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default SavedJobs;
