import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesome } from '@expo/vector-icons';

const DropDownMenu = () => {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "7", value: "Drinks" },
    { key: "2", value: "Appliances" },
  ];
  const data2 = [
    { name: "joe", value: "access" },
    { name: "new", value: "gtb" },
  ];

  const [bankData, setBankData] = useState([]);
  useEffect(() => {
    const fetch_banks = async () => {
      const resp = await axios.get("https://nigerianbanks.xyz");

      setBankData(resp.data);

      // resp.data.map((bank) => {
      //   setBankData(bank.name);

      // });
    };
    fetch_banks();
  }, []);

  console.log(bankData);
  return (
    <View style={{ width: 370, borderColor: "purple" }}>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={bankData.map((b) =>(
        <View style={{display:'flex', flexDirection:'row'}}>
         
          <Text>{b.name}</Text>
          <Text style={{marginLeft:5}}>{b.ussd}</Text>
        
          </View>) 
        )}
        save="name"
        searchPlaceholder="Search Bank"
        search={false}
        placeholder="Select Banks" 
      />
    </View>
  );
};

// const [open, setOpen] = useState(false);
// const [value, setValue] = useState(null);
// const [items, setItems] = useState([
//   { label: "Kuda", value: "Kuda" },
//   { label: "Opay", value: "Opay" },
// ]);

//   return (
//     <View>
//       <View>
//         <DropDownPicker
//           style={styles.picker}
//           open={open}
//           value={value}
//           items={items}
//           setOpen={setOpen}
//             setValue={setValue}
//            setItems={setItems}
//         />
//       </View>
//     </View>
//   );
// };

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
