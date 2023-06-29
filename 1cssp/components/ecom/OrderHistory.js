import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OrderHistory = ({ orders, onSelectOrder }) => {
  const renderOrderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderItem} onPress={() => onSelectOrder(item)}>
      <Text style={styles.orderTitle}>{item.orderNumber}</Text>
      <Text style={styles.orderDate}>{item.orderDate}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderNumber.toString()}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  orderItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  orderTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  orderDate: {
    fontSize: 14,
  },
});

export default OrderHistory;
