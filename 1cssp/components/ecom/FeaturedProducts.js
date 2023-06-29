import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Renders an individual product item.
 * @param {object} product - The product item.
 */
const renderProductItem = ({ product }) => {
  return (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => {
        onSelectProduct(product.id);
      }}
    >
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
    </TouchableOpacity>
  );
};

const FeaturedProducts = async ({ products, onSelectProduct }) => {
  console.log("Entering FeaturedProducts function");
  console.log("products:", products);
  console.log("onSelectProduct:", onSelectProduct);

  const renderProducts = async () => {
    console.log("Entering renderProducts function");

    const renderedProducts = await Promise.all(
      products.map(async (product) => {
        console.log("Processing product:", product);
        return (
          <li key={product.id} className="product-item">
            <ProductItem product={product} onSelect={onSelectProduct} />
          </li>
        );
      })
    );

    return renderedProducts;
  };

  return (
    <div className="container">
      <ul className="product-list">{await renderProducts()}</ul>
    </div>
  );
};
      <ul className="product-list">{await renderProducts()}</ul>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  productItem: {
    marginRight: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  productName: {
    marginTop: 5,
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FeaturedProducts;
