import React, { useState } from 'react';
import { View, Button, TextInput, Alert } from 'react-native';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Validate the payment details
    if (!cardNumber || !expiryDate || !cvv) {
      Alert.alert('Payment Error', 'Please enter all payment details');
      return;
    }

    // Perform payment processing and integration with payment gateways
    // Replace this with your actual payment gateway integration code

    // Simulate a successful payment
    simulateSuccessfulPayment();
  };

  const simulateSuccessfulPayment = () => {
    // Simulate a successful payment process
    setTimeout(() => {
      Alert.alert('Payment Success', 'Your payment was successful!');
    }, 2000);
  };

  return (
    <View>
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
      />
      <Button title="Make Payment" onPress={handlePayment} />
    </View>
  );
};

export default Payment;
