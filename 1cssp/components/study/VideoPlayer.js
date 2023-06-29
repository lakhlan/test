import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { styles } from './styles';
import{Homenavigation} from './Homenavigation';


const VideoPlayer = ({ videoUrl }) => {
  // Handle video playback logic here

  return (
    <View style={styles.container}>
      <Text style={styles.videoText}>Video Player</Text>
      {/* Add video playback component here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  videoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
});

export default VideoPlayer;
