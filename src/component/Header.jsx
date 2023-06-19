import { StyleSheet,View, Image } from 'react-native';
import React from 'react';
import FbLogo from '../images/fblogo.png';
import { FontAwesome5, Fontisto, Entypo } from 'react-native-vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={FbLogo} style={styles.fbLogo} />
      <View style={styles.headerIcons}>
      <View style={styles.searchBg}>
            <Entypo name='plus' size={25} color='black' />
        </View>
        <View style={styles.searchBg}>
            <FontAwesome5 name='search' size={19} color='black' />
        </View>
        <View style={styles.searchBg}>
            <Fontisto name='messenger' size={22} color='black' />
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    fbLogo:{
        height:25,
        width:130,
    },
    searchBg:{
        backgroundColor:'lightgray',
        height:35,
        width:35,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
    },
    container:{
        backgroundColor:'white',
        padding:16,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    headerIcons:{
        flexDirection:"row"
    }
});