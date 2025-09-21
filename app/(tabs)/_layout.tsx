import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from "react-native";

const Tablayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown:true,
      headerStyle:{
        backgroundColor:"green",
      },
       headerTitleStyle: {
      fontSize: 20,       
      fontWeight: "bold", 
       
    },
      headerLeft:() =>(
        <Image source={require("../../assets/images/iconCM.png")}  style={{ width: 100, height: 40, resizeMode: "contain", }}/>
      ),

      headerTintColor:"white",
        tabBarActiveTintColor:'green',
        tabBarStyle: {
          backgroundColor: '#34343C', 
          paddingTop: 10,
          borderTopColor:'green',
          borderTopWidth: 2,
          borderRadius: 35,
          marginBottom:30,
          width:"90%",
          alignSelf:'center',
          shadowOffset: {width:0, height: 10},
          shadowRadius:10,
          shadowOpacity:0.2,
          shadowColor:"green",
          elevation:5,
        },
    }}>
        <Tabs.Screen
        name="index"
        options={{
            title:"Shop",
            tabBarIcon: ({ color }) => <Ionicons size={28} name="bag-handle-outline" color={color} />,
        }}
        />
         <Tabs.Screen
        name="Deals"
        options={{
            title:"Deals",
            tabBarIcon: ({ color }) => <Ionicons size={28} name="megaphone-outline" color={color} />,
        }}
        />
         <Tabs.Screen
        name="Profile"
        options={{
            title:"Profile",
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person-circle-outline" color={color} />,
        }}
        />
    </Tabs>
  )
}

export default Tablayout