import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export const SettingsScreen = ({ onBack }: { onBack: () => void }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.header}>
            <TouchableOpacity onPress={onBack}><FontAwesome5 name="arrow-left" size={24} color="#000" /></TouchableOpacity>
            <FontAwesome5 name="eye" size={30} color="#000" />
            <View style={{ width: 24 }} />
        </View>

        <Text style={styles.title}>SETTINGS</Text>

        <View style={styles.searchBar}>
            <FontAwesome5 name="search" size={16} color="#999" />
            <TextInput placeholder="Search for a setting..." style={{ flex: 1, marginLeft: 10 }} />
        </View>

        <SettingItem icon="bell" label="Notifications" />
        <SettingItem icon="book" label="Detection Logs" />
        <SettingItem icon="info-circle" label="User Manual" />
    </SafeAreaView>
);

const SettingItem = ({ icon, label }: any) => (
    <TouchableOpacity style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.iconBox}><FontAwesome5 name={icon} size={20} color="#000" /></View>
            <Text style={styles.itemText}>{label}</Text>
        </View>
        <FontAwesome5 name="chevron-right" size={18} color="#999" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    searchBar: { flexDirection: 'row', backgroundColor: '#E5E7E9', margin: 20, padding: 12, borderRadius: 10, alignItems: 'center' },
    item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
    itemLeft: { flexDirection: 'row', alignItems: 'center' },
    iconBox: { width: 40 },
    itemText: { fontSize: 18, color: '#555' }
});