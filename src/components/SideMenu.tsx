import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type MenuProps = {
    visible: boolean;
    onClose: () => void;
    userEmail: string;
    userName: string;
    onNavigate: (screen: any) => void;
};  

export const SideMenu = ({ visible, onClose, userEmail, userName, onNavigate }: MenuProps) => (
    <Modal visible={visible} transparent animationType="fade">
        <View style={styles.overlay}>
            <View style={styles.menuContainer}>
                {/* Close Button */}
                <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                    <FontAwesome5 name="times" size={24} color="#000" />
                </TouchableOpacity>
                
                {/* Profile Section - THE FIXED SECTION */}
                <View style={styles.profileHeader}>
                    <Image 
                        source={{ uri: 'https://i.imgur.com/6o8N8uE.png' }} 
                        style={styles.miniAvatar} 
                    />
                    <Text style={styles.helloText}>Hello, {userName}!</Text>
                    <Text style={styles.emailText}>{userEmail}</Text>
                </View>

                {/* Navigation Links */}
                <View style={styles.navLinks}>
                    <MenuLink 
                        icon="link" 
                        label="Pair with VI" 
                        onPress={() => onNavigate("pairing")} 
                    />
                    <MenuLink 
                        icon="walking" 
                        label="List of VI" 
                        onPress={() => onNavigate("list_vi")} 
                    />
                    <MenuLink 
                        icon="cog" 
                        label="Settings" 
                        onPress={() => onNavigate("settings")} 
                    />
                </View>
            </View>
            
            {/* Tapping outside the menu closes it */}
            <TouchableOpacity style={styles.outside} onPress={onClose} />
        </View>
    </Modal>
);

const MenuLink = ({ icon, label, onPress }: any) => (
    <TouchableOpacity style={styles.linkItem} onPress={onPress}>
        <View style={styles.iconWrapper}>
            <FontAwesome5 name={icon} size={20} color="#000" />
        </View>
        <Text style={styles.linkLabel}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    overlay: { 
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: 'rgba(0,0,0,0.5)', // This dims the background
        justifyContent: 'flex-start', // Ensures menu starts from left
    },
    menuContainer: { 
        width: '75%', 
        backgroundColor: '#E5E7E9', 
        padding: 25, 
        paddingTop: 50,
        height: '100%',
        elevation: 10, // Adds shadow for Android
        zIndex: 999,   // Ensures it stays on top for iOS
    },
    outside: { 
        flex: 1 
    },
    closeBtn: { 
        alignSelf: 'flex-end', 
        marginBottom: 20 
    },
    // Missing Styles Fixed Below:
    profileHeader: {
        alignItems: 'flex-start',
        marginBottom: 30,
    },
    miniAvatar: { 
        width: 70, 
        height: 70, 
        borderRadius: 35, 
        marginBottom: 15,
        backgroundColor: '#fff' 
    },
    helloText: { 
        fontSize: 26, 
        fontWeight: 'bold',
        color: '#000'
    },
    emailText: { 
        fontSize: 14, 
        color: '#555', 
        marginTop: 4 
    },
    navLinks: { 
        gap: 25, 
        borderTopWidth: 1, 
        borderTopColor: '#BDC3C7', 
        paddingTop: 30 
    },
    linkItem: { 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingVertical: 5
    },
    iconWrapper: {
        width: 35,
        alignItems: 'center'
    },
    linkLabel: { 
        fontSize: 20, 
        fontWeight: '500', 
        marginLeft: 15,
        color: '#000'
    }
});