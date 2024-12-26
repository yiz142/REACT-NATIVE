import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "User", text: "Hello!" },
    { sender: "Bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    // Placeholder for sending message to OpenAI API
    setMessages([...messages, { sender: "User", text: input }, { sender: "Bot", text: "This is a placeholder response." }]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/chat.png')} style={styles.image} />
      <Text style={styles.title}>Chat</Text>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <Text key={index} style={styles.message}>
            {message.sender}: {message.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Send" onPress={handleSend} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#4CAF50",
  },
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});