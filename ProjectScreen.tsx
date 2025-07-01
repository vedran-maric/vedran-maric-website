import React, { useEffect, useState } from "react";
import { 
  View, Text, StyleSheet, useWindowDimensions, Image, ScrollView, 
  TouchableOpacity, Dimensions, 
} from "react-native";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import { useRoute, RouteProp } from '@react-navigation/native';
import { supabase } from './src/supabaseClient';
import { RootStackParamList } from "./App";
import Icon from 'react-native-vector-icons/FontAwesome';


const screenWidth = Dimensions.get('window').width;

export default function ProjectScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'ProjectScreen'>>();
  const { projectId } = route.params as { projectId: number };

  const [project, setProject] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { width } = useWindowDimensions();
  const isMobile = width < 800;

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('Portfolio_projects')
        .select('*')
        .eq('id', projectId)
        .single();

      if (!error && data) {
        setProject(data);
      }

      // Dohvati samo slike za ovaj projekt iz Project_Images tablice
      const { data: imageData, error: imageError } = await supabase
        .from('Project_Images')
        .select('image_url')
        .eq('project_id', projectId);

      if (!imageError && imageData) {
        setImages(imageData.map(img => img.image_url));
        setCurrentIndex(0); // reset carousel na prvu sliku kad se projekt promijeni
      }
    };

    fetchProject();
  }, [projectId]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!project) return <Text>Učitavanje...</Text>;

  return (
    <Background>
        <Navbar />
        <View style={styles.flex}>
            <ScrollView>

                <View style={isMobile ? styles.mainHolderMob : styles.mainHolder}>
                    <Text style={styles.title}>Project</Text>
                    <SectionTitle>{project.project_name}</SectionTitle>

                    {images.length > 0 ? (
                        <View style={styles.carouselContainer}>
                            <TouchableOpacity onPress={goPrev} style={styles.arrowButton}>
                                <Text style={styles.arrowText}>
                                    {"< "}
                                </Text>
                            </TouchableOpacity>

                            <Image
                                source={{ uri: images[currentIndex] }}
                                style={styles.image}
                            />

                            <TouchableOpacity onPress={goNext} style={styles.arrowButton}>
                                <Text style={styles.arrowText}>
                                    {" >"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Text style={{ color: "#FAF0E6", textAlign: 'center', marginVertical: 20, fontSize: 20 }}>
                        No images available.
                        </Text>
                    )}
                    <SectionTitle>BRIEFLY</SectionTitle>
                    <Text style={styles.description}>{project.summary}</Text>
                    <SectionTitle>DETAILED DESCRIPTION</SectionTitle>
                    <Text style={styles.description}>{project.description}</Text>
                </View>

                <View style={styles.footerMargin}></View>
                <Footer />

            </ScrollView>
        </View>
    </Background>
  );
}

const styles = StyleSheet.create({
    icon:{
        marginRight: 10,
        marginVertical: "auto",
    },
    flex:{
        flex: 1,
    },
    footerMargin: {
        height: 150,
    },
    title: {
        color: "#5C5470",
        fontSize: 96,
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: 50,
    },
    titleMob: {
        color: "#5C5470",
        fontSize: 60,
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginVertical: 50,
    },
    description: {
        color: "#FAF0E6",
        fontSize: 20,
        textAlign: "justify",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'medium',
        marginTop: 20,
    },
    mainHolder: {
        marginHorizontal: "18%",
    },
    mainHolderMob: {
        marginHorizontal: 20,

    },
    carouselContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    arrowButton: {
            margin: 10,
    },
    arrowText: {
        color: "#FAF0E6",
        fontSize: 32,     
        textAlign: "center",
        fontFamily: 'IBMPlexMono_400Regular',
        fontWeight: 'bold',
    },
    image: {
        height: 450,
        width: 800,
        borderRadius: 10,
        resizeMode: "contain",
        marginHorizontal: 10,
        backgroundColor: "#ccc",
    },
});
