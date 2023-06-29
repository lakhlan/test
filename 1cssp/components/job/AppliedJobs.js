import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

/**
 * Renders a list of applied jobs.
 *
 * @param {Object} appliedJobs - An array of applied job objects.
 * @returns {ReactNode} The rendered list of applied jobs.
 */
function AppliedJobs({ appliedJobs }) {
  const renderJobItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
      <Text style={styles.jobStatus}>Applied</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {appliedJobs.length > 0 ? (
        <FlatList
          data={appliedJobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContentContainer}
        />
      ) : (
        <Text style={styles.emptyText}>No applied jobs.</Text>
      )}
    </View>
  );
}
  


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
  jobStatus: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default AppliedJobs;
