import {
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,

} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/UserSlice";
import { useNavigation, Link } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";
import { ScrollView } from "react-native";
import { bankList } from "../data/bankList";

const Register = () => {
  useEffect(() => {
    // const fetch_banks = async () => {
    //   const resp = await axios.get("https://nigerianbanks.xyz");
    //   setBankData(resp.data);
    // };
    // fetch_banks();
    // setBankData(resp.data);
  }, []);
  const userAuth = useSelector((state)=> state.user)
  const [isEnabledPassword, setIsEnabledPassword] = useState(false);
  const [isEnabledPin, setIsEnabledPin] = useState(false);
  const togglePasswordSwitch = () =>
    setIsEnabledPassword((previousState) => !previousState);
  const togglePinSwitch = () => setIsEnabledPin((prevState) => !prevState);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [selected, setSelected] = useState("");
  // const [bankData, setBankData] = useState([]);
 
  const user = useSelector((state) => state.user);
  const [person, setPerson] = useState({
        firstName:"",
        lastName: "",
        email: "",
        bank: selected,
        pin: "",
        password: "",
  });

  const handlePress = () => {
     dispatch(register(person));
  };

  if (user.registerStatus === "success") {
    setTimeout(() => { 
       navigate.navigate("Login");
     
    }, 600);
  }

  // console.log(userAuth); 
  return ( 
    <ScrollView>
    <View style={styles.mainContainer}>
      <View tyle={styles.header}>
        <Text style={{ textAlign: "center", fontSize: 22, letterSpacing: 3 }}>
          Hello Dear!
        </Text>
        <Text style={{ textAlign: "center", fontSize: 24, letterSpacing: 1 }}>
          Let's begin the journey
        </Text>
      </View>

{/* FirstName */}
      <View style={styles.formNames}>
        <View>
          <Text style={{ letterSpacing: 2 }}>first name</Text>
          <TextInput
          textContentType="emailAddress"
            style={styles.fistLastName}
            placeholder="Enter first name"
            onChangeText={(value) => setPerson({...person, firstName:value})}
          />
        </View>
        <View>
          <Text style={{ letterSpacing: 2 }}>last name</Text>
          <TextInput
            style={styles.fistLastName}
            placeholder="Enter last name"
            onChangeText={(value) => setPerson({...person, lastName:value})}
          />
        </View>
      </View>
      <View>
        <Text style={{ marginTop: 10, letterSpacing: 2 }}>Email address</Text>
        <TextInput
          style={styles.email}
          placeholder="Enter your email address"
          onChangeText={(value) => setPerson({...person, email:value})}

        />
      </View>
      {/* Bank DropDown */}
      <View style={{ width: 280, borderColor: "purple", marginRight: 70 }}>
        <SelectList
           setSelected={(val) => setSelected(val)}
          data={bankList.map((bank) => bank.name)}
          save="name"
          searchPlaceholder="Search Bank"
          search={false}
          placeholder="Select Bank To Register"
          boxStyles={styles.select}
          onSelect={(v)=>setPerson({...person, bank:selected})}
        />
      </View>

      {/* Pin */}
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: 14, letterSpacing: 2 }}>
            Transaction Pin
          </Text>

          <Switch
            style={{ top: 7, marginLeft: 10 }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabledPin ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={togglePinSwitch}
            value={isEnabledPin}
          />

          {isEnabledPin ? (
            <Text style={{ marginTop: 14, letterSpacing: 2, fontSize: 10 }}>
              switch to hide pin{" "}
            </Text>
          ) : (
            <Text style={{ marginTop: 14, letterSpacing: 2, fontSize: 10 }}>
              switch to show pin
            </Text>
          )}
        </View>
        <TextInput
          style={styles.email}
          placeholder="Enter four digit transaction pin"
          onChangeText={(value) => setPerson({...person, pin:value})}
          secureTextEntry={!isEnabledPin}
          keyboardType="numeric"
          maxLength={4}
          
        />
      </View>

      {/* Password */}
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: 14, letterSpacing: 2 }}>Password</Text>

          <Switch
            style={{ top: 7, marginLeft: 10 }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabledPassword ? "purple" : "gray"}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={togglePasswordSwitch}
            value={isEnabledPassword}
          />

          {isEnabledPassword ? (
            <Text style={{ marginTop: 14, letterSpacing: 2, fontSize: 10 }}>
              switch to hide password{" "}
            </Text>
          ) : (
            <Text style={{ marginTop: 14, letterSpacing: 2, fontSize: 10 }}>
              switch to show password
            </Text>
          )}
        </View>
        <TextInput
          style={styles.email}
          placeholder="Enter your password"
          onChangeText={(value) => setPerson({...person, password:value})}
          secureTextEntry={!isEnabledPassword}
        />
      </View>
      {userAuth.registerStatus !== "success" ? (
        <Text style={{ color: "red", marginTop: 5, fontSize:18 }}>{user.registerError}</Text>
      ) : (
       <Text style={{ color: "green", fontSize: 22 }}>Register successful</Text>
      )}
      <TouchableOpacity onPress={handlePress} style={styles.createFreeAcc}>
        {user.registerStatus === "pending" ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text style={{ color: "white", fontSize: 22 }}> 
            Create my free account
          </Text>
        )}
      </TouchableOpacity>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: 300,
        }}
      >
        <Text style={{ color: "black", fontSize: 18 }}>
          already have an account?{" "}
        </Text>
        <Link
          to={{ screen: "Login" }}
          style={{ color: "pink", marginTop: 20 }}
        >
          <Text style={{ color: "red", fontSize: 22 }}>
            Login to you account
          </Text>
        </Link>
      </View>
      {/* <Text className="text-red-500  w-[300px] text-center mb-2 ">
          {errors.comfirmPassword}
        </Text> */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 60,
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gooleSignup: {
    backgroundColor: "purple",
    display: "flex",
    height: 60,
    width: 350,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-evenly",
  },
  formNames: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 400,
    paddingTop: 5,
  },
  fistLastName: {
    width: 160,
    height: 55,
    marginBottom: 7,
    borderWidth: 2.3,
    borderColor: "#20262E",
    borderRadius: 2,
    textAlign: "center",
    fontSize: 16,
  },
  email: {
    width: 350,
    height: 55,
    borderWidth: 2.3,
    borderColor: "#20262E",
    borderRadius: 2,
    fontSize: 20,
    paddingLeft: 5,
  },
  createFreeAcc: {
    backgroundColor: "purple",
    display: "flex",
    height: 60,
    width: 350,

    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-evenly",
    marginVertical: 20,
  },

  switch: {
    marginLeft: 20,
  },

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

export default Register;
