import  {
  StyleSheet,
  View,
  TextInput,
  Text,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
  
} from "react-native";
import React, { useState, useCallback } from "react";


const date = {
    login: "",
    email: "",
    password: ""
}


export const RegistrationScreen = ({ navigation }) => {
    console.log(navigation);
    const [inputDate, inputDateState] = useState(date);
    const keyBordHide = () => {
        Keyboard.dismiss();
        console.log(inputDate);
        inputDateState(date);
    };
    const [changemargin, changemarginState] = useState(false);

    return (<>
       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container} >
          <ImageBackground style={styles.image} source={require('../assets/image/fr.jpg')}>
        <View style={styles.registration}>
           <Text style={styles.title}>Регистрация</Text>                
            <TextInput value={inputDate.login} style={styles.input} textAlign={'left'} placeholder={'Логин'} placeholderTextColor={"#BDBDBD"} autoFocus={true} onFocus={()=>changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState, login:text}))} />
            <TextInput value={inputDate.email} style={styles.input} textAlign={'left'} placeholder={'Адрес электронной почты'} placeholderTextColor={"#BDBDBD"} onFocus={() => changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState,email:text}))}/>
            <TextInput value={inputDate.password} style={styles.input} textAlign={'left'} secureTextEntry={true} placeholder={'Пароль'} placeholderTextColor={"#BDBDBD"} password onFocus={() =>  changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState,password:text}))}/>
               <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress ={()=>keyBordHide()}>
                   <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity> 
               <TouchableOpacity onPress={()=>navigation.navigate('Login')}>         
            <Text style={{ ...styles.regtext, marginBottom: changemargin ? 66 : 66  }}>Уже есть аккаунт? Войти</Text>
                    </TouchableOpacity>
                    </View> 
                    </ImageBackground>
        </View>
      </TouchableWithoutFeedback> 
        </>
        
    )
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
    registration: {
        
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius: 20 ,
        borderTopRightRadius: 20 ,
        // miHheight:'65%',
        marginTop: 'auto',

    },
    title: {
        fontFamily:'Roboto-Regular',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        placeholderTextColor: "#BDBDBD",
        marginBottom: 33,
        marginTop:92,
    },
    input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    color: '#BDBDBD',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    // borderColor: '#E8E8E8',
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

//     const [fontsLoaded] = useFonts({
//         "Robot-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
//         "EduNSWACTFoundation-Bold": require("../assets/fonts/EduNSWACTFoundation-Bold.ttf")
//     });
    
//     const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//     }, [fontsLoaded]);
    

//     const [changemargin, changemarginState] = useState(false);
//     const [inputDate, inputDateState] = useState(date);
//     const keyBordHide = () => {
//         Keyboard.dismiss();
//         console.log(inputDate);
//         inputDateState(date);
//     }

// if (!fontsLoaded) {
//         return null
// }