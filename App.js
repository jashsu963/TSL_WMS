import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/components/login';
import { AuthContext } from './src/components/context';
import Scan from './src/components/scan';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerRoutes = () => {
	return (
		<Drawer.Navigator
			drawerContentOptions={{ activeBackgroundColor: 'rgba(0, 0, 0, 0.1)' }}
			initialRouteName="SCAN">
			<Drawer.Screen name="SCAN" component={Scan} />
		</Drawer.Navigator>
	);
};

export default App = () => {
	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
					};
			}
		},
		{ isSignout: true },
	);
	const authContext = React.useMemo(
		() => ({
			signIn: () => {
				dispatch({ type: 'SIGN_IN' });
			},
			signOut: () => dispatch({ type: 'SIGN_OUT' }),
		}),
		[],
	);
	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator>
					{state.isSignout ? (
						<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
					) : (
						<Stack.Screen name="DrawerRoutes" component={DrawerRoutes} options={{ headerShown: false }} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
};
