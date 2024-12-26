// filepath: /C:/Users/lukel/OneDrive/Documents/School/UCSD/2024/DSC180B/REACT-NATIVE/app/Chat.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <View style={styles.chatContainer}>
        <Text style={styles.message}>User: Hello!</Text>
        <Text style={styles.message}>Bot: Hi! How can I help you today?</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
      />
      <Button title="Send" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});