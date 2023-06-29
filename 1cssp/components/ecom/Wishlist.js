import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromWishlist(item.id)}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Wishlist</Text>

      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProductItem}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addToWishlist({ id: 1, name: 'Sample Product' })}
      >
        <Text style={styles.addButtonText}>Add to Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Wishlist;
