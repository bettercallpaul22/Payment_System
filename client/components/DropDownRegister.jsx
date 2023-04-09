import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SelectList } from "react-native-dropdown-select-list";


const DropDownRegister = (dataSelected) => {
  const [selected, setSelected] = React.useState("");
  const [bankData, setBankData] = useState([]);
  useEffect(() => {
    const fetch_banks = async () => {
      const resp = await axios.get("https://nigerianbanks.xyz");
      setBankData(resp.data);
    };
    fetch_banks();
  }, []); 
// console.log(selected)
  return (
    <View style={{ width: 280, borderColor: "purple", marginRight: 70 }}
    dataSelected={selected}
    >
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={bankData.map(bank=>bank.name)}
        // data={bankData.map((b) => ( 
        //   <View style={{ display: "flex", flexDirection: "row" }}>
        //     <Text>{b.name}</Text>
           
        //   </View>
        // ))}
        save="name"
        searchPlaceholder="Search Bank"
        search={false}
        placeholder="Select Bank To Register"
        boxStyles={styles.select}
        
      />
    </View>
  );
};

export default DropDownRegister;

const styles = StyleSheet.create({
  main: {
    width: 350,
    height: 55,
    borderWidth: 2.3,
    borderColor: "#20262E",
    borderRadius: 2,
    fontSize: 20,
    paddingLeft: 5,
  },
  select: {
    borderColor: "black",
    borderWidth: 2.3,
    width: 350,
    height: 55,
    marginTop: 20,
    borderRadius: 2,
    paddingLeft: 5,
  },
});
