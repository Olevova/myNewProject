import {
    StyleSheet,
    View,
    Text,
    Button
} from "react-native";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
// import { app } from '../firebase/config';
// const auth = getAuth(app);
import { authSignOutUser } from '../redux/auth/authOperation';
import { useDispatch } from "react-redux";


export const ProfileScreen = () => {
    const dispatch = useDispatch();
    const signOut = ()=> dispatch(authSignOutUser())
    return (
        <View style={styles.home}>
            <Text style={styles.textHome}>ProfileScreen</Text>
            <Button title="SignOut" onPress={signOut}/>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        home: {
            flex:1,
            fontSize: 40,
            backgroundColor: "teal",
            borderTopLeftRadius: 20 ,
            borderTopRightRadius: 20 ,
        },
        textHome: {
            margin: "auto",
            textAlign: 'center',
        }
    }
)