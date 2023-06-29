import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const JobSearchPage = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search validation or additional logic here
    if (searchText.trim() !== '') {
      onSearch(searchText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for jobs"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default JobSearchPage;
