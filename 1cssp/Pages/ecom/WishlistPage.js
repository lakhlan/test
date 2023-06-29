import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import{wishlistItems} from './wishlistItems';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import{Homenavigation} from './Homenavigation';

const WishlistPage = ({ wishlistItems }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Wishlist</Text>

      {wishlistItems.length > 0 ? (
        <FlatList
          data={wishlistItems}
          renderItem={({ item }) => (
            <Text style={styles.wishlistItem}>{item.name}</Text>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
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
  wishlistItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
  },
});

export default WishlistPage;
