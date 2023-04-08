import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";
import DropDownPicker from "./DropDownMenu";
import DropDownMenu from "./DropDownMenu";

const InputField = ({ title, placeholder, length, keyboard }) => {
  const [account_number, set_account_number] = useState(null);
  const [bank_name, set_bank_name] = useState("");
  const [amount, set_amount] = useState(null);
  const [desc, set_desc] = useState("");
  const url = "";

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
      }}
    >
      <Text
        style={{
          textAlign: "left",
          width: 370,
          marginVertical: 1,
          letterSpacing: 1,
        }}
      >
        Bank Name
      </Text>
      <DropDownMenu/>

      <Text
        style={{
          textAlign: "left",
          width: 370,
          marginVertical: 1,
          letterSpacing: 1,
          marginTop: 10,
        }}
      >
        Account Number
      </Text>

      <TextInput
         onChangeText={(value)=>set_account_number(value)}
         keyboardType="numeric"
        maxLength={10}
        placeholder="Enter beneficiary Account"
        style={{
          borderColor: "purple",
          borderWidth: 1,
          width: 370,
          borderRadius: 10,
          height: 50,
          paddingHorizontal: 10,
          fontSize: 16,
        }}
      />

      <Text
        style={{
          textAlign: "left",
          width: 370,
          marginVertical: 1,
          letterSpacing: 1,
          marginTop: 10,
        }}
      >
        Amount
      </Text>

      <TextInput
         onChangeText={(value)=>set_amount(value)}
         keyboardType="numeric"
        maxLength={1000000000000}
        placeholder="Enter beneficiary Account"
        style={{
          borderColor: "purple",
          borderWidth: 1,
          width: 370,
          borderRadius: 10,
          height: 50,
          paddingHorizontal: 10,
          fontSize: 16,
        }}
      />
      <Text
        style={{
          textAlign: "left",
          width: 370,
          marginVertical: 1,
          letterSpacing: 1,
          marginTop: 10,
        }}
      >
        Description
      </Text>

      <TextInput
         onChangeText={(value)=>set_desc(value)}
         keyboardType="default"
        maxLength={50}
        placeholder="Enter beneficiary Account"
        style={{
          borderColor: "purple",
          borderWidth: 1,
          width: 370,
          borderRadius: 10,
          height: 50,
          paddingHorizontal: 10,
          fontSize: 16,
        }}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
