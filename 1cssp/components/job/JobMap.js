import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const JobMap = ({ jobListings }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleMarkerPress = (job) => {
    setSelectedJob(job);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        {jobListings.map((job) => (
          <Marker
            key={job.id}
            coordinate={{ latitude: job.latitude, longitude: job.longitude }}
            onPress={() => handleMarkerPress(job)}
          />
        ))}
      </MapView>
      {selectedJob && (
        <View style={styles.jobDetails}>
          <Text style={styles.jobTitle}>{selectedJob.title}</Text>
          <Text style={styles.jobLocation}>{selectedJob.location}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  jobDetails: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    elevation: 4,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default JobMap;
