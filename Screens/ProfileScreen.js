import {
    StyleSheet,
    View,
    Text
} from "react-native";


export const ProfileScreen = ({navigation }) => {
    return (
        <View style={styles.home}>
            <Text style={styles.textHome}>ProfileScreen</Text>
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