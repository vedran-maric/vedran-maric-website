import React, { useEffect, useRef, useState } from "react";
import { 
  View, Text, StyleSheet, useWindowDimensions, Image, 
  TouchableOpacity,
  Animated,
  Modal, 
} from "react-native";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import { useRoute, RouteProp } from '@react-navigation/native';
import { supabase } from './src/supabaseClient';
import { RootStackParamList } from "./App";



export default function ProjectScreen() {
    // Koristimo useRoute za pristup parametrima rute
    // Ova komponenta prikazuje detalje o projektu na temelju projectId proslijeđenog iz rute.
    // useRoute nam omogućuje pristup parametrima rute u React Navigationu.
    // RouteProp nam pomaže definirati tipove parametara rute.
    const route = useRoute<RouteProp<RootStackParamList, 'ProjectScreen'>>();

    
    // Izvlačimo projectId iz parametara rute
    // U ovom slučaju, projectId je tipa number, pa ga pretvaramo u number
    const { projectId } = route.params as { projectId: number };

    const [project, setProject] = useState<any>(null);
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);

    const { width } = useWindowDimensions();
    const isMobile = width < 800;
    const scrollY = useRef(new Animated.Value(0)).current;


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

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalImage(null);
  };


    return (
    <Background scrollY={scrollY}>
        <Navbar />
        <View style={styles.flex}>
            <Animated.ScrollView onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })} scrollEventThrottle={16}>
                <View style={isMobile ? styles.mainHolderMob : styles.mainHolder}>
                    <Text style={isMobile ? styles.titleMob : styles.title}>Project</Text>
                    <SectionTitle>{project.project_name}</SectionTitle>

                    {images.length > 0 ? (
                        <View style={styles.carouselContainer}>
                            <TouchableOpacity onPress={goPrev} style={styles.arrowButton}>
                                <Text style={styles.arrowText}>
                                    {"< "}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => openModal(images[currentIndex])}>
                            <Image  source={{ uri: images[currentIndex] }}
                                    style={isMobile ? styles.imageMob : styles.image}/>
                            </TouchableOpacity>

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
            </Animated.ScrollView>        
        </View>

                          {/* Modal za uvećanu sliku */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.modalCloseArea} onPress={closeModal} />
          <Image
            source={{ uri: modalImage! }}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </View>
      </Modal>

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
    imageMob: {
        height: 250,
        width: 280,
        borderRadius: 10,
        resizeMode: "contain",
        marginHorizontal: 0,
        backgroundColor: "#ccc",
    },

    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalCloseArea: {
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
    },
    modalImage: {
        width: "90%",
        height: "70%",
        borderRadius: 10,
    },
});
