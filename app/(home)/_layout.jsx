import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const HomeLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel:false,
      tabBarHideOnKeyboard: true,
    }}>
        <Tabs.Screen 
        name='home' 
        options={{
            headerShadowVisible:false,
            headerShown: true,
            headerRight:()=>(
              <Text>Icon</Text>
            ),
            title:'kidinka.',
            headerTitleStyle:{
              fontSize:30,
              color:'red',
              fontWeight:'800'
            },
            tabBarIcon: ()=>(<>
            </>),
        }}        
        />
        <Tabs.Screen
          name='account'
          options={{
            tabBarIcon: ()=>(
              <>
              </>
            )
          }}
        />
    </Tabs>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})