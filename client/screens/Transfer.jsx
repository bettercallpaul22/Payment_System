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
import InputField from "../components/InputField";
import { TouchableOpacity } from "react-native";
{
  /* <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> */
}

const Transfer = () => {
  return (
    <View>
      <View style={styles.topView}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            letterSpacing: 3,
            marginBottom: 10,
          }}
        >
          Transfer
        </Text>
        <Text style={{ width: 280, textAlign: "center", letterSpacing: 1 }}>
          Please confirm and verify the account before you proceed to send
        </Text>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 22,
            letterSpacing: 3,
            marginTop: 10,
            color: "purple",
          }}
        >
          Balance: ₦20,000
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            marginTop: 10,
          }}
        >
          <Ionicons name="person" size={24} color="purple" />
          <Text style={{ fontSize: 16, marginLeft: 5 }}>
            Send to beneficiary?
          </Text>
        </View>
      </View>

      <InputField />
      
   
     
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{ color: "white", textAlign:'center', fontSize:20, letterSpacing:2 }}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  topView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  button: {
    width: 370,
    backgroundColor: "purple",
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    margin: 10,
   display:'flex',
   alignItems:'center',
   justifyContent:'center'
  },
});
