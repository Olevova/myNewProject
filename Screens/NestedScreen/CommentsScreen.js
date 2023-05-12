import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity, 
    SafeAreaView,
    FlatList,
    StatusBar
} from "react-native";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { db } from '../../firebase/config';
import { addDoc, collection, doc, getDocs } from "firebase/firestore"; 



export const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const { login } = useSelector((state) => state.auth);
  const [newComment, setNewComment] = useState(""); // Зміна назви стану comments на newComment
  const [allComments, setAllComments] = useState([]);

  const uploadComments = async () => {
    try {
      const docRef = doc(collection(db, "posts"), postId);
      await addDoc(collection(docRef, "comments"), {
        comments: newComment,
        login,
      });

      console.log("Documment create: ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const getAllPostsComments = async () => {
      try {
        const docRef = doc(collection(db, "posts"), postId);
        const commentsSnapshot = await getDocs(collection(docRef, "comments"));
        const commentsAll = commentsSnapshot.docs.map((commentDoc) => ({
          ...commentDoc.data(),
          id: commentDoc.id,
        }));
        // console.log(commentsAll);
        setAllComments(commentsAll)
        
      } catch (error) {
        console.log(error.message);
      }
    };

    getAllPostsComments();
  }, []);

  return (
    <>
      <View style={styles.home}>
        <Text style={styles.textHome}>Common</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: "black" }}>{item.comments}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
        <View style={styles.load}>
                <TextInput onChangeText={setNewComment} style={styles.input} textAlign={'left'} placeholder={'Comments'}  />
                 <TouchableOpacity style={styles.containerLoad} onPress={()=>uploadComments()}>
                    <Text style={styles.textsnap}>LOAD</Text>
                </TouchableOpacity>
            </View>
        </>
    )
};

const styles = StyleSheet.create(
  {
    home: {
      flex: 1,
      fontSize: 40,
      backgroundColor: "teal",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    textHome: {
      margin: "auto",
      textAlign: 'center',
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
      borderWidth: 1,
      // borderRadius: 8,
      // borderColor: '#E8E8E8',
      height: 30,
      paddingBottom: 3,
      paddingTop: 3,
      paddingLeft: 10,
      marginBottom: 16,
      marginTop: 16,
      borderBottomColor: "#e25241",
      marginHorizontal: 5,
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  }
)
