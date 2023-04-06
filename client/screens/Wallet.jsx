import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const Wallet = () => {
  const user = useSelector((state)=>state.user)
  return (
    <View style={styles.mainContainer}>
      <Header
      firstName={user.firstName}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    display:'flex',
    flex:1,
    marginTop:30
  },

  topSession:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:160
  },
  session:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:120,
    width:170,
    backgroundColor:'#11698E',
    borderRadius:10
  },

})

export default Wallet