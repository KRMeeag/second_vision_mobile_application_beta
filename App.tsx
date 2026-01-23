import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, Alert, StyleSheet, View } from "react-native";
import { styles } from "./src/styles/authStyles";
import { Screen } from "./src/types/ScreenTypes";

// Screens
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ResetScreen from "./src/screens/ResetScreen";
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CaregiverDashboard from "./src/screens/CaregiverDashboard";
import { PairingScreen } from "./src/screens/PairingScreen";
import { ListVIScreen } from "./src/screens/ListVIScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { SideMenu } from "./src/components/SideMenu";

// --- MOCK DATA ---
const MOCK_USERS = {
  v_user: { email: "user@vision.com", password: "password123", role: "impaired" },
  c_user: { email: "care@vision.com", password: "password123", role: "caregiver" },
};

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Authentication Handler
  const handleLogin = (email: string, pass: string) => {
    if (email === MOCK_USERS.v_user.email && pass === MOCK_USERS.v_user.password) {
      setScreen("home");
    } else if (email === MOCK_USERS.c_user.email && pass === MOCK_USERS.c_user.password) {
      setScreen("caregiver_home");
    } else {
      Alert.alert("Login Failed", "Invalid credentials. Use user@vision.com or care@vision.com");
    }
  };

  // --- NAVIGATION ROUTER ---
  
  // 1. Splash Screen
  if (screen === "splash") {
    return <SplashScreen onContinue={() => setScreen("login")} />;
  }

  // 2. Visually Impaired Home Screen
  if (screen === "home") {
    return (
      <HomeScreen
        onCamera={() => console.log("Camera Pressed")}
        onPair={() => console.log("Pair Pressed")}
        onCaregivers={() => console.log("Caregivers Pressed")}
        onSettings={() => setScreen("login")}
      />
    );
  }

  // 3. Caregiver Specialized Screens
  if (screen === "pairing") {
    return <PairingScreen onBack={() => setScreen("caregiver_home")} />;
  }

  if (screen === "list_vi") {
    return <ListVIScreen onBack={() => setScreen("caregiver_home")} />;
  }

  if (screen === "settings") {
    return <SettingsScreen onBack={() => setScreen("caregiver_home")} />;
  }

  // 4. Main Caregiver Dashboard (with Side Menu)
  if (screen === "caregiver_home") {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}> 
        <CaregiverDashboard 
          onLogout={() => setScreen("login")} 
          onOpenMenu={() => {
              console.log("Menu button clicked!"); // Add this log to verify in your terminal
              setIsMenuOpen(true);
          }} 
        />
        <SideMenu 
          visible={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          userEmail="eliza.bautista@gmail.com"
          userName="Eliza"
          onNavigate={(target: any) => {
            setScreen(target);
            setIsMenuOpen(false);
          }}
        />
      </View>
    );
}

  // 5. Auth Screens (Login, Signup, Reset)
  return (
    <SafeAreaView style={styles.container}>
      {screen !== "login" && (
        <TouchableOpacity style={styles.backBtn} onPress={() => setScreen("login")}>
          <Text style={styles.backText}>← Go Back</Text>
        </TouchableOpacity>
      )}

      {screen === "login" && (
        <LoginScreen
          goReset={() => setScreen("reset")}
          goSignup={() => setScreen("signup")}
          onLoginSubmit={handleLogin}
        />
      )}

      {screen === "reset" && <ResetScreen />}
      
      {screen === "signup" && (
        <SignupScreen goLogin={() => setScreen("login")} />
      )}
    </SafeAreaView>
  );
}