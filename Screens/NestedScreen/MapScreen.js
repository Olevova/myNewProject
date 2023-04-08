import {
    StyleSheet,
    View,
    Text
} from "react-native";


export const MapScreen = () => {
    return (
        <View style={styles.home}>
            <Text style={styles.textHome}>Map</Text>
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


