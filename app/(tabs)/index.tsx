import { View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Borders */}
      <View style={styles.borderBox}>
        <Text style={styles.text}>This is a box with borders</Text>
      </View>

      {/* Shadows */}
      <View style={styles.shadowBox}>
        <Text style={styles.text}>This is a box with shadows</Text>
      </View>

      {/* Paddings and Margins */}
      <View style={styles.paddingMarginBox}>
        <Text style={styles.text}>This box has padding and margin</Text>
      </View>

      {/* Styling Text */}
      <Text style={styles.styledText}>This is styled text</Text>

      {/* Icons */}
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={30} color="#007AFF" />
        <Text style={styles.text}>Search Icon</Text>
      </View>

      {/* Platform-specific Code */}
      <View style={styles.platformBox}>
        <Text style={styles.text}>This box has platform-specific styles</Text>
      </View>
      {/* Inline styles */}
      <View>
        <Text style={{ fontSize: 24, color: '#333', fontWeight: 'bold' }}>Inline styles</Text>
      </View>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  // Container for the entire page
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  // Borders
  borderBox: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  // Shadows
  shadowBox: {
    width: 200,
    height: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // For Android
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  // Paddings and Margins
  paddingMarginBox: {
    padding: 20,
    margin: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginBottom: 20,
  },

  // Styling Text
  styledText: {
    fontSize: 18,
    fontWeight: "light",
    color: "blue",
    marginBottom: 20,
  },

  // Icons
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  // Platform-specific Code
  platformBox: {
    padding: Platform.OS === "ios" ? 20 : 10, // Different padding for iOS and Android
    backgroundColor: Platform.OS === "web" ? "#d3f8d3" : "#f8d3d3", // Different background colors
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  // Common text style
  text: {
    fontSize: 16,
    color: "#333",
  },
});
