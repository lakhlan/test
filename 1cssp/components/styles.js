import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export interface Props {
  file: any;
  assignment: any;
  onWrite: (assignment: any) => void;
  updateNextMainAssignment: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
