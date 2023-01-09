import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from "expo-app-loading"
import {useFonts} from "expo-font"
import Welcome from './src/screen/Welcome';

export default function App() {
  let [fontLoaded] = useFonts({
    "Lato-Bold" : require("./src/assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular" : require("./src/assets/fonts/Lato-Regular.ttf")
  })

  if(!fontLoaded){
    return <AppLoading/>
  }
  return (
    <Welcome/>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
