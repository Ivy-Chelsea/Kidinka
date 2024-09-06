import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React from 'react'
import { SplashScreen } from 'expo-router'

const Home = () => {
  const dim = useWindowDimensions()
  console.log(dim.width)
  SplashScreen.preventAutoHideAsync()
  return (
    <View style={{
      padding:15
    }}>      
    <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})