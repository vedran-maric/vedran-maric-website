import React, { useRef } from "react";
import { View, StyleSheet, useWindowDimensions, Animated } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';
import Background from "./components/Background";
import Footer from "./components/Footer";
import LandingWelcome from "./components/LandingWelcome";
import ProjectCards from "./components/ProjectCards";
import SkillItems from "./components/SkillItems";

export default function HomeScreen(){
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const isMobile = width < 800;
    const scrollY = useRef(new Animated.Value(0)).current;

    return(
            <Background scrollY={scrollY}>
                <Navbar />
                <Animated.ScrollView onScroll={Animated.event( 
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }], 
                    { useNativeDriver: true })} 
                    scrollEventThrottle={16}>
                        <View style={isMobile ?  (styles.mainHolderMob) : (styles.mainHolder)}>
                        <LandingWelcome/>
                        <ProjectCards/>
                        <SkillItems/>
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
    mainHolder:{
        marginHorizontal: "18%",
    },
    mainHolderMob:{
    },
});
// Ovaj kod definira HomeScreen komponentu koja prikazuje početnu stranicu aplikacije.
// Uključuje navigacijsku traku, pozadinu, animirani skrol i različite komponente poput LandingWelcome, ProjectCards i SkillItems.
// Također, koristi Animated.ScrollView za omogućavanje animacija tijekom skrolanja.

