import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function App() {
	return (
		<View style={styles.container}>
			<SafeAreaView style={{ flex: 1, backgroundColor: "pink" }}>
				<StatusBar style="auto" />
				<View style={styles.contents}>
					<Text>Open up App.tsx to start working on your app!</Text>
					<Text>{getStatusBarHeight()}</Text>

				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		paddingTop: getStatusBarHeight(),
		paddingBottom: getBottomSpace(),
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	contents: {
		flex: 1,
		backgroundColor: 'lightgreen',

	}
});
