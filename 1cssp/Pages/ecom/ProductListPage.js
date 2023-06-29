import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductListPage = ({ products }) => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productItem: {
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductListPage;
