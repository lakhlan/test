import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { EmptyState, DefaultState, WithBannedText, MoreDetails, DifferentTextSize, NoTextAlignment } from './EnrollmentButton';
import styles from './styles';
import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { FlatList } from 'react-native';


export const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empty</Text>
    </View>
  );
};

export const DefaultState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Default</Text>
    </View>
  );
};

export const WithBannedText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Disallowed charge</Text>
    </View>
  );
};
export const MoreDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More details</Text>
    </View>
  );
};
export const DifferentTextSize = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Different text size</Text>
    </View>
  );
};
export const NoTextAlignment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No text alignment</Text>
    </View>
  );
};
export const RespectsRTL = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Respects RTL</Text>
    </View>
  );
};
export const BannedText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Disallowed charge</Text>
    </View>
  );
};
export const DifferentLines = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Different lines</Text>
    </View>
  );
};
export const DifferentWeight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Different weight</Text>
    </View>
  );
};
export const DifferentColor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Different color</Text>
    </View>
  );
};
export const DifferentFontSize = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Different font size</Text>
    </View>
  );
};
export const AutoCapitalize = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AutoCapitalize</Text>
    </View>
  );
};

export const WrapedInView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WrapedInView</Text>
    </View>
  );
};


const EnrollmentButton = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const toggleEnrollment = () => {
    setIsEnrolled(!isEnrolled);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleEnrollment} style={styles.button}>
        <Text style={styles.buttonText}>{isEnrolled ? 'Enrolled' : 'Enroll'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#4285F4',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default EnrollmentButton;
