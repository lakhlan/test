import React from 'react';
import { View, Text } from 'react-native';

const JobDetailsPage = ({ route }) => {
  const { job } = route.params;

  return (
    <View>
      <Text>Job Details</Text>
      <Text>Title: {job.title}</Text>
      <Text>Salary: {job.salary}</Text>
      <Text>Selection Process: {job.selectionProcess}</Text>
      <Text>Qualifications: {job.qualifications}</Text>
      <Text>Location: {job.location}</Text>
      <Text>Requirements: {job.requirements}</Text>
      <Text>Category: {job.category}</Text>
      <Text>About: {job.about}</Text>
    </View>
  );
};

export default JobDetailsPage;
