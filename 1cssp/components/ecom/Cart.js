import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shopping Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  itemName: {
    fontSize: 16,
  },
  removeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ff0000',
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Cart;
