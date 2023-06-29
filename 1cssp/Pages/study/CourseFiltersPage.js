import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, CheckBox } from 'react-native';

const CourseFiltersPage = ({ categories, levels, durations, onApplyFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);

  const handleCategoryToggle = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  const handleLevelToggle = (level) => {
    const updatedLevels = selectedLevels.includes(level)
      ? selectedLevels.filter((lvl) => lvl !== level)
      : [...selectedLevels, level];
    setSelectedLevels(updatedLevels);
  };

  const handleDurationToggle = (duration) => {
    const updatedDurations = selectedDurations.includes(duration)
      ? selectedDurations.filter((dur) => dur !== duration)
      : [...selectedDurations, duration];
    setSelectedDurations(updatedDurations);
  };

  const handleApplyFilters = () => {
    // Call the onApplyFilters callback with the selected filters
    onApplyFilters(selectedCategories, selectedLevels, selectedDurations);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {categories.map((category) => (
        <CheckBox
          key={category}
          title={category}
          checked={selectedCategories.includes(category)}
          onPress={() => handleCategoryToggle(category)}
        />
      ))}
      <Text style={styles.title}>Levels</Text>
      {levels.map((level) => (
        <CheckBox
          key={level}
          title={level}
          checked={selectedLevels.includes(level)}
          onPress={() => handleLevelToggle(level)}
        />
      ))}
      <Text style={styles.title}>Durations</Text>
      {durations.map((duration) => (
        <CheckBox
          key={duration}
          title={duration}
          checked={selectedDurations.includes(duration)}
          onPress={() => handleDurationToggle(duration)}
        />
      ))}
      <Button title="Apply Filters" onPress={handleApplyFilters} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default CourseFiltersPage;
