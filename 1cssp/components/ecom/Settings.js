import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={notifications} onValueChange={toggleNotifications} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
  },
});

export default Settings;
