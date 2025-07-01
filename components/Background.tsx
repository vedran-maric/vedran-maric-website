import React, {ReactNode} from "react";
import { View, StyleSheet, Image } from "react-native";

type BackgroundProps = {
    children: ReactNode;
};

export default function Background({children}: BackgroundProps) {
    
    return(
        <View style={styles.backgroundHolder}>
            <Image source={require("../assets/backgroundCircleFullOp.png")} style={styles.circleTopLeft} />
            <Image source={require("../assets/backgroundCircleFullOp.png")} style={styles.circleTopRight} />
            <Image source={require("../assets/backgroundCircleFullOp.png")} style={styles.circleBottomRight} />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundHolder: {
        backgroundColor: "#A69CC2",
        height: "100%",
        width: "100%",
        flex: 1,
    },

    circleTopLeft: {
        position: "absolute",
        opacity: 0.25,
        left: -1200,
        top: 860,
        transform: [{
            scale: 3
        }]
    },

    circleTopRight: {
        position: "absolute",
        opacity: 0.25,
        left: 1600,
        top: -800,
        transform: [{
            scale: 2
        }]
    },
    circleBottomRight: {
        position: "absolute",
        opacity: 0.25,
        left: 1600,
        top: 1800,
        transform: [{
            scale: 2
        }]
    },

});