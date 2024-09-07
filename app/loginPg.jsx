import QRCode from 'react-native-qrcode-svg';
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import { VERIFIER_BACKEND_API_URL_FOR_SIGNIN, VERIFIER_BACKEND_API_URL_FOR_STATUS } from './FetchData/[queryType]';
import { Text, View } from 'react-native';

const loginPg = () => {
	const router = useRouter();
	const [verificationQuery, setVerificationQuery] = useState("");
	const [loading, setLoading] = useState(false);
	let intervalId;

	useEffect(() => {
		intervalId = null;
			fetchData(VERIFIER_BACKEND_API_URL_FOR_SIGNIN);		
	}, []);

  const fetchData = async (url) => {
		console.log(`Fetching data from ${url}`);
		setLoading(true);
		try {
			const response = await axios.get(url);
			const contentType = response.headers.get("content-type");
			console.log(response.data);

			if (contentType && contentType.includes("application/json")) {
				const data = response.data;

				setVerificationQuery(JSON.stringify(data));
				console.log();
				const callbackUrl = "https://"+data.body.callbackUrl;
				console.log(`callbackUrl: ${callbackUrl}`);
				const urlObj = new URL(callbackUrl);

				const sessionId = urlObj.searchParams.get("sessionId");

				console.log(`sessionId: ${sessionId}}`);
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

        checkAuthStatus(sessionId);
	};

	const checkAuthStatus = async (sessionId) => {
		try {
			const response = await axios.get(VERIFIER_BACKEND_API_URL_FOR_STATUS, {
				params: {
					sessionId: sessionId,
				},
			});

			const data = response.data;
			console.log(data);
			if (data.body?.message) {
				console.log(intervalId);
				clearInterval(intervalId);
				console.log(`	Message: ${data.body.message}`);
				localStorage.setItem("isLogin", "true");

				router.push("/ProfileEntryPage");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	if (loading || !verificationQuery) {
		return (
			<Text>
				Loading...
			</Text>
		);
	}

	return (
		<View style={{
		backgroundColor:'silver '
		}}>	
			<QRCode value={verificationQuery}/>
		</View>
	);
};

export default loginPg