import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SortDropdown = ({ selectedSortOption, sortOptions, onSortChange }) => {
  const handleSortChange = (option) => {
    onSortChange(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort By:</Text>
      <View style={styles.dropdown}>
        {sortOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              selectedSortOption === option ? styles.optionSelected : null,
            ]}
            onPress={() => handleSortChange(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedSortOption === option ? styles.optionTextSelected : null,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionSelected: {
    backgroundColor: 'blue',
  },
  optionText: {
    fontSize: 14,
  },
  optionTextSelected: {
    color: 'white',
  },
});

export default SortDropdown;
