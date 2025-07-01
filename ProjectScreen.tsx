import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';
import Background from "./components/Background";
import Footer from "./components/Footer";


export default function ProjectScreen(  ){
        const navigation = useNavigation();
    

    return(
        <Background>
            <Navbar  />
            <Text>Hello 4!</Text>
            <Button title="Vrati me na Home" onPress={() => navigation.navigate("HomeScreen")}></Button>
            <View style={styles.footerMargin}></View>
            
            <Footer/>
        </Background>
    );

}

const styles = StyleSheet.create({
    footerMargin:{
        height: 150,
    },
});