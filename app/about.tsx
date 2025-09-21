import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function About() {
  const handlePress = () => {
    console.log("Got it button pressed!");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.paragraph}>
        Welcome to <Text style={styles.bold}>CardMart</Text>, your one-stop
        destination for all things cards. Whether you’re looking for gift cards,
        prepaid cards, or exclusive deals, we make it easy, fast, and secure to
        shop, send, and manage your cards in one place.
      </Text>

      <Text style={styles.subTitle}>Our Mission</Text>
      <Text style={styles.paragraph}>
        At CardMart, our mission is simple:{" "}
        <Text style={styles.bold}>
          to provide a smarter, safer, and more convenient way to access and
          enjoy cards that fit your lifestyle.
        </Text>{" "}
        We believe gifting, shopping, and managing finances should be
        hassle-free, which is why we’ve built a platform you can trust.
      </Text>

      <Text style={styles.subTitle}>Why Choose CardMart?</Text>
      <Text style={styles.list}>• Wide Selection: From top retail brands to digital services, find the perfect card for every occasion.</Text>
      <Text style={styles.list}>• Instant Delivery: Buy and receive cards instantly—no waiting, no stress.</Text>
      <Text style={styles.list}>• Secure Payments: We use industry-standard encryption and trusted partners to keep your transactions safe.</Text>
      <Text style={styles.list}>• User-Friendly: Browse, buy, and redeem cards with ease.</Text>

      <Text style={styles.footer}>
        CardMart — The smart way to shop, gift, and save.
      </Text>

      {/* Got It Button */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Got it</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#444",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  list: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginLeft: 10,
    marginBottom: 5,
  },
  footer: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "green",
  },
  button: {
    marginTop: 30,
    backgroundColor: "green",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
