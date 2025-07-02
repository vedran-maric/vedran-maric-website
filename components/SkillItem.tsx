import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

type skillItem = {
    title: string,
    imgURL: string,
};

export default function SkillItem({imgURL, title}:skillItem){

    const { width } = useWindowDimensions();
    const isMobile = width < 800;

    return(
        <View style={isMobile ?  (styles.mainHolderMob) : (styles.mainHolder)}>
            <Image style={styles.image} source={{uri: imgURL}}></Image>
            <Text style={isMobile ?  (styles.titleMob) : (styles.title)}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    image:{
        height: 50,
        width: 50,
        resizeMode: "contain",
        marginLeft: 10,
    },
    title:{
        color: "#5C5470",
        fontSize: 25,
        textAlign: "left",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: "auto",
        marginLeft: 15,
        marginRight: 10,
    },
    titleMob:{
        color: "#5C5470",
        fontSize: 15,
        textAlign: "left",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: "auto",
        marginLeft: 15,
        marginRight: 10,
    },
    mainHolder:{
        backgroundColor: "#D9D9D9",
        borderRadius: 100,
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",    
        alignSelf: "flex-start", 
        maxWidth: "100%",  
    },
    mainHolderMob:{
        backgroundColor: "#D9D9D9",
        borderRadius: 100,
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",    
        alignSelf: "flex-start", 
        width: "85%", 
    },


});