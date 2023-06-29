import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ErrorDisplayProps = {
  errorMessage: string;
};

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorMessage}</Text>
    </View>
  );
};
      <Text style={styles.text}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff6b6b',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ErrorDisplay;



