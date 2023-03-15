import  {
  StyleSheet,
  View,
  TextInput,
  Text,
    TouchableOpacity,
    Keyboard
  
} from "react-native";
import React, { useState } from "react";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
const date = {
    login: "",
    email: "",
    password: ""
}

const loadFonts = async () => {
  await Font.loadAsync({
    "Robot-Regular": require("../assets/fonts/Roboto-Regular.ttf")
  });
}


export const RegistrationScreen = () => {
    const [changemargin, changemarginState] = useState(false);
    const [inputDate, inputDateState] = useState(date);
    
    const keyBordHide = () => {
        Keyboard.dismiss();
        console.log(inputDate);
        inputDateState(date);
    }
        if (!isReady) {
        return( <AppLoading
    startAsync={loadFonts}
    onFinish={() => setIsReady(true)}
    onError={console.warn} />)
}

    return (
    <View style={styles.registration}>
           <Text style={styles.title}>Регистрация</Text>                
            <TextInput value={inputDate.login} style={styles.input} textAlign={'left'} placeholder={'Логин'} placeholderTextColor={"#BDBDBD"} autoFocus={true} onFocus={()=>changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState, login:text}))} />
            <TextInput value={inputDate.email} style={styles.input} textAlign={'left'} placeholder={'Адрес электронной почты'} placeholderTextColor={"#BDBDBD"} onFocus={() => changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState,email:text}))}/>
            <TextInput value={inputDate.password} style={styles.input} textAlign={'left'} secureTextEntry={true} placeholder={'Пароль'} placeholderTextColor={"#BDBDBD"} password onFocus={() =>  changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState,password:text}))}/>
               <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress ={()=>keyBordHide()}>
                   <Text style={styles.btnTitle}>Зарегистрироваться</Text>
               </TouchableOpacity>  
            <Text style={{ ...styles.regtext, marginBottom: changemargin ? 66 : 66  }}>Уже есть аккаунт? Войти</Text>
    </View> 
        
    )
} 


const styles = StyleSheet.create({
    registration: {
        
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius: 20 ,
        borderTopRightRadius: 20 ,
        // miHheight:'65%',
        marginTop: 'auto',

    },
    title: {
        fontFamily: 'Robot-Regular',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        placeholderTextColor: "#BDBDBD",
        marginBottom: 33,
        marginTop:92,
    },
    input: {
    fontFamily: 'Robot-Regular',
    fontSize: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    color: '#BDBDBD',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: ' #E8E8E8',
    height:50,
    paddingBottom:16,
    paddingTop:16,
    paddingLeft:16,
    marginBottom: 16,
    
    },
    
    btn:{
        backgroundColor: '#FF6C00',
        height: 50,
        marginHorizontal: 16,
        borderRadius: 100,
        marginTop: 43,
        justifyContent: "center",
        alignItems: "center",
    },
    btnTitle:{
        color: '#FFFFFF',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
    },
    regtext: {
        textAlign: "center",
        marginTop: 16, 
        marginBottom: 66
    }
}
)

