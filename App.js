import React, { useState } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard, 
  Platform,
} from "react-native";
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from "./Screens/LoginScreen";





export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  const [isReady, setIsReady] = useState(false);


  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        

        <ImageBackground style={styles.image} source={require('./assets/image/PhotoBG.jpg')}>
      
       {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}> */}
              <RegistrationScreen styles={styles.registerBlock } />
        {/* </KeyboardAvoidingView> */}
       
        </ImageBackground>
        
        </View>
        </TouchableWithoutFeedback>
        
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingBottom: 30
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems:"center"
  },
  // registerBlock: {
  //   display: "flex",
  //   justifyContent: "flex-end"
  // }
  // input: {
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   marginHorizontal: 10,
  //   borderRadius: 15, 
  //   color: 'white',
  //   backgroundColor:'black'
    
  // },
  // title: {
  //   color: 'white'
    
  // }
});