import React, { ReactNode } from "react";
import { StyleSheet, Text, useWindowDimensions } from "react-native";

type BackgroundProps = {
    children: ReactNode;
};


export default function SectionTitle({children}: BackgroundProps){

    const { width } = useWindowDimensions();
    const isMobile = width < 800;
    
    return(
        <Text style={isMobile ?  (styles.titleMob) : (styles.title)}>
            <Text style={styles.brackets}>
                {"</ "}
            </Text>
            {children}
            <Text style={styles.brackets}>
                {" >"}
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        color: '#5C5470',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 32,     
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    titleMob:{
        fontWeight: 'bold',
        color: '#5C5470',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 24,     
        textAlign: "center",
        marginTop: 40,
        marginBottom: 10,
    },
    brackets:{
        color: "#FAF0E6",
        fontSize: 32,     
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'bold',
    }
    });