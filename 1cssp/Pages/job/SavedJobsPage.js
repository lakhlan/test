import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SavedJobsPage = ({ savedJobs }) => {
  const renderJobItem = ({ item }) => (
    <View style={styles.jobContainer}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
      {/* Add more job details or UI components as needed */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Saved Jobs</Text>
      {savedJobs.length === 0 ? (
        <Text style={styles.noJobsText}>No saved jobs</Text>
      ) : (
        <FlatList
          data={savedJobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  jobContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  jobCompany: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  jobLocation: {
    fontSize: 16,
    color: '#888',
  },
  noJobsText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  listContainer: {
    flexGrow: 1,
  },
});

export default SavedJobsPage;
