import { Text, View, StyleSheet, Image, Button, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";

export default function Index() {
  const [shoppingList, setShoppingList] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleGetRecommendations = () => {
    // Placeholder for API call to get recommendations
    setRecommendations([
      "Recommendation 1",
      "Recommendation 2",
      "Recommendation 3",
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/grocery.png')} style={styles.image} />
      <Text style={styles.title}>Grocery Shopping List Recommendation System</Text>
      <Text style={styles.description}>
        Welcome to our Grocery Shopping List Recommendation System! This app helps you optimize your grocery shopping by providing recommendations based on your shopping list. Using geo-mapping and location services, we ensure you get the best prices and the most convenient locations for your shopping needs.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your shopping list..."
        value={shoppingList}
        onChangeText={setShoppingList}
      />
      <Button title="Get Recommendations" onPress={handleGetRecommendations} color="#4CAF50" />
      <Text style={styles.featuresTitle}>Recommendations:</Text>
      {recommendations.map((rec, index) => (
        <Text key={index} style={styles.recommendation}>{rec}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4CAF50",
  },
  recommendation: {
    fontSize: 16,
    textAlign: "left",
    color: "#555",
    marginBottom: 5,
  },
});