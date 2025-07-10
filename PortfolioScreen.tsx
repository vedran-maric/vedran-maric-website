import React, { useRef } from "react";
import { View, Text, StyleSheet, useWindowDimensions, Animated } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';
import Background from "./components/Background";
import Footer from "./components/Footer";
import ProjectCards from "./components/ProjectCards";

export default function PortfolioScreen( ){
        const navigation = useNavigation();
        const { width } = useWindowDimensions();
        const isMobile = width < 800;
        const scrollY = useRef(new Animated.Value(0)).current;

    return(
        <Background scrollY={scrollY}>
            <Navbar  />
            <Animated.ScrollView onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })} scrollEventThrottle={16}>
                <View style={isMobile ?  (styles.aboutHolderMob) : (styles.aboutHolder)}>
                    <Text style={isMobile ?  (styles.titleMob) : (styles.title)}>Portfolio</Text>
                    <ProjectCards/>
              </View>
            <View style={styles.footerMargin}></View>
            <Footer/>
            </Animated.ScrollView>        
        </Background>
    );
}

const styles = StyleSheet.create({
    footerMargin:{
        height: 150,
    },
    title:{
        color: "#5C5470",
        fontSize: 96,     
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: 50,
    },
    titleMob:{
        color: "#5C5470",
        fontSize: 60,     
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: 50,
    },
    aboutHolder:{
        marginHorizontal: "18%",
    },
    aboutHolderMob:{
        marginHorizontal: 20,
    },
});