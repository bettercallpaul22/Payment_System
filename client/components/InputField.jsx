import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";

const InputField = ({ title, placeholder, length, keyboard }) => {  
const [account_number, set_account_number] = useState(null)
const [bank_name, set_bank_name] = useState('')
const [amount, set_amount] = useState(null)
const [desc, set_desc] = useState('')
const url = ""

  
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
        {title}
      </Text>
     
      <TextInput
      onChangeText={(value)=>set_account_number(value)}
        keyboardType={keyboard}
        maxLength={length}
        placeholder={placeholder}
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
