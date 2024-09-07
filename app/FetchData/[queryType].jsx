import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BACKEND_VERIFIER_API_URL = "https://privado.furnitureelegancengara.com";

const VERIFIER_BACKEND_API_URL_FOR_SIGNIN = `${BACKEND_VERIFIER_API_URL}/api/signIn`;

const VERIFIER_BACKEND_API_URL_FOR_PROOF_VERIRY = `${BACKEND_VERIFIER_API_URL}/api/proveGraduate`;

const VERIFIER_BACKEND_API_URL_FOR_STATUS = `${BACKEND_VERIFIER_API_URL}/api/status`;

const VerificationPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [verificationQuery, setVerificationQuery] = useState("");
  const [loading, setLoading] = useState(false);
  let intervalId;

  useEffect(() => {
    intervalId = null;
    if (route.params.queryType === "SignIn") {
      console.log("Sign In is Fetching", VERIFIER_BACKEND_API_URL_FOR_SIGNIN);
      fetchData(VERIFIER_BACKEND_API_URL_FOR_SIGNIN);
    } else if (route.params.queryType === "ProveGraduate") {
      fetchData(VERIFIER_BACKEND_API_URL_FOR_PROOF_VERIRY);
    }
  }, [route.params.queryType]);

  const fetchData = async (url) => {
    console.log(`Fetching data from ${url}`);
    setLoading(true);
    try {
      const response = await axios.get(url);
      const contentType = response.headers["content-type"];
      console.log(response.data);

      if (contentType && contentType.includes("application/json")) {
        const data = response.data;
        setVerificationQuery(JSON.stringify(data));
        const callbackUrl = data.body.callbackUrl;
        const urlObj = new URL(callbackUrl);
        const sessionId = urlObj.searchParams.get("sessionId");
        console.log(`sessionId: ${sessionId}`);
        listenForResponse(sessionId);
      } else {
        console.error("Error: Expected JSON response");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const listenForResponse = async (sessionId) => {
    console.log("Listening for response... SessionId: ", sessionId);
    if (!sessionId) {
      console.error("Error: sessionId is missing");
      return;
    }

    const interval = 5 * 1000; 
    const duration = 2 * 60 * 1000; 

    intervalId = setInterval(() => {
      if (route.params.queryType === "SignIn") {
        checkAuthStatus(sessionId);
      } else if (route.params.queryType === "ProveGraduate") {
        checkGraduationStatus(sessionId);
      }
    }, interval);
  };

  const checkAuthStatus = async (sessionId) => {
    try {
      const response = await axios.get(VERIFIER_BACKEND_API_URL_FOR_STATUS, {
        params: {
          sessionId: sessionId,
        },
      });
      const data = response.data;
      if (data.body?.message) {
        clearInterval(intervalId);
        console.log(`Message: ${data.body.message}`);
        await AsyncStorage.setItem("isLogin", "true");
        navigation.navigate("account");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const checkGraduationStatus = async (sessionId) => {
    try {
      const response = await axios.get(VERIFIER_BACKEND_API_URL_FOR_STATUS, {
        params: {
          sessionId: sessionId,
        },
      });
      const data = response.data;
      clearInterval(intervalId);
      if (data.body?.message) {
        console.log(`Message: ${data.body.message}`);
        await AsyncStorage.setItem("isGraduate", "true");
        navigation.navigate("home");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading || !verificationQuery) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{route.params.queryType}</Text>
      <View style={styles.qrCodeContainer}>
        <QRCode value={verificationQuery} size={300} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrCodeContainer: {
    backgroundColor: "#eee",
    padding: 20,
  },
});

export default VerificationPage;
