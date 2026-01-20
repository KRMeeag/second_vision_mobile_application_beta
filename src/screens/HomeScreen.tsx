import {View, Text, TouchableOpacity, Image} from 'react-native';
import { homeStyles as styles } from "../styles/homeStyle";

type Props = {
    onCamera: () => void;
    onPair: () => void;
    onCaregivers: () => void;
    onSettings: () => void;
};

export default function HomeScreen({ onCamera, onPair, onCaregivers, onSettings }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Second Vision</Text>
            <Text style={styles.subheader}>Home</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.cameraButton]}
                    onPress={onCamera}
                    activeOpacity={0.7}
                >
                    <Image 
                        source={require("../../assets/iconewhite.png")} 
                        style={styles.cameraIcon} 
                    />
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>

                <View style={styles.gridContainer}>
                    <TouchableOpacity 
                        style={[styles.button, styles.gridButton]}
                        onPress={onPair}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonIcon}>🔗</Text>
                        <Text style={styles.gridButtonText}>Pair Device</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.gridButton]}
                        onPress={onCaregivers}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonIcon}>👥</Text>
                        <Text style={styles.gridButtonText}>Caregivers</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.gridButton]}
                        onPress={onSettings}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonIcon}>⚙️</Text>
                        <Text style={styles.gridButtonText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}