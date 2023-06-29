import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';
import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacityComponent } from 'react-native';
import {  } from "modules";

interface Props{
  header1?: string;
  header2?: string;
  paragrh1?: string;
  userRegistredHandler: () => void;
}



import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const UserRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here (e.g., API call)

    // Reset the form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={styles.container}>
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
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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

export default UserRegistration;
