import React from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native';

const ProgressTracker = ({ currentLesson, totalLessons }) => {
  const calculateProgress = () => {
    return (currentLesson / totalLessons) * 100;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>{`Lesson ${currentLesson} of ${totalLessons}`}</Text>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={calculateProgress() / 100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ProgressTracker;
