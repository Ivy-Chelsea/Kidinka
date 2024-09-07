import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/FetchData/SignIn');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.link}> kidinka</Text>
        <View style={{
          width: 10,
          height: 10,
          backgroundColor: 'white',
          borderRadius: 5
        }}/>
      </View>      
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FF0000",
  },
  link: {
    fontSize: 50,
    color: 'white',
    fontWeight: '800',
  },
});
