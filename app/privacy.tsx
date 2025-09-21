import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Privacy() {
  const handlePress = () => {
    console.log("Got it button pressed on Privacy!");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.paragraph}>
        At <Text style={styles.bold}>CardMart</Text>, your privacy is very
        important to us. This Privacy Policy explains how we collect, use, and
        protect your personal information when you use our services.
      </Text>

      <Text style={styles.subTitle}>1. Information We Collect</Text>
      <Text style={styles.list}>
        • Personal details such as name, email, phone number, and payment
        information.
      </Text>
      <Text style={styles.list}>
        • Account data including preferences and saved settings.
      </Text>
      <Text style={styles.list}>
        • Transaction history, order details, and payment records.
      </Text>
      <Text style={styles.list}>
        • Device and usage information like IP address, operating system, and
        activity within the app.
      </Text>

      <Text style={styles.subTitle}>2. How We Use Your Information</Text>
      <Text style={styles.list}>• To process and deliver your orders.</Text>
      <Text style={styles.list}>• To provide customer support.</Text>
      <Text style={styles.list}>• To improve app features and performance.</Text>
      <Text style={styles.list}>
        • To send updates, offers, and promotions (with your consent).
      </Text>

      <Text style={styles.subTitle}>3. Data Protection</Text>
      <Text style={styles.paragraph}>
        We use industry-standard measures such as encryption and secure servers
        to protect your data. However, no method of transmission is 100% secure.
      </Text>

      <Text style={styles.subTitle}>4. Your Rights</Text>
      <Text style={styles.paragraph}>
        You may access, update, or delete your personal data. You can also opt
        out of marketing communications anytime.
      </Text>

      <Text style={styles.footer}>
        CardMart — We respect your privacy and are committed to protecting it.
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
