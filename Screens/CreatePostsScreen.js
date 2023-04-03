import {
    StyleSheet,
    View,
    Text,
    Touchable,
    Image,

} from "react-native";
import React, { useState } from "react";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";


export const CreatePostsScreen = () => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null)
    
    const takePhoto = async () => {
        const photoCamera = await camera.takePictureAsync();
        setPhoto(photoCamera.uri);
        console.log(photoCamera);
    }

    return (
        <View style={styles.home}>
            <Camera style={styles.camerastyle} ref={setCamera}>
                {photo && (<View style={styles.takePhotoContainer}>
                             <Image source={{ uri: photo }} style={{ height: 200, width: 200 }} />
                        </View>)}
                <TouchableOpacity onPress={takePhoto} style={styles.containercamera}>
                    <Text style={styles.textsnap}>SNAP</Text>
                </TouchableOpacity>
            </Camera>
            {/* <Text style={styles.textHome}>CreatePostsScreen</Text> */}
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
        textsnap: {
            // margin: "auto",
            
            color:'#fff'
            // textAlign: 'center',
        },
        camerastyle:{
            // height: 300,
            flex:1,
            marginTop: 30, 
            justifyContent: 'flex-end',
            alignItems: 'center',
            
        },
        containercamera:{
            borderWidth: 1,
    borderColor: "#ffff00",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,

        },
        takePhotoContainer: {
            position: "absolute",
            top: 0,
            left: 0,
            borderColor: '#fff',
            borderWidth: 1,
            // height: 200,
            // width:200
        }

    }
)