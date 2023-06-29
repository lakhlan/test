import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const UserAuthentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform validation on the email and password
    if (!email || !password) {
      Alert.alert('Authentication Error', 'Please enter email and password');
      return;
    }

    // Authenticate user with your authentication system
    // Replace this with your actual authentication logic

    // Simulate a successful login
    simulateSuccessfulLogin();
  };

  const simulateSuccessfulLogin = () => {
    // Simulate a successful login process
    setTimeout(() => {
      Alert.alert('Login Success', 'You have successfully logged in!');
    }, 2000);
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default UserAuthentication;
