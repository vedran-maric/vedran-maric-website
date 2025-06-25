import react from "react";
import { View, Text, Button } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen(){
    const navigation = useNavigation();


    return(
        <View>
            <Navbar />
            <Text>Hello 1!</Text>
            <Button title="Vrati me na About" onPress={() => navigation.navigate("AboutMeScreen")}></Button>
        </View>
    );

}