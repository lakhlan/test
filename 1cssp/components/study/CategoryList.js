import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryList = ({ categories, onSelectCategory }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => onSelectCategory(item)}
      >
        <Text style={styles.categoryItemText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  categoryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CategoryList;
