import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfilePage from '../../components/ProfilePage'
import {users} from '../../api/user'
export default function UserAccount() {
  const handleUpdateProfile = (updatedUser) => {
    // Replace this with your update logic
    Alert.alert('Profile Updated', `Profile for ${updatedUser.name} has been updated.`);
  };
  return (
    <View>
      <ProfilePage user={users[0]} onUpdateProfile={handleUpdateProfile} />
    </View>
  )
}

const styles = StyleSheet.create({})