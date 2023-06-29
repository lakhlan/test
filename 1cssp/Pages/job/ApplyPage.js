import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const ApplyPage = ({ job, userProfile, isLoggedIn }) => {
  const handleApply = () => {
    if (isLoggedIn && userProfile.isProfileComplete) {
      // Perform the apply logic here
      // You can use the job data and the user profile

      // Display a success message or show an alert
      Alert.alert('Success', 'Your application has been submitted successfully.');
    } else if (!isLoggedIn) {
      // Show a login prompt
      Alert.alert('Login Required', 'Please log in to apply for this job.');
    } else if (!userProfile.isProfileComplete) {
      // Show a profile completion prompt
      Alert.alert('Profile Incomplete', 'Please complete your profile to apply for this job.');
    }
  };

  return (
    <View>
      <Text>Apply for Job</Text>
      <Text>Job Title: {job.title}</Text>

      <Button title="Apply" onPress={handleApply} />
    </View>
  );
};

export default ApplyPage;
