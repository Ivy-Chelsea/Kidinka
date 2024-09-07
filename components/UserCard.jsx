// import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserProfile = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://picsum.photos/300/300' }}
        style={styles.avatar}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.occupation}>{user.occupation}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.location}>{user.location}</Text>
        <Text style={styles.company}>Company: {user.company}</Text>
        <Text style={styles.age}>Age: {user.age}</Text>
        <Text style={styles.status}>
          Status: {user.isActive ? 'Active' : 'Inactive'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  occupation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  company: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  age: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    // 
  }
});

export default UserProfile;
