import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleBookmark} style={styles.button}>
        <Text style={styles.buttonText}>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</Text>
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

export default BookmarkButton;
