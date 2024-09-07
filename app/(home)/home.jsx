import { FlatList, StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { SplashScreen } from 'expo-router';
import { jobs } from '../../api/jobs';
import JobCard from '../../components/JobCard';
import ActionSheet from 'react-native-actions-sheet';

const filters = [
  "All",
  "Saved",
  "In progress",
  "Applied",
  "Archived"
];

/**
 * Home component.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  const [selectedJob, setSelectedJob] = React.useState(null);
  const handleJobPress = (job) => {
    setSelectedJob(job); 
    actionSheetRef.current?.setModalVisible(true); 
  };
  const dim = useWindowDimensions();
  SplashScreen.preventAutoHideAsync();
  const actionSheetRef = useRef(null); 
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState(jobs); 
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredJobs(jobs); 
    } else {
      const filtered = jobs.filter((job) => job.status === filter);
      setFilteredJobs(filtered);
    }
  };

  const HeaderComponent = () => (
    <View style={{ padding: 20, backgroundColor: '#f2f2f2' }}>
      <FlatList
        horizontal
        data={filters}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleFilterChange(item)}>
            <Text
              style={[
                styles.filterButton,
                item === selectedFilter && styles.selectedFilter
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );

  const FooterComponent = () => (
    <View style={{ padding: 20, backgroundColor: '#f2f2f2' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>List Footer</Text>
    </View>
  );

  SplashScreen.preventAutoHideAsync();

  return (
    <View style={{ padding: 0 }}>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        data={filteredJobs} 
        renderItem={({ item }) => <JobCard job={item} handleJobPress={handleJobPress}/>}
        keyExtractor={(item) => item.id}
      />
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.sheetContainer}>
          {selectedJob && (
            <>
              <Text style={styles.sheetTitle}>{selectedJob.title}</Text>
              <Text style={styles.sheetDescription}>{selectedJob.description}</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => alert(`Applied for ${selectedJob.title}`)}>
                  <Text style={styles.buttonText}>Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => alert(`${selectedJob.title} was saved successfully!`)}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ActionSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  filterButton: {
    padding: 10,
    backgroundColor: '#fefefe',
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedFilter: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  separator: {
    width: 10,
  },
  sheetContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sheetDescription: {
    fontSize: 14,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  }
});
