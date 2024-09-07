import { FlatList, StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React from 'react'
import { SplashScreen } from 'expo-router'
import { jobs } from '../../api/jobs'
import JobCard from '../../components/JobCard'
const filters=[
  "Saved",
  "In progress",
  "Applied",
  "Archived"
]
const Home = () => {
  const HeaderComponent = () => (
    <View style={{ padding: 20, backgroundColor: '#f2f2f2' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        <FlatList 
         ItemSeparatorComponent={() => <View style={styles.separator} />}
        horizontal data={filters} renderItem={({item})=>(<><Text style={styles.filters}>{item}</Text></>)}></FlatList>
      </Text>
    </View>
  );
  
  const FooterComponent = () => (
    <View style={{ padding: 20, backgroundColor: '#f2f2f2' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>List Footer</Text>
    </View>
  );
  const dim = useWindowDimensions()
  console.log(dim.width)
  SplashScreen.preventAutoHideAsync()
  return (
    <View style={{
      padding:0
    }}>      
    <FlatList
     ListHeaderComponent={HeaderComponent}
     ListFooterComponent={FooterComponent}
     data={jobs} renderItem={(({item})=>(<JobCard job={item} />))}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  filters:{
    padding:10,
    backgroundColor:'#fefefe',
    margin:10,
    borderRadius:5
  }
})