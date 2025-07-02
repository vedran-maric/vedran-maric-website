import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { supabase } from "../src/supabaseClient";
import SkillItem from "./SkillItem";
import SectionTitle from "./SectionTitle";

export default function SkillItems(){

    const [skills, setSkills] = useState<Skill[]>([]);

    type Skill = {
        icon_URL: string;
        app_name: string,
    };

    const fetchSkills = async () => {
        const { data, error } = await supabase
            .from('Tech_stack')
            .select('*');

        if (error) {
        console.error("Greška pri dohvaćanju skillova:", error);
        } else {
        setSkills(prev => [...prev, ...data]);
        };
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    return(
        <View>
            <SectionTitle>SKILLS</SectionTitle>
            <View style={styles.skillsHolder}>
                {skills.map((skill, index)=>(
                    <SkillItem 
                    key={index}
                    title={skill.app_name}
                    imgURL={skill.icon_URL}/>
                    ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    skillsHolder:{
        flexWrap: "wrap",        
        justifyContent: "center",
        gap: 10,  
        flexDirection: "row",
    },

});