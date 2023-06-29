import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

    export default CategoryListPage;
<commit_msg>Fix nightmare errors<commit_after>import React from'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const CategoryListPage = ({ categories, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Categories</Text>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => onSelectCategory(item.id)}
          >
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CategoryListPage;
    </View>
  );
};

export default CategoryListPage;
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CategoryListPage;

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
  categoryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryName: {
    fontSize: 16,
  },
});

export default CategoryListPage;
