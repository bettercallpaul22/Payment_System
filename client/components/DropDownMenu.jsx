import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DropDownMenu = () => {
  const [bankData, setBankData] = useState([]);
  useEffect(() => {
    const fetch_banks = async () => {
      const resp = await axios.get("https://nigerianbanks.xyz");
      resp.data.map((bank) => {
        setBankData(bank.name);
        
      });
    };
    fetch_banks();
  }, []);
  
  console.log(bankData)

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Kuda", value: "Kuda" },
    { label: "Opay", value: "Opay" },
  ]);
console.log(bankData)

  return (
    <View>
      <View>
        <DropDownPicker
          style={styles.picker}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
            setValue={setValue}
           setItems={setItems}
        />
      </View>
    </View>
  );
};

export default DropDownMenu;

const styles = StyleSheet.create({
  picker: {
    borderColor: "purple",
    borderWidth: 1,
    width: 370,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    margin: 10,
    display: "flex",
    backgroundColor: "#cococo",
  },
});
