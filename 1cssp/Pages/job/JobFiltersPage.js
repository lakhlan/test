import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JobFiltersPage = ({ onApplyFilters }) => {
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  const handleApplyFilters = () => {
    const filters = {
      location: location.trim(),
      industry: industry.trim(),
      salaryRange: salaryRange.trim(),
    };
    onApplyFilters(filters);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Filters</Text>
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Industry"
        value={industry}
        onChangeText={setIndustry}
      />
      <TextInput
        style={styles.input}
        placeholder="Salary Range"
        value={salaryRange}
        onChangeText={setSalaryRange}
      />
      <Button title="Apply Filters" onPress={handleApplyFilters} />
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
  input: {
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default JobFiltersPage;
