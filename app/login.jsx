import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { Link } from "expo-router";
import { Button } from "react-native-web";
  const login = () => {
    return (
      <View style={{backgroundColor:'#ff0011', flex: 1 }}>
              <TouchableOpacity onpress={()=>{console.log('login')}}>
              <Text style={styles.link}>kidinka</Text>
                </TouchableOpacity>
              <View style={{
                width: 10,
                height: 10,
                backgroundColor:'white',
                borderRadius: 5

              }}/>
      </View>
    );
  };
  
  export default login;
  
  const styles = StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "#FF0000",
    },
    link: {
      fontSize:50,
      color:'white',
      fontWeight:'800'
    },
  });
  