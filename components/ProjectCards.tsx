import React, {useEffect, useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import ProjectCard from "./ProjectCard";
import Icon from 'react-native-vector-icons/FontAwesome';
import { supabase } from "../src/supabaseClient";

export default function ProjectCards() {

    type Project = {
        id: number;
        project_name: string;
        summary: string;
        project_date: string;
        image_URL?: string;
    };

    const [projects, setProjects] = useState<Project[]>([]);
    const [page, setPage] = useState(0);
    const pageSize = 6;
    const [hasMore, setHasMore] = useState(true);

    const fetchProjects = async (pageNumber = 0) => {
        const from = pageNumber * pageSize;
        const to = from + pageSize - 1;

        const { data, error } = await supabase
            .from('Portfolio_projects')
            .select('*')
            .order('project_date', { ascending: false })
            .range(from, to);

        if (error) {
        console.error("Greška pri dohvaćanju projekata:", error);
        } else {
        setProjects(prev => [...prev, ...data]);

        // Ako je vraćeno manje od očekivanog broja (npr. manje od 6), znamo da više nema
        if (data.length < pageSize) {
            setHasMore(false);
        }
        }
    };

    useEffect(() => {
        fetchProjects(0); // prva stranica
    }, []);

    const handleShowMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchProjects(nextPage);
    };

    return(
        <View>
            <View style={styles.cardsHolder}>
            {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            id={project.id} 
                            title={project.project_name}
                            subtitle={project.summary}
                            date={project.project_date}
                            imageURL={project.image_URL || 'https://pfkziwaltkcevveqpglb.supabase.co/storage/v1/object/sign/project.images/bin.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYWZjZjk2OC1hOTRkLTQ2ZjktOTM2Yy1kZjBkNGMxYzZjYzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0LmltYWdlcy9iaW4ucG5nIiwiaWF0IjoxNzUxMzcxMDc4LCJleHAiOjI1Mzk3NzEwNzh9.xlKZt34vs9zwA4IeIxe5dSASYiOFYazfVh8HLtEcMnw'}
                        />
                    ))}
            </View>
            {hasMore && (
            <View style={styles.buttonHolder}>
                <TouchableOpacity style={styles.moreButton} onPress={handleShowMore}>
                <Icon style={styles.icon} name="chevron-right" size={10} color="#5C5470" />
                <Text style={styles.moreButtonTxt}>Show More</Text>
                </TouchableOpacity>
            </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    moreButtonTxt:{
        color: "#5C5470",
        fontSize: 15,     
        fontFamily: 'Inter_400Regular',
        fontWeight: 'bold',
    },
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