import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/favicon.png')} style={styles.image} />
      <Text style={styles.title}>Grocery Shopping List Recommendation System</Text>
      <Text style={styles.description}>
        Welcome to our Grocery Shopping List Recommendation System! This app helps you optimize your grocery shopping by providing recommendations based on your shopping list. Using geo-mapping and location services, we ensure you get the best prices and the most convenient locations for your shopping needs.
      </Text>
      <Text style={styles.featuresTitle}>Features:</Text>
      <Text style={styles.features}>
        - Input your shopping list
        {"\n"}- Get recommendations for the best prices
        {"\n"}- Optimize your shopping route based on locality
        {"\n"}- Save time and money on your grocery shopping
      </Text>
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
  featuresTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4CAF50",
  },
  features: {
    fontSize: 16,
    textAlign: "left",
    color: "#555",
  },
});