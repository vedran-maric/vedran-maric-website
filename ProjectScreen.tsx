import react from "react";
import { View, Text, Button } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';


export default function ProjectScreen(  ){
        const navigation = useNavigation();
    

    return(
        <View>
            <Navbar  />
            <Text>Hello 4!</Text>
            <Button title="Vrati me na Home" onPress={() => navigation.navigate("HomeScreen")}></Button>
        </View>
    );

}