import { useState, useCallback } from "react";
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

const date = {
    email: "",
    password: ""
}


export const LoginScreen = ({navigation }) => {
    const [inputDate, inputDateState] = useState(date);
    console.log(navigation);
    const keyBordHide = () => {
        Keyboard.dismiss();
        console.log(inputDate);
        inputDateState(date);
    }

    return (<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
       <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"}>
    <View style={styles.registration}>
           <Text style={styles.title}>Вхід</Text>                
                <TextInput style={styles.input} textAlign={'left'} placeholder={'Адрес электронной почты'} placeholderTextColor={"#BDBDBD"} onChangeText={(text) => inputDateState((prevState) => ({ ...prevState, email: text }))} />
        <TextInput style={styles.input} textAlign={'left'} secureTextEntry={true} placeholder ={'Пароль'} placeholderTextColor={"#BDBDBD"} password onChangeText={(text) => inputDateState((prevState) => ({ ...prevState, password: text }))}/>
               <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={()=>keyBordHide()}>
                   <Text style={styles.btnTitle}>Війти</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={()=>navigation.navigate('Registartion')}>
        <Text style={styles.regtext}>Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity >
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
        fontFamily: 'Roboto-Regular',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        placeholderTextColor: "#BDBDBD",
        marginBottom: 33,
        marginTop:92,
    },
    input: {
    fontFamily: 'Roboto-Regular',
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
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
    },
    regtext: {
        textAlign: "center",
       marginTop:16, 
    }
}
)