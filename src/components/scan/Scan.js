import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import API from 'API';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const { width } = Dimensions.get('window');
const Scan = ({ navigation }) => {
	const [text, setText] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<TextInput
				multiline
				numberOfLines={4}
				onChangeText={(value) => setText(value)}
				style={{ backgroundColor: '#fff', flex: 1, width: width }}
			/>
		</SafeAreaView>
	);
};

const StackScreen = ({ navigation }) => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#007AB4',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerTitleAlign: 'center',
			// headerLeft: () => (
			// 	<Ionicons
			// 		name="ios-menu"
			// 		size={25}
			// 		color="#fff"
			// 		onPress={() => {
			// 			navigation.openDrawer();
			// 		}}
			// 	/>
			// ),
		}}>
		<Stack.Screen
			name="Scan"
			component={Scan}
			options={{
				title: 'SCAN',
			}}
		/>
	</Stack.Navigator>
);
export default StackScreen;

const styles = StyleSheet.create({
	container: {
		// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
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
