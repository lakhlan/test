import React from 'react';
import { View, Text } from 'react-native';

const OrderConfirmation = ({ orderNumber, totalAmount, items }) => {
  return (
    <View>
      <Text style={styles.header}>Order Confirmation</Text>
      <Text style={styles.orderNumber}>Order Number: {orderNumber}</Text>
      <Text style={styles.totalAmount}>Total Amount: ${totalAmount}</Text>

      <Text style={styles.itemsHeader}>Items:</Text>
      {items.map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          <Text>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Price: ${item.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = {
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderNumber: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 16,
    marginBottom: 15,
  },
  itemsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 5,
  },
};

export default OrderConfirmation;
