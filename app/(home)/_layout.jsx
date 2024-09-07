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
              <Text>Home</Text>
            </>),
        }}        
        />
        <Tabs.Screen
          name='profiles'
          options={{
            tabBarIcon: ()=>(
              <>
              <Text>Profiles</Text>
              </>
            )
          }}
        />
        <Tabs.Screen
          name='account'
          options={{
            tabBarIcon: ()=>(
              <>
              <Text>Account</Text>
              </>
            )
          }}
        />
    </Tabs>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})