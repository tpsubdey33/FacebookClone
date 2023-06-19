import {View, Text, StyleSheet} from 'react-native';
import React from 'react';


const MarketPlaceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market Place Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color:'#1877F2',
    fontWeight: '500',
  },
});

export default MarketPlaceScreen;