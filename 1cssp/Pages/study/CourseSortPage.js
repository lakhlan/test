import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CourseSortPage = ({ onSort }) => {
  const [selectedSort, setSelectedSort] = useState('');

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  const handleApplySort = () => {
    // Call the onSort callback with the selected sort option
    onSort(selectedSort);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort by</Text>
      <View style={styles.sortOption}>
        <Text>Relevance</Text>
        <Button
          title={selectedSort === 'relevance' ? 'Selected' : 'Select'}
          onPress={() => handleSortChange('relevance')}
        />
      </View>
      <View style={styles.sortOption}>
        <Text>Popularity</Text>
        <Button
          title={selectedSort === 'popularity' ? 'Selected' : 'Select'}
          onPress={() => handleSortChange('popularity')}
        />
      </View>
      <View style={styles.sortOption}>
        <Text>Price</Text>
        <Button
          title={selectedSort === 'price' ? 'Selected' : 'Select'}
          onPress={() => handleSortChange('price')}
        />
      </View>
      <Button title="Apply Sort" onPress={handleApplySort} />
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
  sortOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default CourseSortPage;
