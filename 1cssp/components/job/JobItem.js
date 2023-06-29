import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import React from "react";
import { TouchableOpacity, Text } from "react-native";

const JobItem = ({ job, onPress }) => {
  const handlePress = () => onPress(job);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  company: {
    fontSize: 14,
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
  },
});

export default JobItem;
