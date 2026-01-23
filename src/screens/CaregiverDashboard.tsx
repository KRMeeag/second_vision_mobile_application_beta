import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView, StatusBar } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    onLogout: () => void;
    onOpenMenu: () => void;
};

export default function CaregiverDashboard({ onLogout, onOpenMenu }: Props) {
    const [activeTab, setActiveTab] = useState<'logs' | 'profile'>('logs');

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: activeTab === 'logs' ? '#E67E22' : '#0A4FA3' }]}>
            <StatusBar barStyle="light-content" />
            
            {/* TOP MENU BAR */}
            <View style={styles.menuHeader}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={onOpenMenu}>
                        <FontAwesome5 name="bars" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>Menu</Text>
                </View>
                <Image source={require("../../assets/iconewhite.png")} style={styles.logoIcon} />
            </View>

            <ScrollView style={styles.mainContent} bounces={false}>
                {activeTab === 'logs' ? <LogsView /> : <ProfileView onLogout={onLogout} />}
            </ScrollView>

            {/* BOTTOM NAVIGATION */}
            <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => setActiveTab('logs')}>
                    <MaterialCommunityIcons name="book-open-variant" size={35} color={activeTab === 'logs' ? '#fff' : '#AAB7B8'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('profile')}>
                    <FontAwesome5 name="user-alt" size={30} color={activeTab === 'profile' ? '#fff' : '#AAB7B8'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const LogsView = () => (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={styles.orangeHeader}>
            <View style={styles.headerTitleRow}>
                <Text style={styles.headerTitle}>Hazard Logs For{"\n"}Today</Text>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.logCount}>12</Text>
                    <Text style={styles.logSubtext}>Logs For Today</Text>
                </View>
            </View>
            <Text style={styles.dateText}>June 6, 2026, Friday</Text>
        </View>
        <View style={styles.logList}>
            <LogCard time="3:50 PM" user="Miguel" type="Non-Hazardous Object" desc="Bench Detected!" color="#BDBDBD" icon="bell" />
            <LogCard time="3:47 PM" user="Miguel" type="Major Hazard Detected!" desc="Stairs Detected!" color="#E74C3C" icon="exclamation-triangle" isMajor />
            <LogCard time="3:46 PM" user="Miguel" type="Minor Hazard Detected!" desc="Person Detected!" color="#F1C40F" icon="exclamation-circle" />
        </View>
    </View>
);

const LogCard = ({ time, user, type, desc, color, icon, isMajor }: any) => (
    <View style={[styles.card, { borderLeftColor: color, borderLeftWidth: 10 }]}>
        <View style={[styles.iconCircle, { backgroundColor: color }]}>
            <FontAwesome5 name={icon} size={22} color="#fff" />
        </View>
        <View style={styles.cardContent}>
            <Text style={styles.cardTime}>{time} - {user}</Text>
            <Text style={styles.cardType}>{type}</Text>
            <Text style={styles.cardDesc}>{desc}</Text>
        </View>
    </View>
);

const ProfileView = ({ onLogout }: any) => (
    <View style={styles.profileContainer}>
        <View style={styles.profileCard}>
            <Image source={{ uri: 'https://i.imgur.com/6o8N8uE.png' }} style={styles.profileImg} />
            <Text style={styles.profileName}>Eliza Bautista</Text>
            <Text style={styles.profileEmail}>eliza.bautista@gmail.com</Text>
            <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
                <MaterialCommunityIcons name="logout" size={20} color="#E74C3C" />
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>User Details</Text>
            <DetailInput label="Full Name:" value="Eliza Bautista" icon="user" />
            <DetailInput label="Email Address:" value="eliza.bautista@gmail.com" icon="envelope" />
        </View>
    </View>
);

const DetailInput = ({ label, value, icon }: any) => (
    <View style={styles.inputBox}>
        <Text style={styles.inputLabel}><FontAwesome5 name={icon} /> {label}</Text>
        <View style={styles.inputRow}>
            <TextInput value={value} style={{ flex: 1 }} editable={false} />
            <FontAwesome5 name="pencil-alt" size={14} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    mainContent: { flex: 1, backgroundColor: '#fff' },
    menuHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
    headerRow: { flexDirection: 'row', alignItems: 'center' },
    menuText: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
    logoIcon: { width: 40, height: 40, resizeMode: 'contain' },
    orangeHeader: { backgroundColor: '#E67E22', padding: 25, borderBottomRightRadius: 60, paddingBottom: 40 },
    headerTitleRow: { flexDirection: 'row', justifyContent: 'space-between' },
    headerTitle: { color: '#fff', fontSize: 30, fontWeight: '900' },
    logCount: { color: '#fff', fontSize: 35, fontWeight: 'bold' },
    logSubtext: { color: '#fff', fontSize: 12 },
    dateText: { color: '#fff', marginTop: 10 },
    logList: { padding: 20 },
    card: { backgroundColor: '#F2F3F4', borderRadius: 25, padding: 15, flexDirection: 'row', marginBottom: 15, elevation: 3 },
    iconCircle: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
    cardContent: { flex: 1 },
    cardTime: { fontSize: 12, fontWeight: 'bold', color: '#666' },
    cardType: { fontSize: 18, fontWeight: '900' },
    cardDesc: { fontSize: 14 },
    profileContainer: { flex: 1, backgroundColor: '#0A4FA3', padding: 20 },
    profileCard: { backgroundColor: '#F8F9F9', borderRadius: 40, padding: 20, alignItems: 'center' },
    profileImg: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#fff' },
    profileName: { fontSize: 28, fontWeight: 'bold', marginTop: 10 },
    profileEmail: { color: '#7F8C8D', marginBottom: 15 },
    logoutBtn: { flexDirection: 'row', backgroundColor: '#FADBD8', padding: 10, borderRadius: 20, width: '60%', justifyContent: 'center' },
    logoutText: { color: '#E74C3C', fontWeight: 'bold', marginLeft: 8 },
    divider: { height: 1, backgroundColor: '#DDD', width: '100%', marginVertical: 20 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
    inputBox: { width: '100%', marginBottom: 15 },
    inputLabel: { fontWeight: 'bold', marginBottom: 5 },
    inputRow: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, borderRadius: 15, elevation: 1 },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#0A4FA3', height: 75 }
});