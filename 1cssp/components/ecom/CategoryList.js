import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryList = ({ categories, onSelectCategory }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => onSelectCategory(item.id)}
    >
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryItem: {
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  categoryName: {
    fontSize: 16,
  },
});

export default CategoryList;
