import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screen/HomeScreen';
import FindFriendScreen from '../Screen/FindFriendScreen';
import WathScreen from '../Screen/WathScreen';
import MarketPlaceScreen from '../Screen/MarketPlaceScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { Entypo,Ionicons, MaterialCommunityIcons,} from 'react-native-vector-icons';


const Top = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
   
      <Top.Navigator>
        <Top.Screen name='HomeScreen' component={HomeScreen} options={{
          tabBarShowLabel:false,
          tabBarIcon:()=>(
            <Entypo name='home' size={25} />
          ),
          tabBarActiveTintColor:"#1877F2",
        }} />
        <Top.Screen name='FindFriendScreen' component={FindFriendScreen} options={{
          tabBarShowLabel:false,
          tabBarIcon:()=>(
            <Ionicons
            name='people-outline' size={25} />
          ),
          tabBarActiveTintColor:"#1877F2",
        }}  />
        <Top.Screen name='WathScreen' component={WathScreen} options={{
          tabBarShowLabel:false,
          tabBarIcon:()=>(
            <MaterialCommunityIcons name='youtube-tv'  size={25} />
          ),
          tabBarActiveTintColor:"#1877F2",
        }}   />
        <Top.Screen name='MarketPlaceScreen' component={MarketPlaceScreen} options={{
          tabBarShowLabel:false,
          tabBarIcon:()=>(
            <MaterialCommunityIcons name='storefront-outline'  size={25} />
          ),
          tabBarActiveTintColor:"#1877F2",
        }} />
        <Top.Screen name='NotificationScreen' component={NotificationScreen} options={{
          tabBarShowLabel:false,
          tabBarIcon:()=>(
            <Ionicons name='notifications-outline'  size={25} />
          ),
          tabBarActiveTintColor:"#1877F2",
        }} />
        <Top.Screen name='ProfileScreen' component={ProfileScreen} options={{
          tabBarShowLabel:false,
          tabBarIcon:()=>(
            <Ionicons name='person-outline'  size={25} />
          ),
          tabBarActiveTintColor:"#1877F2",
        }} />
      </Top.Navigator>
  )
}

export default TopTabNavigation;