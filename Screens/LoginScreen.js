import { useState } from "react";
import  {
  StyleSheet,
  View,
  TextInput,
  Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform
  
} from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
const date = {
    email: "",
    password: ""
}

const loadFonts = async () => {
  await Font.loadAsync({
    "Robot-Regular": require("../assets/fonts/Roboto-Regular.ttf")
  });
}

export const LoginScreen = () => {
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

    return (<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"}>
    <View style={styles.registration}>
           <Text style={styles.title}>Регистрация</Text>                
                <TextInput style={styles.input} textAlign={'left'} placeholder={'Адрес электронной почты'} placeholderTextColor={"#BDBDBD"} onChangeText={(text) => inputDateState((prevState) => ({ ...prevState, email: text }))} />
        <TextInput style={styles.input} textAlign={'left'} secureTextEntry={true} placeholder ={'Пароль'} placeholderTextColor={"#BDBDBD"} password onChangeText={(text) => inputDateState((prevState) => ({ ...prevState, password: text }))}/>
               <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={()=>keyBordHide()}>
                   <Text style={styles.btnTitle}>Войти</Text>
               </TouchableOpacity>  
        <Text style={styles.regtext}>Нет аккаунта? Зарегистрироваться</Text>
            </View> 
            </KeyboardAvoidingView>
       </TouchableWithoutFeedback>
    )
} 


const styles = StyleSheet.create({
    registration: {
        // flex: 1,
         backgroundColor:'#FFFFFF',
         borderTopLeftRadius: 20 ,
         borderTopRightRadius: 20 ,
         height:'65%',
        amarginTop: 'auto',

        

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
    marginBottom:16
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
        fontFamily: 'Robot-Regular',
        fontSize: 16,
        lineHeight: 19,
    },
    regtext: {
        textAlign: "center",
       marginTop:16, 
    }
}
)