import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const JobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.experienceLevel}>{job.experience_level}</Text>
      <Text style={styles.salaryRange}>Salary: {job.salary_range}</Text>
      <TouchableOpacity style={styles.applyButton} onPress={() => console.log(`Apply for job ID: ${job.id}`)}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  company: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  experienceLevel: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  salaryRange: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  applyButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    opacity: 0.5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default JobCard;
