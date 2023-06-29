import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailsPage = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default ProductDetailsPage;
