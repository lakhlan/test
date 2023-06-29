import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CheckoutPage = ({ totalPrice, onCheckout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Checkout</Text>

      <Text style={styles.totalPriceText}>Total Price: {totalPrice}</Text>

      <Button title="Proceed to Payment" onPress={onCheckout} />
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
  totalPriceText: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default CheckoutPage;
