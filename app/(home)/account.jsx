import React, { useState } from 'react';
import { FlatList, View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

// ProfilePage Component
const ProfilePage = ({ user }) => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileText}>Name: {user.name}</Text>
      <Text style={styles.profileText}>Email: {user.email}</Text>
    </View>
  );
};

// Main Component
const UserAccounts = () => {
  const [users] = useState([{ id: '1', name: 'John Doe', email: 'john@example.com' }]);
  const [documents, setDocuments] = useState([
    { id: '1', title: 'Bachelor of Science', institution: 'University X', year: '2020' },
    { id: '2', title: 'Masters in Computer Science', institution: 'University Y', year: '2022' },
  ]);
  const [fullName, setFullName] = useState('');
  const [institution, setInstitution] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const actionSheetRef = React.useRef(null);

  // Function to add new certificate
  const handleAddCertificate = () => {
    if (fullName && institution && graduationYear) {
      const newCertificate = {
        id: (documents.length + 1).toString(),
        title: fullName,
        institution: institution,
        year: graduationYear,
      };
      setDocuments([...documents, newCertificate]);
      setFullName('');
      setInstitution('');
      setGraduationYear('');
      actionSheetRef.current?.hide();
    }
  };

  // Render each document in FlatList
  const renderItem = ({ item }) => (
    <View style={styles.documentItem}>
      <Text>{item.title}</Text>
      <Text>{item.institution}</Text>
      <Text>{item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => <ProfilePage user={users[0]} />}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Button
              title="Add More Certificates"
              onPress={() => actionSheetRef.current?.setModalVisible()}
            />
          </View>
        )}
      />

      {/* Action Sheet Form */}
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter full name"
          />
          <Text style={styles.formLabel}>Institution</Text>
          <TextInput
            style={styles.input}
            value={institution}
            onChangeText={setInstitution}
            placeholder="Enter institution"
          />
          <Text style={styles.formLabel}>Graduation Year</Text>
          <TextInput
            style={styles.input}
            value={graduationYear}
            onChangeText={setGraduationYear}
            placeholder="Enter graduation year"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddCertificate}>
            <Text style={styles.addButtonText}>Add Certificate</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  profileContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileText: {
    fontSize: 16,
  },
  documentItem: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  footer: {
    marginVertical: 20,
  },
  formContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserAccounts;
