import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PaymentMethod = ({ paymentMethods, selectedMethod, onSelectMethod }) => {
  const renderMethodItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.methodItem,
        item.id === selectedMethod.id && styles.selectedMethodItem,
      ]}
      onPress={() => onSelectMethod(item)}
    >
      <Text style={styles.methodTitle}>{item.title}</Text>
      <Text style={styles.methodDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMethodItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  methodItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedMethodItem: {
    backgroundColor: 'blue',
  },
  methodTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  methodDescription: {
    fontSize: 14,
  },
});

export default PaymentMethod;
