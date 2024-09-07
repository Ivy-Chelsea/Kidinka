import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfilePage from '../../components/ProfilePage'
import {users} from '../../api/user'
/**
 * Renders the user account page.
 *
 * @returns {JSX.Element} The rendered user account page.
 */
export default function UserAccount() {
  const handleUpdateProfile = (updatedUser) => {
    Alert.alert('Profile Updated', `Profile for ${updatedUser.name} has been updated.`);
  };
  return (
    <View>
      <ProfilePage user={users[0]} onUpdateProfile={handleUpdateProfile} />
    </View>
  )
}

const styles = StyleSheet.create({})