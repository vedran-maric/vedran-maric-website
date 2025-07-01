import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";

type ProjectCardProps={
    imageURL: string,
    title: string,
    subtitle: string,
    date: string
};



export default function ProjectCard({imageURL, title, subtitle, date}:ProjectCardProps) {
    const navigation = useNavigation();

    return(
        <View style={styles.cardHolder}>
            <Image style={styles.image} source={{uri: imageURL,}}/>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={styles.titleLink} onPress={() => { navigation.navigate('ProjectScreen');}}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardHolder:{
        marginVertical: 10,
        padding: 10,
        width: 360,
        height: 450,
        backgroundColor: "#5C5470",
        borderRadius: 10,
        marginHorizontal: 20,
    },
    image:{
        width: "auto",
        height: 250,
        borderRadius: 5,
    },
    title:{
        color: "#B9B4C7",
        fontSize: 18,     
        textAlign: "left",
        fontFamily: 'Inter_400Regular',
        fontWeight: 'heavy',
        marginVertical: 5,
    },
    titleLink:{
        marginRight: "auto",
    },
    subtitle:{
        color: "#FAF0E6",
        fontSize: 15,     
        textAlign: "left",
        fontFamily: 'Inter_300Light',
        fontWeight: 'light',
        marginVertical: 5,
    },
    date:{
        color: "#B9B4C7",
        fontSize: 15,     
        textAlign: "left",
        fontFamily: 'Inter_300Light',
        fontWeight: 'light',
        marginBottom: 10,
        marginTop: 15,
    },
});