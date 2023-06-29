import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorDisplay = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  errorMessage: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ErrorDisplay;
