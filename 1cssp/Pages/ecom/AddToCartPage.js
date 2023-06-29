import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageComponent } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home/View/Home.js';
import Cart from './components/Cart/View/Cart';
import ProductDetails from './components/ProductDetails/View/ProductDetails';
import { primary2Color } from './components/common/theme';

const deliveryIcon = require('./images/ic_local_shipping_black_24dp.png');
const openFromIcon = require('./images/ic_open_in_new_black_24dp.png');
const sizesIcon = require('./images/ic_format_size_black_24dp.png');
const addtocartIcon = require('./images/ic_add_to_cart_black_24dp.png');
const completeIcon = require('./images/ic_check_circle_black_24dp.png');

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary2Color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 24,
    color: 'white',
  },
  productPrice: {
    fontSize: 36,
    color: 'white',
  },
  fromLocation: {
    fontSize: 16,
  },
  toLocation: {
    fontSize: 16,
  },
  servicesHeader: {
    fontSize: 10,
    marginTop: 10,
    color: 'white',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  quantityLabel: {
    fontSize: 20,
    marginRight: 10,
  },
  quantityButton: {
    height: 40,
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(Tab);
const AddToCartPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = useCallback(() => {
    // Logic to add the product to the shopping cart
    // You can implement your own logic here

    // For example, you can dispatch an action to update the cart state
    // cartActions.addToCart(product, quantity);
  }, [product, quantity]);

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>

      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity:</Text>
        <View style={styles.quantityButton}>
          <Button title="-" onPress={handleDecreaseQuantity} />
        </View>
        <Text style={styles.quantityValue}>{quantity}</Text>
        <View style={styles.quantityButton}>
          <Button title="+" onPress={handleIncreaseQuantity} />
        </View>
      </View>

      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  quantityButton: {
    marginHorizontal: 8,
  },
  quantityValue: {
    fontSize: 16,
  },
});

export default AddToCartPage;
