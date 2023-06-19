import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CreateStory from './CreateStory';
import FriendStories from './FriendStories';

const Stories = () => {
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    style={styles.storiedContainer}
    contentContainerStyle={styles.contentContainerStyle}
    >
      <CreateStory />
      <FriendStories/>
    </ScrollView>
  )
}

export default Stories;

const styles = StyleSheet.create({
  storiedContainer:{
    backgroundColor: 'white',
    marginTop:8,
    padding:15,
  },
  contentContainerStyle:{
    paddingRight:30,
  }
})