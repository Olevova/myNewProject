import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
// import { app } from '../firebase/config';
// const auth = getAuth(app);
import { authSignOutUser } from '../redux/auth/authOperation';
import { useDispatch,useSelector} from "react-redux";
import React,{ useEffect, useState } from "react";
import { db } from '../firebase/config';
import { collection,query, where, getDocs  } from "firebase/firestore";


export const ProfileScreen = () => {
    const { userId: userInId } = useSelector(state => state.auth);
    console.log(userInId, "userInId");
    const dispatch = useDispatch();
    const signOut = () => dispatch(authSignOutUser());
    const [postCollectionByUser, setpostCollectionByUser] = useState([])
    const getUsersPosts = async () => {
        try {
            const postCollections = await query((collection(db, 'posts')), where('userId', "==", userInId));
            // console.log(postCollections);
            const querySnapshot = await getDocs(postCollections);
         const fetchPostColl =   querySnapshot.docs.map((doc) =>
              ({
             ...doc.data(),
                id: doc.id,
              })
            );
            // console.log(fetchPostColl, 'postCollectionByUser22'); 
            setpostCollectionByUser(fetchPostColl);
            // console.log(postCollectionByUser, "22");

        } catch (error) {
            console.log(error.message);
        }
        
        
    }

    useEffect(() => {
        getUsersPosts(),
         console.log(postCollectionByUser, 'postCollectionByUser666');   
        }, [])
    
    
    return (
        <View style={styles.home}>
            <Text style={styles.textHome}>ProfileScreen</Text>
            <Button title="SignOut" onPress={signOut} />
            <FlatList 
                data={postCollectionByUser}
                keyExtractor={(item) => {item.id}}
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