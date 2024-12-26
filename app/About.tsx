import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        This app is a Grocery Shopping List Recommendation System designed to help you optimize your grocery shopping by providing recommendations based on your shopping list. Using geo-mapping and location services, we ensure you get the best prices and the most convenient locations for your shopping needs.
      </Text>
      <Text style={styles.teamTitle}>Team Members:</Text>
      <Text style={styles.teamMember}>- Luke</Text>
      <Text style={styles.teamMember}>- Matteo</Text>
      <Text style={styles.teamMember}>- Yi</Text>
      <Text style={styles.teamMember}>- Jessica</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  teamMember: {
    fontSize: 16,
    textAlign: "left",
  },
});