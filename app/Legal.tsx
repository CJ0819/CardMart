import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Legal() {
  return (
    <View style={{marginLeft:20, marginTop:20}}>
      <TouchableOpacity onPress={()=> router.push ('/about')}
       style={{flexDirection:"row", alignItems:"center", borderTopWidth:1, width:"90%", borderBottomWidth:1,height:60}}>
        <Text style={{fontSize:20, marginRight:180}}>About CardMart</Text>
        <Ionicons name="chevron-forward-outline" size={30} color={"green"}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> router.push ('/privacy')}
       style={{flexDirection:"row", alignItems:"center", width:"90%", borderBottomWidth:1,height:60}}>
        <Text style={{fontSize:20, marginRight:200}}>Privacy Policy</Text>
                <Ionicons name="chevron-forward-outline" size={30} color={"green"}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> router.push ('/terms')}
       style={{flexDirection:"row", alignItems:"center" , width:"90%", borderBottomWidth:1,height:60}}>
        <Text style={{fontSize:20, marginRight:130}}>Terms and Conditions</Text>
                <Ionicons name="chevron-forward-outline" size={30} color={"green"}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})