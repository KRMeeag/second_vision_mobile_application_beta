import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/authStyles";

export default function ResetScreen() {
  return (
    <View>
      <Image
        source={require("../../assets/icone.png")}
        style={styles.icon}
      />

      <Text style={styles.title}>RESET PASSWORD</Text>
      <Text style={styles.subtitle}>
        Please type the email associated with your account.
      </Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput placeholder="youremailaddress@gmail.com" style={styles.input} />

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryText}>Send Password Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
