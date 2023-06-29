import React from 'react';
import { View, Text, StyleSheet, ProgressViewIOS, ProgressBarAndroid, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EvilIcons from'react-native-vector-icons/EvilIcons';
import FontAwesome from'react-native-vector-icons/FontAwesome';
import Feather from'react-native-vector-icons/Feather';
import FontAwesome5 from'react-native-vector-icons/FontAwesome5';

import { EvilIconTypes, FontAwesomeIconTypes, FeatherIconTypes, FontAwesome5IconTypes } from '../config/icons';
import theme from '../config/theme';
import Card from './Card';


import styles from './styles';
import { EmptyState } from './EmptyState';
import { FilterBar } from './FilterBar';
import { gray, notQuiteBlack } from '../config/colors';
import { MiniFilter } from './MiniFilter';

import { ProgressTracker } from './ProgressTracker';

import { Tooltip } from '../components/Tooltip';
import { Error } from '../components/Error';

import LessonsView from './LessonsView';

// progress bar
  
// due to styling being different on ios vs android, u need a bunch of different components to render this -- will be refactoring eventually


const CourseProgress = ({ course, progress }) => {
  const renderProgress = () => {
    if (Platform.OS === 'ios') {
      return <ProgressViewIOS style={styles.progress} progress={progress} />;
    } else if (Platform.OS === 'android') {
      return <ProgressBarAndroid style={styles.progress} styleAttr="Horizontal" progress={progress} />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.courseTitle}>{course.title}</Text>
      {renderProgress()}
      <Text style={styles.progressText}>{`${Math.round(progress * 100)}% completed`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progress: {
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#888',
  },
});

export default CourseProgress;
