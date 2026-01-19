import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/authStyles";

type Props = {
  goLogin: () => void;
};

export default function SignupScreen({ goLogin }: Props) {
  return (
    <View>
      <Image
        source={require("../../assets/icone.png")}
        style={styles.icon}
      />

      <Text style={styles.title}>SIGN UP</Text>
      <Text style={styles.subtitle}>
        Ensure the safety of your visually impaired today!
      </Text>

      <Text style={styles.label}>Username</Text>
      <TextInput placeholder="yourusername" style={styles.input} />

      <Text style={styles.label}>Email Address</Text>
      <TextInput placeholder="youremailaddress@gmail.com" style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput secureTextEntry placeholder="********" style={styles.input} />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput secureTextEntry placeholder="********" style={styles.input} />

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryText}>Sign-up</Text>
      </TouchableOpacity>

      {/* 👇 LOGIN REDIRECT */}
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={goLogin}>
          Login Here
        </Text>
      </Text>
    </View>
  );
}
