import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const DiscussionForum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const message = {
      id: messages.length + 1,
      text: newMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  useEffect(() => {
    // Scroll to the bottom of the message list when a new message is added
    flatListRef.scrollToEnd();
  }, [messages]);

  const renderMessage = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timestampText}>{new Date(item.timestamp).toLocaleString()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={(ref) => (flatListRef = ref)}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messageList}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageList: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  messageContainer: {
    marginBottom: 16,
  },
  messageText: {
    fontSize: 16,
  },
  timestampText: {
    fontSize: 12,
    color: '#777',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DiscussionForum;
