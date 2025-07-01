import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

export default function Footer() {

    const { width } = useWindowDimensions();
    const isMobile = width > 800;
    
    return(
        <View style={isMobile ?  (styles.footerHolder) : (styles.footerHolderMobile)}>
            <Text style={styles.title}>
                {"</ Vedran Marić - 2025 >"}
            </Text>
            <Text style={styles.subtitle}>
                {"</ vedran.maric1@live.com >"}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        footerHolder: {
            width: "100%",
            height: 100,
            backgroundColor: "#352F44",
            position: "absolute",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
        },

        footerHolderMobile: {
            width: "100%",
            height: 150,
            backgroundColor: "#352F44",
            position: "absolute",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 50,

        },

        title: {
            fontWeight: 'regular',
            color: '#B9B4C7',
            fontFamily: 'IBMPlexMono_400Regular',
            fontSize: 25,     
            textAlign: "center",

        },

        subtitle:{
            fontWeight: 'regular',
            color: '#B9B4C7',
            fontFamily: 'IBMPlexMono_400Regular',
            fontSize: 15,   
            textAlign: "center",

        },
    }
);