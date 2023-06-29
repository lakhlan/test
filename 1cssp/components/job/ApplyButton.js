import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ApplyButton = ({ onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Text style={styles.text}>Apply</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'center',
    marginBottom: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ApplyButton;
