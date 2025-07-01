import react from "react";
import { View, Text, Button, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import Navbar from "./components/Navbar";
import { useNavigation } from '@react-navigation/native';
import Background from "./components/Background";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import TitleInstitution from "./components/TitleInstitution";


export default function AboutMeScreen(  ){
    const navigation = useNavigation();

    const { width } = useWindowDimensions();
    const isMobile = width < 800;

    return(
        <Background>
            <Navbar  />
            <ScrollView>
                <View style={isMobile ?  (styles.aboutHolderMob) : (styles.aboutHolder)}>
                <Text style={isMobile ?  (styles.titleMob) : (styles.title)}>About me</Text>
                <SectionTitle>BIOGRAPHY</SectionTitle>
                <Text style={styles.bioText}>Student pursuing third year of Computer science at the University of Mostar. Highest
 scoring pupil of the 2021/22 generation at Secondary vocational school Široki Brijeg.
 Holds experience in developing web, 3D and AR applications, creating multimedia
 content and writing technical documentation with a strong interest in IT and STEM
 technologies. Certified C1 English and A2 German speaker.
                </Text>
                <SectionTitle>FORMAL EDUCATION</SectionTitle>
                <TitleInstitution title="Bachelor of Computer Science" description="Faculty of Mechanical Engineering, Computing and Electrical Engineering, University of Mostar"/>
                <TitleInstitution title="Computer technician in Mechanical Engineering" description="Secondary vocational school Široki Brijeg"/>
            
                <SectionTitle>COURSES</SectionTitle>
                <TitleInstitution title="Robotics" description="Center for Technical Culture Mostar"/>
                <TitleInstitution title="Moviemaking" description="Mediterranean Film Festival"/>
                <TitleInstitution title="Basics in C programming" description="Enter"/>


                <SectionTitle>CERTIFICATES</SectionTitle>
                <TitleInstitution title="English" description="TOEFL C1 certificate"/>
                <TitleInstitution title="German" description="Goethe A2 certificate"/>

                <SectionTitle>WORK EXPERIENCES</SectionTitle>
                <TitleInstitution title="Multimedia editor" description="Info center “MIR” Međugorje"/>
                <TitleInstitution title="Unreal Engine developer" description="Freelance"/>
                <TitleInstitution title="Graphics designer" description="University of Mostar Student Union"/>
                <TitleInstitution title="Professor" description="Center for Technical Culture Mostar"/>


                <SectionTitle>AWARDS AND RECOGNITIONS</SectionTitle>
                <TitleInstitution title="Dean’s commendation" description="2024"/>
                <TitleInstitution title="2nd place at Globalsoft hackathon" description="2024"/>
                <TitleInstitution title="2nd place at SMART hackathon" description="2024"/>
                <TitleInstitution title="High school valedictorian" description="2022"/>


                <SectionTitle>INTERESTS</SectionTitle>
                <TitleInstitution title="SWITCH association for IT students member" description="(2024 - present)"/>
                <TitleInstitution title="Chess player" description="(2009 - 2014)"/>

                <SectionTitle>SKILLS</SectionTitle>


                
                </View>
                <View style={styles.footerMargin}></View>
                <Footer/>
            </ScrollView>

        </Background>
    );

}

const styles = StyleSheet.create({
    title:{
        color: "#5C5470",
        fontSize: 96,     
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: 50,
    },
    titleMob:{
        color: "#5C5470",
        fontSize: 60,     
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: 50,
    },
    footerMargin:{
        height: 150,
    },
    aboutHolder:{
        marginHorizontal: "18%",
    },
    aboutHolderMob:{
        marginHorizontal: 20,
    },

    bioText:{
        color: "#FAF0E6",
        fontSize: 20,     
        textAlign: "justify",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
    },
});