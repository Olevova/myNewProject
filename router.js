import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  {RegistrationScreen}  from './Screens/RegistrationScreen';
import { LoginScreen } from "./Screens/LoginScreen";
import { Home } from "./Screens/Home";
import { PostsScreen } from "./Screens/PostsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import {
  Button
} from "react-native";
const MainStack = createStackNavigator();
const HomeStac = createBottomTabNavigator();

import { MaterialCommunityIcons, AntDesign , Ionicons  } from '@expo/vector-icons';

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return <MainStack.Navigator>
      <MainStack.Screen options={{ headerShown: false }} name='Registartion' component={RegistrationScreen} />
      <MainStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
    </MainStack.Navigator>
  }
  return (<HomeStac.Navigator tabBarOptions={{tabBarShowLabel:false}}>
      <HomeStac.Screen name='Posts' component={PostsScreen}
      options= {
        {headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
          },
          headerRight: () => <Button
                onPress={() => alert("This is a button!")}
                title="Log out"
                color="#fff"
              />, tabBarIcon: ({ focused, size, color }) => <MaterialCommunityIcons name="postage-stamp" size={size} color={color} /> }
          } />
      <HomeStac.Screen name='Profile' component={ProfileScreen}
      options={{tabBarIcon:({focused, size, color})=><AntDesign name="profile" size={size} color={color} />}} />
      <HomeStac.Screen name='CreatePost' component={CreatePostsScreen}
      options={{tabBarIcon:({focused, size, color})=><Ionicons name="create" size={size} color={color} />}}/>
  </HomeStac.Navigator>)
}
