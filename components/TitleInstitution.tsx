import React from "react";
import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

type Props = {
    title: string;
    description: string;
    date?: string;
};

export default function TitleInstitution({title, description, date}: Props){

    const { width } = useWindowDimensions();
    const isMobile = width < 800;

    if (isMobile) {
        return(
            <Text style={styles.titleMob}>
                {title} 
                {"\n"}
                <Text style={styles.institutionMob}>
                    {description}
                </Text>
                {"\n"}
                <Text style={styles.institutionMob}>
                    {date}
                </Text>
            </Text>
        );
    }
    else{
        return(        
            <Text style={styles.title}>
                {title} 
                <Text style={styles.institution}>
                    {" "}
                    <Feather name="arrow-right" size={15} color="#FAF0E6" />
                    {" "}
                    {description}
                </Text>
                {date && <Text style={styles.institution}>
                    {" "}
                    <Feather name="arrow-right" size={15} color="#FAF0E6" />
                    {" "}
                    {date}
                </Text>
                }

            </Text>);
    }
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        color: '#5C5470',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 20,     
        textAlign: "left",
        marginBottom: 5,
    },
    titleMob:{
        fontWeight: 'bold',
        color: '#5C5470',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 20,     
        textAlign: "center",
        marginBottom: 10,

    },
    institution:{
        fontWeight: '500',
        color: '#FAF0E6',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 20,     
    },
    institutionMob:{
        fontWeight: "500",
        color: '#FAF0E6',
        fontFamily: 'IBMPlexMono_400Regular',
        fontSize: 16,     
    },
});