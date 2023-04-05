import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity

} from "react-native";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
// import { TouchableOpacity } from "react-native-gesture-handler";


export const CreatePostsScreen = ({navigation}) => {
    const [photo, setPhoto] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    
    useEffect(() => {
        (async () => {
            console.log(type, 1, photo);
            setPhoto(null);
        const { status } = await Camera.requestCameraPermissionsAsync();
        console.log(status);
        // await MediaLibrary.requestPermissionsAsync();

        setHasPermission(status === "granted");
    })();
    }, []);

    console.log(navigation);

    if (hasPermission === null) {
            return <View />;
        }
    if (hasPermission === false) {
    return <Text>No access to camera</Text>;
        }
    
    function toggleCameraType() {
        console.log("click");
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    const takePhoto = async () => {
        if (cameraRef) {
            // console.log(cameraRef.takePictureAsync());
            const data = await cameraRef.takePictureAsync();
            console.log(data.uri);
            setPhoto(data.uri)
        }
            // await MediaLibrary.createAssetAsync(uri);
    }

    const sendPhoto = async () => {
        await navigation.navigate("Posts", { photo })
        setPhoto(null);
    }
    return (
        <View style={styles.home}>
            <Camera style={styles.camerastyle}
                type={type}
                ref={ref => setCameraRef(ref)}
            >
                <TouchableOpacity
                    style={styles.flipContainer}
                    onPress={toggleCameraType}
                >
                <Text style={{ fontSize: 18, marginBottom: 10, color: "#ffff" }}>
                    {" "}
                    Flip Camera{" "}
                </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.containercamera} onPress={()=>takePhoto()}>
                    <Text style={styles.textsnap}>SNAP</Text>
                </TouchableOpacity>
                {photo && (<View style={styles.takePhotoContainer}>
                                <Image source={{ uri : photo }} style={{ height: 200, width: 200 }} />
                            </View>)}
            </Camera>
            <View style={styles.load}>
                 <TouchableOpacity style={styles.containerLoad} onPress={()=>sendPhoto()}>
                    <Text style={styles.textsnap}>LOAD</Text>
                </TouchableOpacity>
            </View>
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
        flipContainer: {
            flex: 0.2,
            alignSelf: "flex-end",
         },
        textsnap: {
            // margin: "auto",
            
            color:'#fff'
            // textAlign: 'center',
        },
        camerastyle:{
            height: '80%',
            marginTop: 20, 
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderRadius: 50,
            borderWidth:1,
            marginHorizontal:2,
            
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
        },
        containerLoad:{
            borderWidth: 1,
            borderColor: "#ffff00",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: 'center',
            height:40,
            marginTop: 20,
            width:200
            
        },
        load: {
            alignItems: "center"
        }

    }
)