import React from 'react';
import { View, Text, FlatList } from 'react-native';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: 'New Job Opportunity',
      description: 'A new job matching your criteria is available. Apply now!',
    },
    {
      id: 2,
      title: 'Course Update',
      description: 'A new course has been added to your enrolled courses.',
    },
    {
      id: 3,
      title: 'Order Confirmation',
      description: 'Your order has been confirmed and will be shipped soon.',
    },
  ];

  const renderNotificationItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View>
      <Text>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default NotificationsPage;
