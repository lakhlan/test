import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetails = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.details}>Details:</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailItem}>Brand: {product.brand}</Text>
        <Text style={styles.detailItem}>Category: {product.category}</Text>
        <Text style={styles.detailItem}>Color: {product.color}</Text>
        <Text style={styles.detailItem}>Weight: {product.weight} kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#999999',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  details: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ProductDetails;
