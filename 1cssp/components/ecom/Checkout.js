import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = () => {
    // Perform checkout process with shippingAddress and paymentMethod
    // You can implement the desired logic here, such as calling an API or navigating to a success screen
    console.log('Performing checkout with shippingAddress:', shippingAddress);
    console.log('and paymentMethod:', paymentMethod);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>
      <Text style={styles.label}>Shipping Address:</Text>
      <TextInput
        style={styles.input}
        value={shippingAddress}
        onChangeText={setShippingAddress}
        placeholder="Enter your shipping address"
      />
      <Text style={styles.label}>Payment Method:</Text>
      <TextInput
        style={styles.input}
        value={paymentMethod}
        onChangeText={setPaymentMethod}
        placeholder="Enter your payment method"
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 12,
    borderRadius: 4,
  },
  checkoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Checkout;
