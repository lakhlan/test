import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductSort = ({ sortOptions, selectedSortOption, onSelectSortOption }) => {
  const handleSortSelection = (sortOption) => {
    onSelectSortOption(sortOption);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort By:</Text>

      <View style={styles.sortOptionsContainer}>
        {sortOptions.map((sortOption) => (
          <TouchableOpacity
            key={sortOption.value}
            style={[
              styles.sortOptionItem,
              selectedSortOption === sortOption.value && styles.selectedSortOptionItem,
            ]}
            onPress={() => handleSortSelection(sortOption.value)}
          >
            <Text
              style={[
                styles.sortOptionText,
                selectedSortOption === sortOption.value && styles.selectedSortOptionText,
              ]}
            >
              {sortOption.label}
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
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  sortOptionsContainer: {
    flexDirection: 'row',
  },
  sortOptionItem: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedSortOptionItem: {
    backgroundColor: 'blue',
  },
  sortOptionText: {
    fontSize: 14,
  },
  selectedSortOptionText: {
    color: 'white',
  },
});

export default ProductSort;
