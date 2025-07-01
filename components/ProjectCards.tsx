import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import ProjectCard from "./ProjectCard";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProjectCards() {
    return(
        <View>
        <View style={styles.cardsHolder}>
                                <ProjectCard title="Globalsoft 2025" subtitle="Osvojeno 2. mjesto na Globalsoft hackathonu 2025. kao član ekipe VisitAR" date="Aug 2025" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcivV10yQBetigqiqzRA7CHLcX8nYNidTGQ&s"/>
                                <ProjectCard title="Globalsoft 2025" subtitle="Osvojeno 2. mjesto na Globalsoft hackathonu 2025. kao član ekipe VisitAR" date="Aug 2025" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcivV10yQBetigqiqzRA7CHLcX8nYNidTGQ&s"/>
                                <ProjectCard title="Globalsoft 2025" subtitle="Osvojeno 2. mjesto na Globalsoft hackathonu 2025. kao član ekipe VisitAR" date="Aug 2025" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcivV10yQBetigqiqzRA7CHLcX8nYNidTGQ&s"/>
                                <ProjectCard title="Globalsoft 2025" subtitle="Osvojeno 2. mjesto na Globalsoft hackathonu 2025. kao član ekipe VisitAR" date="Aug 2025" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcivV10yQBetigqiqzRA7CHLcX8nYNidTGQ&s"/>
                                <ProjectCard title="Globalsoft 2025" subtitle="Osvojeno 2. mjesto na Globalsoft hackathonu 2025. kao član ekipe VisitAR" date="Aug 2025" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcivV10yQBetigqiqzRA7CHLcX8nYNidTGQ&s"/>
                                <ProjectCard title="Globalsoft 2025" subtitle="Osvojeno 2. mjesto na Globalsoft hackathonu 2025. kao član ekipe VisitAR" date="Aug 2025" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcivV10yQBetigqiqzRA7CHLcX8nYNidTGQ&s"/>
        </View>
        <View style={styles.buttonHolder}>
            <TouchableOpacity style={styles.moreButton}>
                <Icon style={styles.icon} name="chevron-right" size={10} color="#5C5470" />
                Show More
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardsHolder:{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    moreButton:{
        color: "#5C5470",
        fontSize: 15,     
        textAlign: "center",
        fontFamily: 'Inter_400Regular',
        fontWeight: 'bold',
        marginVertical: 5,
        backgroundColor: "#FAF0E6",
        borderRadius: 50,
        padding: 15,
        paddingHorizontal: 25,
        textAlignVertical: "center",
        marginHorizontal: "auto",
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
    },
    buttonHolder:{
        justifyContent: "center",
        marginTop: 50,
    },
    icon:{
        marginRight: 10,
        marginVertical: "auto",
    },

});