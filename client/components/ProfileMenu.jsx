import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
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

const ProfileMenu = ({name, color1, color2, size1, size2, icon1, icon2}) => {
  return (
    <TouchableOpacity style={styles.main}>
      <Octicons name={icon1} size={size1} color={color1} />
      <Text style={{marginLeft:6, fontSize:20, letterSpacing:2}}>{name}</Text>
      <MaterialIcons name={icon2} size={size2} color={color2} />
    </TouchableOpacity>
  );
};

export default ProfileMenu;

const styles = StyleSheet.create({
    main:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:10,
        letterSpacing:2,
        marginVertical:10,
        width:350,
        height:70,
        flexDirection:'row',
        borderWidth:2

    }
});
