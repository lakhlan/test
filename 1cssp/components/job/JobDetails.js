import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobDetails = ({ job }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.description}>{job.description}</Text>
      <Text style={styles.salary}>{`Salary: ${job.salary}`}</Text>
      <Text style={styles.date}>{`Posted on: ${job.date}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  company: {
    fontSize: 16,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  salary: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
  },
});

export default JobDetails;
