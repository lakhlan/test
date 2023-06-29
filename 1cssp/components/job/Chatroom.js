import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Simulated data for initial chat messages
  const initialMessages = [
    { id: '1', content: 'Hello!', sender: 'job_seeker' },
    { id: '2', content: 'Hi there!', sender: 'employer' },
  ];

  useEffect(() => {
    // Simulated effect for loading initial chat messages
    setMessages(initialMessages);
  }, []);

  const handleSend = () => {
    if (newMessage) {
      const message = {
        id: String(messages.length + 1),
        content: newMessage,
        sender: 'job_seeker', // Assuming the sender is the job seeker
      };

      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const renderMessageItem = ({ item }) => {
    const messageStyle =
      item.sender === 'job_seeker' ? styles.jobSeekerMessage : styles.employerMessage;

    return (
      <View style={styles.messageContainer}>
        <Text style={messageStyle}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        inverted
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type your message..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  messageContainer: {
    marginBottom: 8,
    maxWidth: '80%',
  },
  jobSeekerMessage: {
    backgroundColor: '#e6f2ff',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  employerMessage: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatRoom;
