import React,{ useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from "react-native";


export const PostsScreen = ({ route }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params]);
        }
    }, [route.params])
    console.log(posts);
    
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
                        <Image source={{ uri: item.photo }} style={{width:200, height:200}} />
                    </View>)}
            />
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