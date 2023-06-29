import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = () => {
    // Make a secure API call to fetch the product data
    // Replace this with your actual API endpoint
    fetch('https://example.com/api/products', {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        Alert.alert('Error', 'Failed to fetch product data.');
        console.error(error);
      });
  };

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <View style={styles.productItem}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>Price: ${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleProductPress = (product) => {
    // Perform actions when a product is pressed
    Alert.alert('Product Selected', `You selected ${product.name}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product List</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  productName: {
    fontSize: 18,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#999999',
  },
};

export default ProductList;
