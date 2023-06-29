import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProductItem = ({ product, onPress }) => {
  const handlePress = () => {
    onPress(product);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
});

export default ProductItem;
