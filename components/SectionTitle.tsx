import React, { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type BackgroundProps = {
    children: ReactNode;
};

export default function SectionTitle({children}: BackgroundProps){

    return(
        <Text style={styles.title}>
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
        marginTop: 20,
        marginBottom: 5,
    },
    brackets:{
        color: "#FAF0E6",
        fontSize: 32,     
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'bold',
    }
    });