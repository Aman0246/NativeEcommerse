import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
export default function Order() {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
          navigation.replace("Main");
        }, 1300);
      }, []);
  return (
    <View style={{height:'100vh',width:'100vw',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:'1rem',fontWeight:'bold',color:'red'}}>Order Placed</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
