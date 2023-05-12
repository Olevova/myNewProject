import {
    StyleSheet,
    View,
    Text
} from "react-native";
import MapView, { Marker } from "react-native-maps";


export const MapScreen = ({ route }) => {
    console.log(route.params.location.coords);
    const { latitude, longitude } = route.params.location.coords;
    console.log(latitude, longitude);
    return (
        <View style={styles.home}>
            <Text style={styles.textHome}>Map</Text>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922, 
          longitudeDelta: 0.0421, 
        }}
      >
        <Marker
          coordinate={{
            latitude, 
            longitude, 
          }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
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
        },
        map: {
    flex: 1,
  }
    }
)


