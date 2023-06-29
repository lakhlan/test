import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { styles } from './styles';
import { styles } from '../Shared/Services';
import{Homenavigation} from './Homenavigation';
import{GlobalApi} from '../Shared/GlobalApi';
import{AuthContext} from '../Context/AuthContext';
// This is the main part of web (pages/Cart/index.js)
export default class Cartpage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Shopping Cart</Text>
      </View>
    );
  }
}

export class Cartpage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cartItems: []
    };
  }

  componentDidMount(){
    const user = this.context;
    console.log(user);
    this.updateCartItems();
  }

  updateCartItems(){
    const user = this.context;
    console.log(user);
    this.setState({cartItems: user.cartItems});  
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Shopping Cart</Text>
      </View>
    );
  }
}

export class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cartItems: []
    };
  }

  componentDidMount(){
    const user = this.context;
    console.log(user);
    this.updateCartItems();
  }

  updateCartItems(){
    const user = this.context;
    this.setState({cartItems: user.cartItems});
  }
  
  static contextType = AuthContext; 
  renderItem({item}){
    let cartPrice = Number(item.price) * item.amount;
    cartPrice = cartPrice.toFixed(2);
    console.log("added");
    return(
      <TouchableOpacity style={styles.cartItem}>  
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemPrice}>{cartPrice}</Text>
        <Text>{item.amount}</Text>
      </TouchableOpacity>
      );

    }
  }

  
const CartPage = ({ cartItems }) => {
  const renderItem = ({ item }) => (
    <Text style={styles.cartItem}>{item.title}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Shopping Cart</Text>

      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {<commit_msg>update shopping cart ui<commit_after>import React from 'react';
import { View, Text, FlatList, StyleSheet } from'react-native';
import { TouchableOpacity } from 'react-native';

const renderEmptyCart = () => (
        <View style={styles.container}>
<Text style={styles.emptyCartText}>Your cart is empty.</Text>
        </View>
      );

      const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      );

const renderCartList = ({ cartItems }) => (
        <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
      );

const renderCart = ({ cartItems }) => (
    cartItems.length > 0 ? (
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
    ) : (
      <View style={styles.container}>
        {renderEmptyCart()}
      </View>
    )
  );

)
      
      

const CartPage = ({ cartItems }) => {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Shopping Cart</Text>

      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
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
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 16,
  },
});

export default CartPage;
