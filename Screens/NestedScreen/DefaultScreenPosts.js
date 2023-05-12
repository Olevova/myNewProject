import React,{ useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";
import { MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons';


export const DefaultScreenPosts = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    const getAllPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
          const fetchedPosts = querySnapshot.docs.map((doc) =>
              ({
                  id: doc.id,
                  ...doc.data(),
              })
          );
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

        getAllPosts();
        
  }, []);
    
  // console.log(posts, "postsTwo");
  
  const IconButtonMap = ({ title, onPress, iconName, iconSize, iconColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", backgroundColor:"blue" }}>
      <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
      <Text>{title}</Text>
    </TouchableOpacity>
      );
    
    };
    
    const IconButtonComments = ({ title, onPress, iconName, iconSize, iconColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", backgroundColor:"blue" }}>
      <FontAwesome name={iconName} size={iconSize} color={iconColor} />
      <Text>{title}</Text>
    </TouchableOpacity>
      );
    
    };

    
    return (
        <View style={styles.home}>
            <FlatList 
                data={posts}
                keyExtractor={(item) => {item.id }}
                renderItem={({item}) =>(<View style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
            }}>
                        
            <Image source={{ uri: item.photo }} style={{ width: 200, height: 200 }} />
                    {item.inputData?.pictureName &&
                       (<View>
                        <Text>{item.inputData.pictureName}</Text>
                        </View>)}
                     {item.inputData?.pictureLocation &&
                       (<View>
                        <Text>{item.inputData.pictureLocation}</Text>
                        </View>)}
                    <View>
                        <IconButtonMap
                        title="go to map"
                        onPress={() => navigation.navigate('MapScreen', {location: item.location})}
                        iconName="map-marker"
                        iconSize={24}
                        iconColor="white"
                        />
                        <IconButtonComments
                        title="go to comment"
                        onPress={() => navigation.navigate('CommentsScreen', {postId: item.id })}
                        iconName="comments"
                        iconSize={24}
                        iconColor="white"
                        />
                    </View>
                </View>)}
            />
            {/* <Button title="go to map" onPress={() => navigation.navigate('MapScreen')} />
            <Button title="go to comment" onPress={()=>navigation.navigate('CommentsScreen')}/> */}
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