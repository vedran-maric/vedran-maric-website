import react from "react";
import { View, Text, Button } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';


export default function PortfolioScreen( ){
        const navigation = useNavigation();


    return(
        <View>
            <Navbar  />
            <Text>Hello 3!</Text>
            <Button title="Vrati me na Home" onPress={() => navigation.navigate("HomeScreen")}></Button>
        </View>
    );

}