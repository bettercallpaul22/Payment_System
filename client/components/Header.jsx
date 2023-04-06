import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ firstName }) => {
  return (
    <View style={styles.header}>
      <Ionicons style={{marginLeft:5}} name="person" size={40} color="white" />
      <View>
        <Text style={styles.namestyle}>
          Hello {firstName}
        </Text>
        <Text style={styles.namestyle}>How are you today</Text>
      </View>
      <Ionicons style={{marginRight:5}} name="notifications" size={32} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
   backgroundColor:"#11698E",
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center',
   flexDirection:'row',
   paddingHorizontal:3,
   marginTop:10,
   height:70,
   width:370,
   margin:10,
   borderRadius:10
  },

  namestyle:{
    letterSpacing:3,
    color:'white',
   fontSize:15
  }
});


export default Header;
