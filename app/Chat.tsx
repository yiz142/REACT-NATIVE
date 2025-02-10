import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "User", text: "Hello!" },
    { sender: "Bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message to chat
    setMessages([...messages, { sender: "User", text: input }]);

    try {
      // Call the backend API
      const res = await axios.post('https://llmaps.site/recommend-cheapest-store', {
        latitude: 37.7749,  // Example coordinates (San Francisco), replace with user input if needed
        longitude: -122.4194,
        items: input.split(',').map(item => item.trim())  // Split input into items by comma
      });

      // Extract recommendation from response
      const recommendation = res.data.llm_recommendation;

      // Add bot response to chat
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: "Bot", text: recommendation }
      ]);

    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: "Bot", text: "Sorry, I couldn't fetch a recommendation. Please try again." }
      ]);
    }

    // Clear input
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
        placeholder="Type your items (comma-separated)..."
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
