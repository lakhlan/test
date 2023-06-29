import React from 'react';
import { View } from 'react-native';
import ErrorDisplay from './ErrorDisplay';

const App = () => {
  const error = 'Failed to load course data. Please try again later.';

  return (
    <View style={{ flex: 1 }}>
      <ErrorDisplay error={error} />
    </View>
  );
};

export default App;
