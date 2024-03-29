import {
    StyleSheet,
    View,
    Text
} from "react-native";


export const Home = () => {
    return (
        <View style={styles.home}>
            <Text style={styles.textHome}>Home Page</Text>
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
            textAlign: 'center',
        }
    }
)