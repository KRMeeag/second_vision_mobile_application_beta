import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const VI_USERS = [
    { name: "Miguel Bautista", email: "miguel.bautista@gmail.com", age: 53, id: "#1", img: 'https://i.imgur.com/7Yf8YfI.png' },
    { name: "Juan Dela Cruz", email: "juan.dc@gmail.com", age: 65, id: "#2", img: 'https://via.placeholder.com/150' }
];

export const ListVIScreen = ({ onBack }: { onBack: () => void }) => {
    const [index, setIndex] = useState(0);
    const user = VI_USERS[index];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0A4FA3' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}><FontAwesome5 name="bars" size={24} color="#fff" /></TouchableOpacity>
                <FontAwesome5 name="eye" size={30} color="#fff" />
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.whiteCard}>
                <View style={styles.carouselRow}>
                    <TouchableOpacity onPress={() => setIndex(index === 0 ? 1 : 0)}>
                        <FontAwesome5 name="chevron-left" size={40} color="#555" />
                    </TouchableOpacity>
                    <Image source={{ uri: user.img }} style={styles.viImg} />
                    <TouchableOpacity onPress={() => setIndex(index === 0 ? 1 : 0)}>
                        <FontAwesome5 name="chevron-right" size={40} color="#555" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.viName}>{user.name}</Text>
                <Text style={styles.viSub}>VI Paired {user.id}</Text>

                <TouchableOpacity style={styles.unpairBtn}>
                    <FontAwesome5 name="user-minus" size={18} color="#fff" />
                    <Text style={styles.unpairText}>Unpair</Text>
                </TouchableOpacity>

                <Text style={styles.detailsHeader}>User Details</Text>
                <DetailRow label="Full Name:" value={user.name} />
                <DetailRow label="Email Address:" value={user.email} />
                <DetailRow label="Phone Number:" value="0910 000 0000" />
                <DetailRow label="Age:" value={user.age.toString()} small />
            </View>
        </SafeAreaView>
    );
};

const DetailRow = ({ label, value, small }: any) => (
    <View style={styles.detailItem}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.valBox, small && { width: '30%' }]}>
            <Text style={styles.valText}>{value}</Text>
            <FontAwesome5 name="pencil-alt" size={12} color="#000" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', backgroundColor: '#E67E22' },
    whiteCard: { flex: 1, backgroundColor: '#F2F4F4', margin: 15, borderRadius: 40, padding: 20, alignItems: 'center' },
    carouselRow: { flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 10 },
    viImg: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#fff' },
    viName: { fontSize: 28, fontWeight: 'bold' },
    viSub: { color: '#777', marginBottom: 15 },
    unpairBtn: { flexDirection: 'row', backgroundColor: '#F1948A', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 20, gap: 10 },
    unpairText: { color: '#fff', fontWeight: 'bold' },
    detailsHeader: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 15 },
    detailItem: { width: '100%', marginBottom: 10 },
    label: { fontWeight: 'bold', marginBottom: 5 },
    valBox: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 10, borderRadius: 10, elevation: 1 },
    valText: { fontSize: 14 }
});