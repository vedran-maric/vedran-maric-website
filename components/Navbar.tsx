import React, { useState, useEffect, useRef }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navbar() {

    const navigation = useNavigation();
    
    const { width } = useWindowDimensions();
    const isMobile = width < 800;
    const [dropMenuVisible, setDropMenuVisible] = useState(false);
    
    const dropdownAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(dropdownAnim, {
            toValue: dropMenuVisible ? 1 : 0,
            duration: 300,
            useNativeDriver: false, // jer animiramo "height"
        }).start();
    }, [dropMenuVisible]);

    

    return (
    <View style={styles.navbar}>
        
        {isMobile? (
            <View style={styles.dropdownHolder}>
                <TouchableOpacity onPress={() => setDropMenuVisible(!dropMenuVisible)} style={styles.burger}>
                    <Icon name="bars" size={35} color="#B9B4C7" />
                </TouchableOpacity>
                {dropMenuVisible && (
                    <>
                        <Animated.View style={[styles.dropdown, {
                            height: dropdownAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 250], // visina padajućeg izbornika
                                extrapolate: 'clamp'
                            }),
                            overflow: 'hidden',
                        }]}>
                            <View style={styles.dropdown}>
                                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('HomeScreen'); setDropMenuVisible(false); }}>
                                    <Text style={styles.linkMob}>Home</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('PortfolioScreen'); setDropMenuVisible(false); }}>
                                    <Text style={styles.linkMob}>Portfolio</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('AboutMeScreen'); setDropMenuVisible(false); }}>
                                    <Text style={styles.linkMob}>About me</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL("https://pfkziwaltkcevveqpglb.supabase.co/storage/v1/object/public/cv//ENG%20-%20CV%20-%2024.6.2025.pdf"); setDropMenuVisible(false); }}>
                                    <Text style={styles.linkMob}>Download CV</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.iconHolderDropdown}>
                                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/vedran-mari%C4%87-792033173/")} style={styles.icons}>
                                    <Icon name="linkedin" size={35} color="#B9B4C7"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL("https://github.com/vedran-maric")} style={styles.icons}>
                                    <Icon name="github" size={35} color="#B9B4C7" />
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </>
                )}
            </View>
        ):(
            <>
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
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL("https://pfkziwaltkcevveqpglb.supabase.co/storage/v1/object/public/cv//ENG%20-%20CV%20-%2024.6.2025.pdf")}>
                        <Text style={styles.link}>Download CV</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconHolder}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/vedran-mari%C4%87-792033173/")} style={styles.icons}>
                        <Icon name="linkedin" size={30} color="#B9B4C7"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://github.com/vedran-maric")} style={styles.icons}>
                        <Icon name="github" size={30} color="#B9B4C7" />
                    </TouchableOpacity>
                </View>
            </>
        )}
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
    iconHolderDropdown: {
        display: "flex",
        flexDirection: "row",
        width: 60,
        marginHorizontal: "auto",
        marginTop: 10,
        justifyContent: "center",
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
    linkMob: {
        fontWeight: 'regular',
        color: '#B9B4C7',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 20,
        marginTop: 10,
    },
    icons: {
        tintColor: '#B9B4C7',
        opacity: 0.3,
        marginHorizontal: 15,
    },
    button:{
        marginHorizontal: 30,
    },
    dropdown: {
        backgroundColor: '#352F44',
        paddingTop: 10,
    },
    burger: {
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#B9B4C7",
        padding: 5,
        paddingVertical: 1,
        marginHorizontal: "auto",
    },
    dropdownHolder:{
    },
});
