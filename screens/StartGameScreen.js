import React, { useState } from "react";
import {View, Text, StyleSheet, Button, Touchable, TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from '../constants/defalt-styles';
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue]= useState('');
    const [Confirmed, setConfirmed] = useState(false);
    const [SelectedNumber, setSelectedNumber] = useState();



    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    };


    const ConfirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        };
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (Confirmed) {
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
           <Text>You Selected</Text>
           <NumberContainer>{SelectedNumber}</NumberContainer>
           <MainButton onPress={() => props.onStartGame(SelectedNumber)}>
                START GAME
            </MainButton>
        </Card>
        );
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
               <Text style={DefaultStyles.bodyText}>Select a Number</Text> 
               <Input
                style={styles.input} 
                blurOnSubmit autoCapitalize='none'
                autoCorrect={false}
                keyboredType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
                 />

               <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                <View style={styles.button}><Button title="Confirm" onPress={ConfirmInputHandler} color={Colors.primary} /></View>
               </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({ 
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: { 
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width:100
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
});

export default StartGameScreen;
