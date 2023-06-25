import React from "react";
import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
import { Login } from "../Screens/Login";
import { Signup } from "../Screens/Signup";
import Icon from "react-native-ico-material-design";
//import Ionicons from "react-native-vector-icons/Ionicons";
//import { Feather } from '@expo/vector-icons';
//import "react-native-gesture-handler";

const Tab = createBottomTabNavigator()

 function Tabs ({navigation}) {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'login-sharp' : 'login-outline';
          } else if (route.name === 'Signup') {
            iconName = focused ? 'login-sharp' : 'login-outline';
          }
          
          return <Ionicons name="home" size={24} color="black"  />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          backgroundColor:'lightblue',
          height:55
             },
      })}
     >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Tab.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        </Tab.Navigator>
        // screenOptions={{
        //     tabBarActiveTintColor:'tomato',
        //     tabBarInactiveTintColor:'gray',
        //     tabBarStyle:{
        //         backgroundColor:'lightblue'
        //     },
        //     headerTitleStyle:{
        //         fontWeight:'bold',
        //         fontSize:25,
        //         color:'tomato'
        //     }
        // }}
        // >
        //     <Tab.Screen name={'Home'} component={Home} options={{
        //         tabBarIcon:({focused}) <MaterialIcons name ="home" size={24} color="black" />
        //     }}/>

        
    )
}