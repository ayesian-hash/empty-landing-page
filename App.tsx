import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    if (email.trim()) {
      alert(`Thank you! ${email} has been added to the waitlist.`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={height > 800}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.aboutUsText}>ABOUT US</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Main Title */}
        <Text style={styles.mainTitle}>This app is empty</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>SILENCE IS THE ONLY LUXURY LEFT.</Text>

        {/* Email Input */}
        <TextInput
          style={styles.emailInput}
          placeholder="Email address"
          placeholderTextColor="#D4C4B0"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleJoinWaitlist}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>JOIN THE WAITLIST</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Right Widget */}
      <View style={styles.bottomRightWidget}>
        <View style={styles.widgetDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <View style={styles.figmaIcon}>
          <Text style={styles.figmaText}>◆</Text>
        </View>
        <View style={styles.navigationDots}>
          <View style={[styles.navDot, styles.navDotActive]} />
          <View style={styles.navDot} />
          <View style={styles.navDot} />
          <View style={styles.navDot} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E8E0D5",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "space-between",
    minHeight: height,
  },
  header: {
    alignItems: "flex-end",
    marginBottom: 60,
  },
  aboutUsText: {
    fontSize: 12,
    letterSpacing: 2,
    color: "#A99F96",
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  mainTitle: {
    fontSize: 56,
    fontWeight: "900",
    color: "#0A0E27",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 24,
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 2.5,
    color: "#C9B8AD",
    textAlign: "center",
    marginBottom: 80,
    fontWeight: "500",
  },
  emailInput: {
    width: width > 600 ? 400 : "100%",
    maxWidth: 400,
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#D4C4B0",
    fontSize: 16,
    color: "#0A0E27",
    marginBottom: 40,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 8,
    minWidth: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
  bottomRightWidget: {
    position: "absolute",
    bottom: 40,
    right: 24,
    width: 60,
    height: 180,
    alignItems: "center",
    justifyContent: "space-between",
  },
  widgetDots: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 40,
    height: 40,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#333333",
    margin: 2,
  },
  figmaIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center",
  },
  figmaText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  navigationDots: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
  },
  navDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#999999",
  },
  navDotActive: {
    backgroundColor: "#333333",
  },
});
