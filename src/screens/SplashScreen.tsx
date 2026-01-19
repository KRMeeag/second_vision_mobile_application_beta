import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/authStyles";

type Props = {
  onContinue: () => void;
};

export default function SplashScreen({ onContinue }: Props) {
  return (
    <View style={styles.splash}>
      <Image source={require("../../assets/logo.png")} style={[styles.splashLogo, { width: 160, height: 160 }]} />
      <TouchableOpacity style={styles.splashTap} onPress={onContinue} />
    </View>
  );
}
