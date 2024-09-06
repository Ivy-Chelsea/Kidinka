import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const index = () => {
  return (
    <View style={styles.container}>
      <View>          
          <Link href='/home'>
            <Text style={styles.link}> kidinka</Text>
            
            <View style={{
              width: 10,
              height: 10,
              backgroundColor:'white',
              borderRadius: 5
            }}/>
          </Link>     
        </View>      
    </View>
  );
};

export default index;

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
