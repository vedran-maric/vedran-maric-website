import React, { useEffect, useRef, useState } from "react";
import {View, StyleSheet, Text, useWindowDimensions, Animated, TouchableOpacity } from "react-native";



export default function LandingWelcome() {

    const { width } = useWindowDimensions();
    const isMobile = width < 800;

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fullText = "Greetings!";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            const char = fullText[currentIndex];
            if (char !== undefined) {
                setDisplayedText((prev) => prev + char);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 80); //brzina

        return () => clearInterval(interval);
    }, []);


    useEffect(() => { //za slovo V
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return(
        <View style={ isMobile ?  (styles.mainHolderMobile) : (styles.mainHolder)}>
            <Animated.Text style={isMobile ? styles.titleMob : styles.title}>{displayedText}</Animated.Text>

            <Text style={styles.subtitle}>I am Vedran Marić, and this is my website</Text>

                <Animated.Text style={[styles.sign, { opacity: fadeAnim }]}>
                        V
                </Animated.Text>

        </View>
    );
}

const styles = StyleSheet.create({
    mainHolderMobile: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        minHeight: 750
    },
    mainHolder: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        minHeight: 900
    },
    title: {
        marginBottom: 15,
        fontSize: 96,      
        fontWeight: 'regular',
        color: '#FAF0E6',
        fontFamily: 'IBMPlexMono_400Regular', 
        textAlign: "center",
    },
    titleMob:{
        marginBottom: 15,
        fontSize: 60,     
        fontWeight: 'regular',
        color: '#FAF0E6',
        fontFamily: 'IBMPlexMono_400Regular', 
        textAlign: "center",
    },
    subtitle: {
        fontSize: 25,       
        fontWeight: 'regular',
        color: '#5C5470',
        fontFamily: 'IBMPlexMono_400Regular', 
        textAlign: "center",
        marginHorizontal: 5,
    },
    sign: {
        fontSize: 25,      
        fontWeight: 'regular',
        color: '#5C5470',
        fontFamily: 'IBMPlexMono_400Regular',  
        marginTop: 10,
    },
});