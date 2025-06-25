import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {

    const navigation = useNavigation();

    return (
    <View style={styles.navbar}>
        <View style={styles.menuButtonsHolder}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.link}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PortfolioScreen')}>
                <Text style={styles.link}>Portfolio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutMeScreen')}>
                <Text style={styles.link}>About me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log("pocinje download PDF-a")}>
                <Text style={styles.link}>Download CV</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconHolder}>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/vedran-mari%C4%87-792033173/")}>
                <Image style={styles.icons} source={require('../assets/icons/InBug-Black.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/vedran-maric")}>
                <Image style={styles.icons} source={require('../assets/icons/github-mark.svg')}/>
            </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#352F44',
        color: '#B9B4C7',
        justifyContent: "space-around",
        paddingVertical: 10,
    },
    iconHolder: {
        display: "flex",
        flexDirection: "row",
        width: 60,
    },
    menuButtonsHolder: {
        display: "flex",
        flexDirection: "row",
        marginVertical: "auto",
    },
    link: {
        fontWeight: 'regular',
        color: '#B9B4C7',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 15,

    },
    icons: {
        tintColor: '#B9B4C7',
        width: 30,
        height: 30,
        opacity: 0.3,
        marginHorizontal: 15,
    },
    button:{
        marginHorizontal: 30,

    },
});
