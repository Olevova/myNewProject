import React,{ useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    FlatList
} from "react-native";




export const DefaultScreenPosts = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        if (route.params) {
            console.log(route.params, 22, navigation, 33);
            setPosts((prevState) => [...prevState, route.params]);
        }
    }, [route.params])
    
    return (
        <View style={styles.home}>
            <FlatList 
                data={posts}
                keyExtractor={(i, indx) => { console.log(indx.toString());return indx.toString() }}
                renderItem={({item}) =>(<View style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
            }}>
                        
                    <Image source={{ uri: item.photo }} style={{ width: 200, height: 200 }} />
                    {item.inputData.pictureName &&
                       (<View>
                        <Text>{item.inputData.pictureName}</Text>
                        </View>)}
                     {item.inputData.pictureLocation &&
                       (<View>
                        <Text>{item.inputData.pictureLocation}</Text>
                        </View>)}
                </View>)}
            />
            <Button title="go to map" onPress={() => navigation.navigate('MapScreen')} />
            <Button title="go to comment" onPress={()=>navigation.navigate('CommentsScreen')}/>
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