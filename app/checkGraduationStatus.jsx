import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CheckGraduationStatus = () => {
  const [formValue, setFormValue] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    await AsyncStorage.setItem('isGraduate', 'true');
    navigation.replace('Home');
  };

  const handleAddAnother = () => {
    setFormValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Graduation Status</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Graduation Status"
        value={formValue}
        onChangeText={(text) => setFormValue(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Add Another" onPress={handleAddAnother} />
    </View>
  );
};

export default CheckGraduationStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
