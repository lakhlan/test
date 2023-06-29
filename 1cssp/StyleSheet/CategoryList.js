import React, { useCallback } from 'react';
import { View } from 'react-native';
import CategoryList from './CategoryList';

const App = () => {
  const categories = ['Mathematics', 'Science', 'History', 'Language'];
  
  const handleSelectCategory = useCallback((category) => {
    console.log('Selected category:', category);
    // Perform additional actions when a category is selected
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
    </View>
  );
};

export default App;
