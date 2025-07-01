import react from "react";
import { View, Text, Button, StyleSheet, useWindowDimensions } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';
import Background from "./components/Background";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";


export default function ProjectScreen(  ){
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const isMobile = width < 800;
    const projectName = "Ime projekta";

    return(
        <Background>
            <Navbar  />
            <Text style={isMobile ?  (styles.titleMob) : (styles.title)}>Project</Text>
            <SectionTitle>{projectName}</SectionTitle>

            <View style={styles.footerMargin}></View>
            
            <Footer/>
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
});