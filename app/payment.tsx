import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";
import { allGiftCards } from "../data/giftCards";

const Payment = () => {
  const params = useLocalSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [showWebView, setShowWebView] = useState(false);
  const [paymentHtml, setPaymentHtml] = useState("");

  const amounts = [10, 25, 50, 75, 100];
  const card = allGiftCards.find((c) => c.id === id);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[0-9]{9,15}$/.test(phone); // Supports Ghanaian numbers
  // Option 1: Allow spaces in name (default)
  const isValidName = (name: string) => name.trim().length > 0;
  // Option 2: Disallow spaces in name (uncomment to use)
  // const isValidName = (name: string) => /^[^\s]+$/.test(name.trim());
  const isFormValid = selectedAmount && isValidEmail(recipientEmail) && isValidName(recipientName) && isValidPhone(recipientPhone);

  useEffect(() => {
    console.log("Form State:", { selectedAmount, recipientEmail, recipientName, recipientPhone, isFormValid });
  }, [selectedAmount, recipientEmail, recipientName, recipientPhone]);

  const generateGiftCardCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase(); // Simple 8-character code
  };

  const handlePayment = () => {
    if (!isFormValid) {
      Alert.alert("Error", "Please fill all fields correctly.");
      return;
    }

    console.log("Initiating Paystack payment..."); // Debug

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Paystack Payment</title>
          <script src="https://js.paystack.co/v1/inline.js"></script>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8fafc; }
          </style>
        </head>
        <body onload="payWithPaystack()">
          <script>
            function payWithPaystack() {
              try {
                const handler = PaystackPop.setup({
                  key: '********************************',
                  email: '${recipientEmail.replace(/'/g, "\\'")}',
                  amount: ${selectedAmount * 100},
                  currency: 'GHS',
                  ref: 'giftcard_${Date.now()}',
                  callback: function(response) {
                    window.location.href = 'paystack://success?reference=' + response.reference;
                  },
                  onClose: function() {
                    window.location.href = 'paystack://cancel';
                  }
                });
                handler.openIframe();
              } catch (error) {
                window.location.href = 'paystack://error?message=' + encodeURIComponent(error.message);
              }
            }
          </script>
        </body>
      </html>
    `;
    setPaymentHtml(htmlContent);
    setShowWebView(true);
  };

  const handleWebViewNavigationStateChange = (navState: { url: string }) => {
    console.log("WebView URL:", navState.url); // Debug
    if (navState.url.includes("paystack://success")) {
      setShowWebView(false);
      const giftCardCode = generateGiftCardCode();
      Alert.alert(
        "Success",
        `The gift card code (${giftCardCode}) has been sent to the email you provided.`,
        [
          {
            text: "OK",
            onPress: () => {
              // Reset form after payment
              setSelectedAmount(null);
              setRecipientEmail("");
              setRecipientName("");
              setRecipientPhone("");
            },
          },
        ]
      );
      // TODO: For production, save order details to a database and send email with the gift card code
      // Example: Call a backend API or Firebase function to send email via SendGrid
      /*
      const sendEmail = async () => {
        await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            Authorization: `Bearer YOUR_SENDGRID_API_KEY`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: recipientEmail }] }],
            from: { email: "no-reply@giftcardapp.com" },
            subject: \`Your GH₵${selectedAmount} Gift Card\`,
            content: [{ type: "text/plain", value: \`Hi ${recipientName},\n\nYour gift card code is ${giftCardCode}. Enjoy!\` }],
          }),
        });
      };
      */
    } else if (navState.url.includes("paystack://cancel")) {
      setShowWebView(false);
      Alert.alert("Cancelled", "Payment was cancelled.");
    } else if (navState.url.includes("paystack://error")) {
      setShowWebView(false);
      const errorMessage = new URL(navState.url).searchParams.get("message") || "Unknown error";
      Alert.alert("Error", `Payment failed: ${errorMessage}`);
    }
  };

  if (!card) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Gift Card Not Found</Text>
      </View>
    );
  }

  if (showWebView) {
    return (
      <WebView
        source={{ html: paymentHtml }}
        style={styles.webview}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error("WebView Error:", nativeEvent);
          setShowWebView(false);
          Alert.alert("Error", "Failed to load Paystack payment page.");
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={card.image} style={styles.image} />
        <Text style={styles.title}>{card.name}</Text>
        <Text style={styles.description}>{card.description}</Text>

        <Text style={styles.amountLabel}>Select Gift Card Amount:</Text>
        {!selectedAmount && (
          <Text style={styles.errorText}>Please select an amount</Text>
        )}
        <View style={styles.amountSelectionContainer}>
          <View style={styles.amountHeader}>
            <Text style={styles.amountHeaderText}>Gift Card Values</Text>
          </View>
          <View style={styles.amountList}>
            {amounts.map((amount) => (
              <TouchableOpacity
                key={amount}
                style={[
                  styles.amountButton,
                  selectedAmount === amount && styles.amountButtonSelected,
                ]}
                onPress={() => {
                  setSelectedAmount(amount);
                  console.log("Selected Amount:", amount); // Debug
                }}
                activeOpacity={0.7}
              >
                <View style={styles.amountContent}>
                  <Text style={styles.amountValue}>GH₵{amount}</Text>
                  <Text style={styles.amountLabelText}>
                    {selectedAmount === amount ? "Selected" : "Choose"}
                  </Text>
                </View>
                {selectedAmount === amount && (
                  <View style={styles.selectedIndicator} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Recipient Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., John Doe"
            value={recipientName}
            onChangeText={(text) => setRecipientName(text.trim())}
          />
          {!isValidName(recipientName) && (
            <Text style={styles.errorText}>
              {recipientName.trim().length === 0
                ? "Recipient name is required"
                : "Name cannot contain spaces"}
            </Text>
          )}
          <Text style={styles.inputLabel}>Recipient Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter recipient's email"
            value={recipientEmail}
            onChangeText={setRecipientEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {recipientEmail && !isValidEmail(recipientEmail) && (
            <Text style={styles.errorText}>Please enter a valid email address</Text>
          )}
          <Text style={styles.inputLabel}>Recipient Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 0241234567"
            value={recipientPhone}
            onChangeText={setRecipientPhone}
            keyboardType="phone-pad"
          />
          {recipientPhone && !isValidPhone(recipientPhone) && (
            <Text style={styles.errorText}>Please enter a valid phone number (e.g., 0241234567)</Text>
          )}
        </View>

        <Text style={styles.price}>Price: GH₵{selectedAmount || card.price}</Text>

        <TouchableOpacity
          style={[styles.buyButton, !isFormValid && styles.buyButtonDisabled]}
          disabled={!isFormValid}
          onPress={handlePayment}
        >
          <Text style={styles.buyButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  webview: {
    flex: 1,
  },
  cardContainer: {
    alignItems: "center",
    padding: 24,
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    color: "#111827",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#4b5563",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 24,
  },
  amountLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
  },
  amountSelectionContainer: {
    width: "100%",
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  amountHeader: {
    alignItems: "center",
    marginBottom: 16,
  },
  amountHeaderText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
  },
  amountList: {
    gap: 8,
  },
  amountButton: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
  },
  amountButtonSelected: {
    borderColor: "green",
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  amountContent: {
    alignItems: "center",
    marginBottom: 4,
  },
  amountValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#374151",
  },
  amountLabelText: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },
  selectedIndicator: {
    position: "absolute",
    bottom: -4,
    left: "50%",
    transform: [{ translateX: -12 }],
    width: 24,
    height: 4,
    backgroundColor: "green",
    borderRadius: 2,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: "#111827",
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#22c55e",
    marginBottom: 24,
  },
  buyButton: {
    backgroundColor: "green",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: "100%",
    alignItems: "center",
  },
  buyButtonDisabled: {
    backgroundColor: "#d1d5db",
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  errorText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ef4444",
    textAlign: "center",
    marginBottom: 8,
  },
});

export default Payment;