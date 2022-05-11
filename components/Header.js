/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'

const Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={() => {}} style={styles.imageContainer}>
					<Image style={styles.image} source={{
						uri: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					}} />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Chat</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 5,
	},
	headerContainer: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
		position: 'relative',
		// justifyContent: 'space-between',
		marginHorizontal: 15,
		marginVertical: 10,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: 'black',
		alignSelf: 'center',
        paddingLeft:20,
	},
	imageContainer: {
		borderRadius: 20,
		height: 40,
		width: 40,
		overflow: 'hidden',
	},
	image: {
		height: 40,
		width: 40,
	},
})

export default Header