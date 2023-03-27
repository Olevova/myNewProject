import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import { useRoute } from "./router";





export default function App() {
    const routing = useRoute(2);
     const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "EduNSWACTFoundation-Bold": require("./assets/fonts/EduNSWACTFoundation-Bold.ttf")
    });
    
    const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);
  

   
if (!fontsLoaded) {
        return null
}


  return (
    <NavigationContainer onLayout={onLayoutRootView}>
     {routing}
    </NavigationContainer>
  );
}


 {/* <HomeStac.Navigator>
        <HomeStac.Screen name='Posts' component={PostsScreen} />
        <HomeStac.Screen name='Profile' component={ProfileScreen} />
        <HomeStac.Screen name='CreatePost' component={CreatePostsScreen} />
      </HomeStac.Navigator>
      {/* <MainStack.Navigator>
        <MainStack.Screen options={{headerShown: false}} name='Registartion' component={RegistrationScreen}/>
        <MainStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
    </MainStack.Navigator>   */} 