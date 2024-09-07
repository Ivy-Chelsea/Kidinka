import { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';

const ProfilePage = ({ user, onUpdateProfile }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [occupation, setOccupation] = useState(user.occupation);
  const [location, setLocation] = useState(user.location);
  const [company, setCompany] = useState(user.company);
  const [age, setAge] = useState(user.age.toString());

  const handleUpdate = () => {
    const updatedUser = {
      ...user,
      name,
      email,
      occupation,
      location,
      company,
      age: parseInt(age, 10),
    };
    onUpdateProfile(updatedUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput/>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={occupation}
        onChangeText={setOccupation}
        placeholder="Occupation"
      />
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Location"
      />
      <TextInput
        style={styles.input}
        value={company}
        onChangeText={setCompany}
        placeholder="Company"
      />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Age"
        keyboardType="numeric"
      />
      <Button title="Save Changes" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#070800',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default ProfilePage;
