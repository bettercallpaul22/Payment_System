import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RefreshControl } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
  Fontisto,
} from "@expo/vector-icons";
import { TextInput } from "react-native";
{
  /* <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> */
}

const Transfer = () => {
  return (
    <View>
      <View style={styles.topView}>
        <Text style={{fontWeight:'700', fontSize:18, letterSpacing:3, marginBottom:10}}>Transfer</Text>
        <Text style={{ width:280, textAlign:'center', letterSpacing:1}}>
          Please confirm and verify the account before you proceed to send
        </Text>
        <Text style={{fontWeight:'600', fontSize:22, letterSpacing:3, marginTop:10}}>Balance: ₦20,000</Text> 
        <View>
          <AntDesign  name="right"  size={26} color="white" style={{ marginTop: 5 }} />
          <Text>Send to beneficiary?</Text>
        </View>
      </View>

      <View>
        <Text>Account Number</Text>
        <TextInput
        maxLength={10}
        />
      </View>
    </View>
  );
};

export default Transfer; 

const styles = StyleSheet.create({
  topView:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center', marginTop:10

  }
});
