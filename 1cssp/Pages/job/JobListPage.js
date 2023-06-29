import React from 'react';
import { View, Text, FlatList } from 'react-native';

const JobListPage = () => {
  const jobListings = [
    { id: 1, title: 'Government Job 1', category: 'Government' },
    { id: 2, title: 'Government Job 2', category: 'Government' },
    { id: 3, title: 'Private Job 1', category: 'Private' },
    { id: 4, title: 'Private Job 2', category: 'Private' },
    { id: 5, title: 'Internship 1', category: 'Internship' },
    { id: 6, title: 'Internship 2', category: 'Internship' },
    { id: 7, title: 'Contract-based Job 1', category: 'Contract' },
    { id: 8, title: 'Contract-based Job 2', category: 'Contract' },
  ];

  const renderJobItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text>Job Listings</Text>

      <Text>Government Jobs:</Text>
      <FlatList
        data={jobListings.filter((item) => item.category === 'Government')}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Private Jobs:</Text>
      <FlatList
        data={jobListings.filter((item) => item.category === 'Private')}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Internships:</Text>
      <FlatList
        data={jobListings.filter((item) => item.category === 'Internship')}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Contract-based Jobs:</Text>
      <FlatList
        data={jobListings.filter((item) => item.category === 'Contract')}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default JobListPage;
