/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons';

import Conversations from '../components/Conversations';
import SearchInput from '../components/Search';
import Header from '../components/Header';
import { theme } from '../theme';

export const fabStyles = ({
	style: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		position: 'absolute',
		bottom: 10,
		right: 10,
		backgroundColor: theme.colors.white,
		borderRadius: 100,
		elevation: 5,
		shadowColor: theme.colors.primary,
		shadowOpacity: 0.4,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
	},
})

const ListChat_SC = () => {
	return (
		<View style={{ backgroundColor: 'white', flex: 1 }}>
			<Header/>
			<Conversations>
				<SearchInput />
			</Conversations>
			<TouchableOpacity onPress={() => {}} style={fabStyles.style}>
				<Icon name="chat" size={30} color= "red" />
			</TouchableOpacity>
		</View>
	)
}

export default ListChat_SC