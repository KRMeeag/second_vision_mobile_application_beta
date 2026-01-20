import { View, Text, TouchableOpacity, Image } from 'react-native';
import { homeStyles as styles } from "../styles/homeStyle";
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
    onCamera: () => void;
    onPair: () => void;
    onCaregivers: () => void;
    onSettings: () => void;
};

export default function HomeScreen({ onCamera, onPair, onCaregivers, onSettings }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {/* CAMERA SECTION */}
                <TouchableOpacity 
                    style={[styles.button, styles.cameraButton]}
                    onPress={onCamera}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonIcon}>OPEN</Text>
                    <Image 
                        source={require("../../assets/iconewhite.png")} 
                        style={styles.cameraIcon} 
                    />
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>

                {/* GRID SECTION */}
                <View style={styles.gridContainer}>
                    {/* PAIR DEVICE CONTAINER */}
                    <TouchableOpacity 
                        style={[styles.button, styles.pairButton]}
                        onPress={onPair}
                        activeOpacity={0.7}
                    >
                        <FontAwesome5 name="link" size={40} color="#fff" style={styles.gridIcon} />
                        <Text style={styles.pairText}>Pair Device</Text>
                    </TouchableOpacity>

                    {/* CAREGIVERS CONTAINER */}
                    <TouchableOpacity 
                        style={[styles.button, styles.caregiverButton]}
                        onPress={onCaregivers}
                        activeOpacity={0.7}
                    >
                        <FontAwesome5 name="hands-helping" size={40} color="#fff" style={styles.gridIcon} />
                        <Text style={styles.caregiverText}>Caregivers</Text>
                    </TouchableOpacity>
                </View>

                {/* SETTINGS CONTAINER */}
                <View style={styles.settingsWrapper}>
                    <TouchableOpacity
                        style={[styles.button, styles.settingsButton]}
                        onPress={onSettings}
                        activeOpacity={0.7}
                    >
                        <FontAwesome5 name="cog" size={40} color="#000" style={styles.settingsIcon} />
                        <Text style={styles.settingsText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}