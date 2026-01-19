import { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./src/styles/authStyles";
import { Screen } from "./src/types/ScreenTypes";

import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ResetScreen from "./src/screens/ResetScreen";
import SignupScreen from "./src/screens/SignupScreen";

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");

  if (screen === "splash") {
    return <SplashScreen onContinue={() => setScreen("login")} />;
  }

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
        />
      )}

      {screen === "reset" && <ResetScreen />}
      {screen === "signup" && (
  <SignupScreen goLogin={() => setScreen("login")} />
    )}
    </SafeAreaView>
  );
}
