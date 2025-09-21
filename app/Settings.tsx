import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Settings() {
  const [isNotifications, setIsNotifications] = useState(true);

  // Language dropdown states
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [languages, setLanguages] = useState([
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "Spanish", value: "es" },
    { label: "German", value: "de" },
  ]);

  // Country dropdown states
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState("US");
  const [countries, setCountries] = useState([
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
    { label: "United Kingdom", value: "UK" },
    { label: "Ghana", value: "GH" },
  ]);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        {/* Language Picker */}
        <Text style={styles.label}>Language</Text>
        <DropDownPicker
          open={languageOpen}
          value={language}
          items={languages}
          setOpen={setLanguageOpen}
          setValue={setLanguage}
          setItems={setLanguages}
          onOpen={() => setCountryOpen(false)} // close country dropdown if open
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listMode="SCROLLVIEW" // ✅ fix warning
          zIndex={2000}
          zIndexInverse={1000}
        />

        {/* Country Picker */}
        <Text style={styles.label}>Country</Text>
        <DropDownPicker
          open={countryOpen}
          value={country}
          items={countries}
          setOpen={setCountryOpen}
          setValue={setCountry}
          setItems={setCountries}
          onOpen={() => setLanguageOpen(false)} // close language dropdown if open
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listMode="SCROLLVIEW" // ✅ fix warning
          zIndex={1000}
          zIndexInverse={2000}
        />

        {/* Notifications */}
        <View style={styles.switchRow}>
          <Text style={styles.itemText}>Notifications</Text>
          <Switch
            value={isNotifications}
            onValueChange={setIsNotifications}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    color: "#2c3e50",
  },
  section: {
    marginBottom: 30,
    marginTop:20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7f8c8d",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 15,
    color: "#34495e",
  },
  dropdown: {
    marginBottom: 10,
    borderColor: "#bdc3c7",
  },
  dropdownContainer: {
    borderColor: "#bdc3c7",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ecf0f1",
  },
  itemText: {
    fontSize: 16,
    color: "#2c3e50",
  },
});

