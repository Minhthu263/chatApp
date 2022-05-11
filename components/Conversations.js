/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */

import React from 'react'
import { ScrollView } from 'react-native'

import ConversationItem from './ConversationItem';

const Conversations = ({ children }) => {
	return (
		<ScrollView>
			{children}
			<ConversationItem
				picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Mạnh Cường"
				// bio="my name is Mercy Patrick"
				lastMessage="Xin chào "
				time="4:00 PM"
				notification="3"
				// isBlocked
				// isMuted
				// hasStory
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Minh Thu"
				bio="my name is Mercy Patrick"
				lastMessage="Mình là Thu"
				time="4:00 PM"
				notification="1"
				isBlocked
				isMuted
				hasStory
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Huyền Trang"
				bio="my name is Mercy Patrick"
				lastMessage="Kết bạn với mk đê"
				time="4:00 PM"
				isBlocked
				isMuted
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Không tên"
				bio="my name is Mercy Patrick"
				lastMessage="Không tin nhắn"
				time="4:00 PM"
				isBlocked
				isMuted
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Lisa"
				bio="my name is Mercy Patrick"
				lastMessage="Xin Chào và Tạm biệt"
				time="4:00 PM"
				notification="5"
				isBlocked
				isMuted
				hasStory
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Lisa1"
				bio="my name is Mercy Patrick"
				lastMessage="Xin Chào và Tạm biệt"
				time="4:00 PM"
				notification="5"
				isBlocked
				isMuted
				hasStory
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Lisa2"
				bio="my name is Mercy Patrick"
				lastMessage="Xin Chào và Tạm biệt"
				time="4:00 PM"
				notification="5"
				isBlocked
				isMuted
				hasStory
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Lisa3"
				bio="my name is Mercy Patrick"
				lastMessage="Xin Chào và Tạm biệt"
				time="4:00 PM"
				notification="5"
				isBlocked
				isMuted
				hasStory
			/>

		</ScrollView>
	)
}

export default Conversations