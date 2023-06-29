import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import { OrderConfirmation.jsx } from '../store/actions';
import { OrderConfirmation } from '../Compoent /OrderConfirmation';
import {colors.js} from '../Shares/colors'
import{Authcontex} from '../store/actions';
import{Auth} from '../Compoent/Auth';
import {}

const OrderConfirmationPage = ({ orderNumber, totalPrice }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Order Confirmation</Text>
      <Text>Order Number: {orderNumber}</Text>
      <Text>Total Price: {totalPrice}</Text>
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
  confirmationText: {
    fontSize: 16,
  },
  orderNumberText: {
    fontSize: 14,
  },
  totalPriceText: {
    fontSize: 14,
  },
});

export default OrderConfirmationPage;<commit_msg>Style components 1.12<commit_after>import React from'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from'react-redux';

const styles = {
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
  confirmationText: {
    fontSize: 16,
  },
  orderNumberText: {
    fontSize: 14,
  },
  totalPriceText: {
    fontSize: 14,
  },
  
};
const OrderConfirmationPage = ({ orderNumber, totalPrice }) => {
  return (
    <View style={styles.container}>
      <Text>Order Confirmation</Text>

      <Text>Thank you for your purchase!</Text>

      <Text>Order Number: {orderNumber}</Text>

      <Text>Total Price: {totalPrice}</Text>
    </View>
  );
};

const mapStateToProps = state => {
    const { currentOrder } = state.shop;
    return {
      orderNumber: currentOrder.orderNumber,
      totalPrice: currentOrder.totalPrice,
    };
  };
  
  export default connect(mapStateToProps)(OrderConfirmationPage);<commit_msg>add native text component and some style<commit_after>import React from'react';
import { Text, View, StyleSheet } from'react-native';
import { connect } from'react-redux';
  
const OrderConfirmationPage = ({ orderNumber, totalPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Order Confirmation</Text>


      <Text style={styles.confirmationText}>
        Thank you for your purchase!
      </Text>

      <Text style={styles.orderNumberText}>
        Order Number: {orderNumber}
      </Text>

      <Text style={styles.totalPriceText}>Total Price: {totalPrice}</Text>
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
  confirmationText: {
    fontSize: 16,
    marginBottom: 8,
  },
  orderNumberText: {
    fontSize: 16,
    marginBottom: 8,
  },
  totalPriceText: {
    fontSize: 16,
  },
});

export default OrderConfirmationPage;
