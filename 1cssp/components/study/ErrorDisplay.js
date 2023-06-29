import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorDisplay = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});

export default ErrorDisplay;
