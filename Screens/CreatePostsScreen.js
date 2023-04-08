import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput

} from "react-native";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from 'expo-location';
// import { TouchableOpacity } from "react-native-gesture-handler";
const pictureDate = {
    pictureName: "",
    pictureLocation: ""
}

export const CreatePostsScreen = ({navigation}) => {
    const [photo, setPhoto] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [location, setLocation] = useState(null);
    const [inputData, inputDateState] = useState(pictureDate);
    const [changemargin, changemarginState] = useState(false);

    useEffect(() => {
        (async () => {
            console.log(type, 1, photo);
            setPhoto(null);
            const { status } = await Camera.requestCameraPermissionsAsync();
            const data = await Location.requestForegroundPermissionsAsync();
            console.log(data.status);
        setHasPermission(status === "granted");
    })();
    }, []);

    // console.log(navigation);

    if (hasPermission === null) {
            return <View />;
        }
    if (hasPermission === false) {
    return <Text>No access to camera</Text>;
        }
    
    function toggleCameraType() {
        // console.log("click");
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    const takePhoto = async () => {
        if (cameraRef) {
            const data = await cameraRef.takePictureAsync();
            console.log(data.uri);
            setPhoto(data.uri);
        //     const { status } = await Location.requestForegroundPermissionsAsync();
        // if (status === 'granted') {
            
    //   }a
           
        }
         const locationPhoto = await Location.getCurrentPositionAsync();
            setLocation(locationPhoto);
            console.log(location);
            // await MediaLibrary.createAssetAsync(uri);
    }

    const sendPhoto = async () => {
        await navigation.navigate("DefaultScreenPosts", { photo })
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
                <TextInput value={inputData.pictureName} style={styles.input} textAlign={'left'} placeholder={'Name'} placeholderTextColor={"#73564a"} autoFocus={true} onFocus={()=>changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState, pictureName:text}))} />
                <TextInput value={inputData.pictureLocation} style={styles.input} textAlign={'left'} placeholder={'Location'} placeholderTextColor={"#73564a"} onFocus={() => changemarginState(true) } onChangeText ={(text)=>inputDateState((prevState)=>({...prevState,pictureLocation:text}))}/>
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
            height: '60%',
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
            width:'90%',
            marginHorizontal:5,
            
        },
    load: {
            alignItems: "center"
        },
        input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    width: "90%",
    color: '#73564a',
            backgroundColor: '#009688',
    borderWidth:1,
    // borderRadius: 8,
    // borderColor: '#E8E8E8',
    height: 30,
    paddingBottom:3,
    paddingTop:3,
    paddingLeft:10,
    marginBottom: 16,
    marginTop: 16,
    borderBottomColor:"#e25241",
    marginHorizontal: 5,
    },

    }
)