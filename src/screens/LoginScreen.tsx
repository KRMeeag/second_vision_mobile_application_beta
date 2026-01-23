import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/authStyles";

type Props = {
  goReset: () => void;
  goSignup: () => void;
  onLoginSubmit: (email: string, pass: string) => void;
};

export default function LoginScreen({ goReset, goSignup, onLoginSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Image source={require("../../assets/icone.png")} style={styles.icon} />
      <Text style={styles.title}>LOGIN</Text>
      <Text style={styles.subtitle}>Welcome back to Second Vision!</Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput 
        placeholder="user@vision.com" 
        style={styles.input} 
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        secureTextEntry 
        placeholder="********" 
        style={styles.input} 
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.primaryBtn} onPress={() => onLoginSubmit(email, password)}>
        <Text style={styles.primaryText}>Log In</Text>
      </TouchableOpacity>
      
      {/* Rest of the links... */}
    </View>
  );
}