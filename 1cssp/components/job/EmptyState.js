import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

type EmptyStateProps = {
  message: string;
};

const EmptyState: FC<EmptyStateProps> = ({ message }) => {
  return (
    <View style={container}>
      <Text style={text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EmptyState;
