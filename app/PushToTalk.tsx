import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function PushToTalk() {
  const [isListening, setIsListening] = useState(false);

  const handlePressIn = () => {
    // Placeholder for starting the voice recognition
    setIsListening(true);
  };

  const handlePressOut = () => {
    // Placeholder for stopping the voice recognition and sending the input to OpenAI API
    setIsListening(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/microphone.png')} style={styles.image} />
      <Text style={styles.title}>Push to Talk to the AI</Text>
      <Text style={styles.description}>
        Press and hold the button below to talk to the AI. Release the button to send your message.
      </Text>
      <Button
        title={isListening ? "Listening..." : "Hold to Talk"}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        color="#4CAF50"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#4CAF50",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
});