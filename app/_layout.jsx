import { View, Text, Image, TouchableNativeFeedback, ImageBackground } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

/**
 * IndexLayout component.
 *
 * @returns {JSX.Element} The rendered IndexLayout component.
 */
const IndexLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index' options={{
            headerShown:false,
            headerTitle:'kidinka',
            headerShadowVisible:false,
            headerTintColor:'white',
            headerSearchBarOptions:{
                textColor:'white',
                inputType:'text',
                headerIconColor:'white',
                placeholder:'search...',
                hideWhenScrolling:false,
                hintTextColor:'whitesmoke',
                
            },
            headerTitleStyle:{
                fontWeight:'900'
            },
            headerLeft:()=>(
                <></>
        ),
            headerTitleAlign:'center',
            headerTransparent:true
        }}/>
    </Stack>
  )
}

export default IndexLayout