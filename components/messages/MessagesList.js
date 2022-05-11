/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';

import Message from './Message';

import { theme } from '../../theme';

const MessagesList = ({ onSwipeToReply }) => {
	const [messages, setMessages] = useState([
		{
			user: 0,
			time: '12:00',
			content: 'Xin Chào',
		},
		{
			user: 1,
			time: '12:05',
			content: "Chào lại",
		},
		{
			user: 1,
			time: '12:07',
			content: 'Lorem Ipsum is simply?',
		},
		{
			user: 0,
			time: '12:09',
			content: 'Lorem Ipsum is simply',
		},
		{
			user: 0,
			time: '12:00',
			content: ':)',
		},
		{
			user: 1,
			time: '12:05',
			content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
		},
		{
			user: 0,
			time: '12:07',
			content: 'Lorem Ipsum is simply dummy text of the printing',
		},
		{
			user: 1,
			time: '12:09',
			content: 'Lorem Ipsum is simply dummy text of the printing',
		},
		{
			user: 0,
			time: '12:07',
			content: "Lorem Ipsum is simply dummy text of the printing",
		},
		{
			user: 1,
			time: '12:09',
			content: 'Lorem Ipsum is simply dummy text of the printing',
		},
	]);

	const user = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true });
			}}
		>
			{messages.map((message, index) => (
				<Message
					key={index}
					time={message.time}
					isLeft={message.user !== user.current}
					message={message.content}
					onSwipe={onSwipeToReply}
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;
