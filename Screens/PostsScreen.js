import React from "react";
// import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {MapScreen} from "./NestedScreen/MapScreen";
import {DefaultScreenPosts} from './NestedScreen/DefaultScreenPosts';
import {CommentsScreen} from './NestedScreen/CommentsScreen';



const NestedScreen = createStackNavigator();

export const PostsScreen = () => {
    return (<NestedScreen.Navigator>
        <NestedScreen.Screen name='DefaultScreenPosts' component={DefaultScreenPosts } />
        <NestedScreen.Screen name='MapScreen' component={MapScreen} /> 
        <NestedScreen.Screen name='CommentsScreen' component={CommentsScreen}/> 
    </NestedScreen.Navigator>)
};

