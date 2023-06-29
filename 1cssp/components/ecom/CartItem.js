import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CartItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent: 'space-between',
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

export default CartItem;
