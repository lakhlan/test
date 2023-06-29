import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FeaturedProductsPage = ({ products, onSelectProduct }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Featured Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productItem}
            onPress={() => onSelectProduct(item.id)}
          >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
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
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItem: {
    width: 150,
    marginRight: 16,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
});

export default FeaturedProductsPage;
