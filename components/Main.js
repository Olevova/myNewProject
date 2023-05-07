import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {useDispatch, useSelector } from 'react-redux';
import { useRoute } from "../router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase/config';
import {authStateChangedUser} from "../redux/auth/authOperation"

// console.log(123444, app);

// const auth = getAuth(app);

const Main = () => {
  // const [user, setIsUser] = useState(null);
  const dispatch = useDispatch();

  
  // console.log("main");

  const {stateChange} = useSelector((state) => state.auth);
  console.log("this is state", stateChange);
  
  useEffect(() => {
    dispatch(authStateChangedUser());
  }, [authStateChangedUser]);
  
  const routing = useRoute(stateChange);

  // auth.onAuthStateChanged((user) => {
  //   setIsUser(user)
  //   console.log("user", user);
  // });

  return <NavigationContainer>
     {routing}
    </NavigationContainer>
};




export default Main;

  
// )