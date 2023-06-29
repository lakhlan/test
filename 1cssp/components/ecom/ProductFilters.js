import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductFilters = ({ filters, selectedFilters, onSelectFilter }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleFilterSelection = (filter) => {
    onSelectFilter(filter);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerContainer} onPress={toggleExpanded}>
        <Text style={styles.headerText}>Product Filters</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.filtersContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterItem,
                selectedFilters.includes(filter.id) && styles.selectedFilterItem,
              ]}
              onPress={() => handleFilterSelection(filter.id)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilters.includes(filter.id) && styles.selectedFilterText,
                ]}
              >
                {filter.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  filtersContainer: {
    marginTop: 10,
  },
  filterItem: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 5,
  },
  selectedFilterItem: {
    backgroundColor: 'blue',
  },
  filterText: {
    fontSize: 14,
  },
  selectedFilterText: {
    color: 'white',
  },
});

export default ProductFilters;
