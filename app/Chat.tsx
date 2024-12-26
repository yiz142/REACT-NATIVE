import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/chat.png')} style={styles.image} />
      <Text style={styles.title}>Chat</Text>
      <View style={styles.chatContainer}>
        <Text style={styles.message}>User: Hello!</Text>
        <Text style={styles.message}>Bot: Hi! How can I help you today?</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
      />
      <Button title="Send" onPress={() => {}} color="#4CAF50" />
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