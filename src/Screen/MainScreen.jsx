import { View, Text } from 'react-native';
import React from 'react';
import Header from '../component/Header';
import TopTabNavigation from '../Navigation/TopTabNavigation';

const MainScreen = () => {
  return (
    <View style = {{flex:1}}>
      <Header />
      <TopTabNavigation />
    </View>
  )
}

export default MainScreen