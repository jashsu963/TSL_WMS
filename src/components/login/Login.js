import React, { useState } from 'react';
import {
	Text,
	SafeAreaView,
	TouchableWithoutFeedback,
	TouchableOpacity,
	StyleSheet,
	Keyboard,
	TextInput,
	KeyboardAvoidingView,
	Dimensions,
	ToastAndroid,
} from 'react-native';
import API from 'API';
import { AuthContext } from '../context';

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);
const { width } = Dimensions.get('window');
const Login = ({ navigation }) => {
	const [username, setUsername] = useState('SUPER');
	const [password, setPassword] = useState('SUPER');
	const { signIn } = React.useContext(AuthContext);

	login = () => {
		fetch(`${API.login}password=${password}&usr_id=${username}`)
			.then((response) => {
				// console.log(response.status);
				// console.log(response.url);
				response.status == '200'
					? signIn()
					: ToastAndroid.showWithGravity('Wrong username or password!', ToastAndroid.SHORT, ToastAndroid.CENTER);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<DismissKeyboard>
			<KeyboardAvoidingView style={{ flex: 1 }}>
				<SafeAreaView style={styles.container}>
					<Text style={styles.loginText}>3PL WMS</Text>
					<TextInput
						style={styles.input}
						placeholder="Username"
						placeholderTextColor="#fff"
						autoCapitalize="none"
						onChangeText={(value) => {
							setUsername(value);
						}}
					/>
					<TextInput
						style={styles.input}
						placeholder="Password"
						placeholderTextColor="#fff"
						autoCapitalize="none"
						onChangeText={(value) => {
							setPassword(value);
						}}
					/>

					<TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
						<Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>LOGIN</Text>
					</TouchableOpacity>
				</SafeAreaView>
			</KeyboardAvoidingView>
		</DismissKeyboard>
	);
};
export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007AB4',
	},
	loginText: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	input: {
		color: '#fff',
		textAlign: 'center',
		backgroundColor: 'rgba(52, 52, 52, 0.1)',
		fontSize: 20,
		borderRadius: 5,
		width: (width * 3) / 4,
		height: 40,
		marginTop: 15,
	},
	loginBtn: {
		backgroundColor: '#fff',
		borderRadius: 5,
		width: (width * 3) / 4,
		height: 40,
		marginTop: 15,
		justifyContent: 'center',
	},
});
