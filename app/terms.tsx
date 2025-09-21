import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Terms() {
  const handlePress = () => {
    console.log("Got it button pressed on Terms & Conditions!");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <Text style={styles.paragraph}>
        Welcome to <Text style={styles.bold}>CardMart</Text>. By using our app,
        website, and related services (the “Services”), you agree to comply with
        and be bound by these Terms & Conditions. Please read them carefully.
      </Text>

      <Text style={styles.subTitle}>1. Use of Services</Text>
      <Text style={styles.list}>• You must be at least 18 years old to use CardMart.</Text>
      <Text style={styles.list}>• You agree to use the Services only for lawful purposes.</Text>
      <Text style={styles.list}>• You are responsible for maintaining the confidentiality of your account.</Text>

      <Text style={styles.subTitle}>2. Purchases & Payments</Text>
      <Text style={styles.list}>• All sales of digital cards are final and non-refundable, unless required by law.</Text>
      <Text style={styles.list}>• Prices may change at any time without prior notice.</Text>
      <Text style={styles.list}>• CardMart uses secure payment methods, but is not responsible for third-party processing errors.</Text>

      <Text style={styles.subTitle}>3. Limitations of Liability</Text>
      <Text style={styles.paragraph}>
        CardMart is not liable for any indirect, incidental, or consequential
        damages resulting from the use of our Services. We do not guarantee
        uninterrupted or error-free operation of the platform.
      </Text>

      <Text style={styles.subTitle}>4. Termination</Text>
      <Text style={styles.paragraph}>
        We may suspend or terminate your account at any time if you violate
        these Terms, misuse the Services, or engage in fraudulent activity.
      </Text>

      <Text style={styles.subTitle}>5. Changes to Terms</Text>
      <Text style={styles.paragraph}>
        CardMart may update these Terms & Conditions from time to time. Changes
        will take effect immediately upon posting in the app or website.
      </Text>

      <Text style={styles.footer}>
        By continuing to use CardMart, you agree to these Terms & Conditions.
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
