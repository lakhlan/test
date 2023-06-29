import React from 'react';
import { View } from 'react-native';
import NotificationBadge from './NotificationBadge';

const App = () => {
  const notificationCount = 5;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NotificationBadge count={notificationCount} />
    </View>
  );
};

export default App;
