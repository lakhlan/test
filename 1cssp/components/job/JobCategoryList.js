import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const JobCategoryList = ({ categories, onCategoryPress }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItemContainer}
      onPress={() => onCategoryPress(item.id)}
    >
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryItemContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobCategoryList;
