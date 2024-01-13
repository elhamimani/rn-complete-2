import React from "react";
import { View, Text, StyleSheet, Button,Image} from "react-native";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <View style={styles.imageContainer}>
            <Image
           
            // source={require('../assets/success.png') }
           source={{uri:'https://www.soorban.com/images/news/2022/04/1649570382_V1yV1.jpg'}}
            style={styles.image}
            resizeMode="cover"
             />
            </View>

            <View style={styles.resultContainer}>
            <Text style={styles.highlight}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={styles.highlight}>Number was: {props.useNumber}</Text>
            </View>

            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
              
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
       marginHorizontal: 30,
       marginVertical: 15,
    },
    highlight: {
       color: colors.primary,
       fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;



