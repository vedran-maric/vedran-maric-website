import react from "react";
import { View, Text, Button, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';
import Background from "./components/Background";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SectionTitle from "./components/SectionTitle";
import ProjectCards from "./components/ProjectCards";


export default function PortfolioScreen( ){
        const navigation = useNavigation();

        const { width } = useWindowDimensions();
        const isMobile = width < 800;


    return(
        <Background>
            <Navbar  />
            <ScrollView>
                <View style={isMobile ?  (styles.aboutHolderMob) : (styles.aboutHolder)}>
                    <Text style={isMobile ?  (styles.titleMob) : (styles.title)}>Portfolio</Text>
                    <SectionTitle>PROJECTS</SectionTitle>
                    <ProjectCards/>
              </View>
            <View style={styles.footerMargin}></View>
            <Footer/>
            </ScrollView>

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