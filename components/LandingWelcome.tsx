import React from "react";
import {View, StyleSheet, Text, useWindowDimensions} from "react-native";



export default function LandingWelcome() {

    const { width } = useWindowDimensions();
    const isMobile = width < 800;

    return(
        <View style={ isMobile ?  (styles.mainHolderMobile) : (styles.mainHolder)}>
            <Text style={ isMobile ?  (styles.titleMob) : (styles.title)}>Greetings!</Text>
            <Text style={styles.subtitle}>I am Vedran Marić, and this is my website</Text>
            <Text style={styles.sign}>V</Text>
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
    },
});