import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/authStyles";

type Props = {
  goReset: () => void;
  goSignup: () => void;
};

export default function LoginScreen({ goReset, goSignup }: Props) {
  return (
    <View>
      <Image source={require("../../assets/icone.png")} style={styles.icon} />

      <Text style={styles.title}>LOGIN</Text>
      <Text style={styles.subtitle}>Welcome back to Second Vision!</Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput placeholder="youremailaddress@gmail.com" style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput secureTextEntry placeholder="********" style={styles.input} />

      <TouchableOpacity onPress={goReset}>
        <Text style={styles.linkRight}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={goSignup}>
          Sign-up here
        </Text>
      </Text>
    </View>
  );
}
