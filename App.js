import React, {useState ,useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [useNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);


  const [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/OpenSansBold.ttf'),
    'OpenSansRegular': require('./assets/fonts/OpenSansRegular.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const StartGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={StartGameHandler} />;

  if (useNumber&& guessRounds <= 0) {
    content = <GameScreen userChoice={useNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} useNumber={useNumber} onRestart={configureNewGameHandler}/>;
  }

  return (
    <View style={styles.screen} onLayout={onLayoutRootView} >
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex:1
    }
});

