import React, { useState, useCallback, useEffect } from "react";
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import {
    StyleSheet,
    View
} from "react-native";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import { store } from "./redux/store";
import Main from "./components/Main";

console.log(Main);

export default function App() { 

const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "EduNSWACTFoundation-Bold": require("./assets/fonts/EduNSWACTFoundation-Bold.ttf")
    });
    
const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
}, [fontsLoaded]);
  // 
   
if (!fontsLoaded) {
        return null
}
  console.log("start");
  
  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView} >
        <Main />
      </View>
    </Provider>
  );
}

// style={styles.container}
const styles = StyleSheet.create({
  container: {
  flex: 1,
}});


// onLayout={onLayoutRootView}

 {/* <HomeStac.Navigator>
        <HomeStac.Screen name='Posts' component={PostsScreen} />
        <HomeStac.Screen name='Profile' component={ProfileScreen} />
        <HomeStac.Screen name='CreatePost' component={CreatePostsScreen} />
      </HomeStac.Navigator>
      {/* <MainStack.Navigator>
        <MainStack.Screen options={{headerShown: false}} name='Registartion' component={RegistrationScreen}/>
        <MainStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
    </MainStack.Navigator>   */} 