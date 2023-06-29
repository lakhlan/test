import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ShippingAddress = ({ addresses, selectedAddress, onSelectAddress }) => {
  const renderAddressItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.addressItem,
        item.id === selectedAddress.id && styles.selectedAddressItem,
      ]}
      onPress={() => onSelectAddress(item)}
    >
      <Text style={styles.addressTitle}>{item.title}</Text>
      <Text style={styles.addressText}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAddressItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  addressItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedAddressItem: {
    backgroundColor: 'blue',
  },
  addressTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  addressText: {
    fontSize: 14,
  },
});

export default ShippingAddress;
