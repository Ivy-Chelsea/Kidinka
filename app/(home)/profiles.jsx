import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { users } from '../../api/user'
import UserProfile from '../../components/UserCard'

const Users1 = () => {
  return (
    <View>
      <FlatList data={users} renderItem={(({item})=>(<UserProfile user={item} />))}/>
    </View>
  )
}

export default Users1

const styles = StyleSheet.create({})