import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import EditScreenInfo from '../components/EditScreenInfo';
import {View } from '../components/Themed';
import chatRooms from '../data/ChatRooms'



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <FlatList 
     data={chatRooms} 
     renderItem={({item}) => <ChatListItem chatRoom={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
