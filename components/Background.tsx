import React, { ReactNode, useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Dimensions, useWindowDimensions } from "react-native";

type BackgroundProps = {
  children: ReactNode;
  scrollY: Animated.Value;
};

export default function Background({ children, scrollY }: BackgroundProps) {
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;

    const { width } = useWindowDimensions();
    const isMobile = width < 800;

    useEffect(() => {
        Animated.stagger(300, [
            Animated.timing(fadeAnim1, {
                toValue: 0.25,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim2, {
                toValue: 0.25,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim3, {
                toValue: 0.25,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={isMobile ? styles.backgroundHolderMob : styles.backgroundHolder}>
            <Animated.View style={[styles.circle, isMobile ? styles.circleTopLeftMob : styles.circleTopLeft, {opacity: fadeAnim1, transform: [{ translateY: Animated.multiply(scrollY, -0.1) }],},]}/>
            <Animated.View style={[styles.circle, styles.circleTopRight, { opacity: fadeAnim2, transform: [{ translateY: Animated.multiply(scrollY, -0.1) }],},]}/>
            <Animated.View style={[ styles.circle, isMobile ? styles.circleBottomRightMob : styles.circleBottomRight, { opacity: fadeAnim3, transform: [{ translateY: Animated.multiply(scrollY, -0.1) }],},]}/>
            {children}
        </View>);
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    backgroundHolder: {
        backgroundColor: "#A69CC2",
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    backgroundHolderMob: {
        backgroundColor: "#A69CC2",
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    circle: {
        position: "absolute",
        backgroundColor: "#ffffff",
        borderRadius: 2002,
    },
    circleTopLeft: {
        left: -550,
        top: -500,
        width: 1000,
        height: 1000,
    },
    circleTopLeftMob:{
        left: -500,
        top: -350,
        width: 700,
        height: 700,
    },
    circleTopRight: {
        left: width - 200,
        top: -100,
        width: 0,
        height: 0,
    },
    circleBottomRight: {
        left: width - 600,
        top: height - 500,
        width: 1400,
        height: 1400,
    },
    circleBottomRightMob: {
        left: width - 400,
        top: height - 250,
        width: 1400,
        height: 1400,
    },
});
