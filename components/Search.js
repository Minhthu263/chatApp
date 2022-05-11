/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */

import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

// import Icon from '@expo/vector-icons/FontAwesome';

const SearchInput = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				{/* <Icon name="search" size={20} color={theme.colors.searchIcon} /> */}
				<TextInput style={styles.input} placeholder="Search" maxLength={10} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// paddingVertical: 10,
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
	row: {
		backgroundColor: '#F5F5F5',
		flexDirection: 'row',
		borderRadius: 50,
		height: 45,
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	input: {
		paddingHorizontal: 30,
		fontSize: 16,
		height: 45,
		flex: 1,
		color: 'black',
	},
});

export default SearchInput