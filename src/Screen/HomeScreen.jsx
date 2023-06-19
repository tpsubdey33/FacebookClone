import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SubHeader from '../component/SubHeader';
import Stories from '../component/Stories.jsx';
import Post from '../component/Post ';



const HomeScreen = () => {
  return (
    <ScrollView>
      <SubHeader />
      <Stories />
      <Post />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})