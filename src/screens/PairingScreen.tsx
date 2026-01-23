import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export const PairingScreen = ({ onBack }: { onBack: () => void }) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={{ uri: 'https://i.imgur.com/M6Lw1bJ.jpeg' }} style={styles.cameraBg}>
            <View style={styles.orangeTop}>
                <TouchableOpacity onPress={onBack}><FontAwesome5 name="arrow-left" size={24} color="#fff" /></TouchableOpacity>
                <View style={styles.qrHeader}>
                    <FontAwesome5 name="eye" size={24} color="#fff" />
                    <Text style={styles.qrText}>QR Reader</Text>
                </View>
                <FontAwesome5 name="info-circle" size={24} color="#fff" />
            </View>

            <View style={styles.overlayFrame}>
                <View style={styles.bracketTL} /><View style={styles.bracketTR} />
                <View style={styles.bracketBL} /><View style={styles.bracketBR} />
            </View>

            <View style={styles.instructionBox}>
                <Text style={styles.pairTitle}>Pairing Instructions</Text>
                <Step num="1" text="Open the Second Vision Application on your VI's smartphone" />
                <Step num="2" text="Click on the green button with a link icon" />
                <Step num="3" text="Align the box above to the QR code on your VI's smartphone" />
            </View>
        </ImageBackground>
    </SafeAreaView>
);

const Step = ({ num, text }: any) => (
    <View style={styles.stepRow}>
        <View style={styles.stepNum}><Text style={styles.stepNumText}>{num}</Text></View>
        <Text style={styles.stepText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    cameraBg: { flex: 1 },
    orangeTop: { backgroundColor: '#E67E22', flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
    qrHeader: { alignItems: 'center' },
    qrText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    overlayFrame: { flex: 1, margin: 60, justifyContent: 'center', alignItems: 'center' },
    bracketTL: { position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderTopWidth: 5, borderLeftWidth: 5, borderColor: '#000' },
    bracketTR: { position: 'absolute', top: 0, right: 0, width: 40, height: 40, borderTopWidth: 5, borderRightWidth: 5, borderColor: '#000' },
    bracketBL: { position: 'absolute', bottom: 0, left: 0, width: 40, height: 40, borderBottomWidth: 5, borderLeftWidth: 5, borderColor: '#000' },
    bracketBR: { position: 'absolute', bottom: 0, right: 0, width: 40, height: 40, borderBottomWidth: 5, borderRightWidth: 5, borderColor: '#000' },
    instructionBox: { backgroundColor: 'rgba(0,0,0,0.6)', padding: 20, margin: 20, borderRadius: 10 },
    pairTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
    stepRow: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
    stepNum: { backgroundColor: '#fff', width: 24, height: 24, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
    stepNumText: { fontWeight: 'bold' },
    stepText: { color: '#fff', flex: 1, fontSize: 12 }
});