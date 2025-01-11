import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import MyMatches from './My matches/CricketAppScreen'
import Tournaments from './Tournaments/Tournaments';
import Home from './Home/Home';
import Teams from './Teams/Teams';
import Settings from './Settings/Settings';
const Footer = () => {
  const [activeTab, setActiveTab] = useState('MATCHES'); // Default active tab
  const navigation = useNavigation(); // Initialize navigation

  // Footer buttons data
  const footerTabs = [
    { key: 'MATCHES', icon: 'home', label: 'My Matches', route: 'MyMatches' },
    { key: 'TOURNAMENTS', icon: 'trophy', label: 'Tournaments', route: 'Tournaments' },
    { key: 'HOME', icon: 'home', label: 'Home', route: 'Home' },
    { key: 'TEAMS', icon: 'users', label: 'Teams', route: 'Teams' },
    { key: 'SETTINGS', icon: 'cogs', label: 'Settings', route: 'Settings' },
  ];

  // Function to handle tab redirection
  const handleTabPress = (tab) => {
    setActiveTab(tab.key); // Update active tab
    if (tab.route) {
      navigation.navigate(tab.route); // Navigate to the corresponding screen
    } else {
      console.error(`Route not defined for tab: ${tab.key}`);
    }
  };

  return (
    <View style={styles.footer}>
      {footerTabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.footerButton}
          onPress={() => handleTabPress(tab)} // Trigger the navigation
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            {/* Render the active circle only if the tab is active */}
            {activeTab === tab.key ? (
              <View style={styles.activeCircle}>
                <Icon name={tab.icon} size={28} color="#FFFFFF" />
              </View>
            ) : (
              <>
                <Icon name={tab.icon} size={24} color="#FFFFFF" />
                <Text style={styles.footerButtonText}>{tab.label}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#002233',
    height: 80, // Fixed footer height for consistent spacing
    paddingHorizontal: 10, // Equal horizontal padding
  },
  footerButton: {
    flex: 1, // Equal spacing for each button
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, // Fixed height for the button to avoid shifting
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 5,
  },
  activeCircle: {
    position: 'absolute',
    top: -15, // Circle positioned upwards
    width: 60,
    height: 60,
    backgroundColor: '#004E62', // Highlight color
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Keep active circle above other elements
  },
});

export default Footer;
