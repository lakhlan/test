import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const JobSortPage = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortOption = (option) => {
    setSelectedOption(option);
    onSort(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort Jobs</Text>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'relevance' && styles.selectedOption,
        ]}
        onPress={() => handleSortOption('relevance')}
      >
        <Text>Sort by Relevance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'date' && styles.selectedOption,
        ]}
        onPress={() => handleSortOption('date')}
      >
        <Text>Sort by Date</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'salary' && styles.selectedOption,
        ]}
        onPress={() => handleSortOption('salary')}
      >
        <Text>Sort by Salary</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
  selectedOption: {
    backgroundColor: '#ccc',
  },
});

export default JobSortPage;
