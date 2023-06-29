import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';
import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacityComponent } from 'react-native';
import EditSVG from '../../assets/edit.svg';
import {  } from "modules";
import HomeNavigation from '../../Navigations/Homenavigation';

const UserAvatarLarge = require('../assets/sayagata.svg');




const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

import React from 'react';

const ProfileUpdater = () => {
  const handleUpdateProfile = () => {
    // Perform profile update logic here (e.g., API call)
    // TODO: Implement profile update logic

    setEmail('');
    setBio('');
  };

  return (
    <div>
      {/* JSX code for the component */}
    </div>
  );
};

export default ProfileUpdater;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize={capitalize('words')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"<commit_msg>[DDW-510] Storybook styling: Use words for autofill<commit_after>import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';
import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacityComponent } from 'react-native';
import EditSVG from '../../assets/edit.svg';



const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleUpdateProfile = () => {
    // Perform profile update logic here (e.g., API call)

    // Reset the form fields
    setName('');
    setEmail('');
    setBio('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default UserProfile;
