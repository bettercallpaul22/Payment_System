import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { loadState, login } from "../features/UserSlice";
import { useNavigation, Link } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

const Login = () => {
  useEffect(() => {}, []);
  const userAuth = useSelector((state) => state.user);
  const [isEnabledPassword, setIsEnabledPassword] = useState(false);

  const togglePasswordSwitch = () =>
    setIsEnabledPassword((previousState) => !previousState);

  const dispatch = useDispatch();
  const navigate = useNavigation();
 

  const user = useSelector((state) => state.user);
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  const handlePress = () => {
    dispatch(login(person));
  };

  if (user.loginStatus === "success") {
    dispatch(loadState())
    setTimeout(() => {
       navigate.navigate("Home");
    }, 500);
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

        <View style={styles.formNames}></View>
        <View>
          <Text style={{ marginTop: 10, letterSpacing: 2 }}>Email address</Text>
          <TextInput
            style={styles.email}
            placeholder="Enter your email address"
            onChangeText={(value) => setPerson({ ...person, email: value })}
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
            onChangeText={(value) => setPerson({ ...person, password: value })}
            secureTextEntry={!isEnabledPassword}
          />
        </View>
        {userAuth.loginStatus !== "success" ? (
          <Text style={{ color: "red", marginTop: 5, fontSize: 18 }}>
            {user.loginError}
          </Text>
        ) : (
          <Text style={{ color: "green", fontSize: 22 }}>
            Login successful
          </Text>
        )}
        <TouchableOpacity onPress={handlePress} style={styles.createFreeAcc}>
          {user.loginStatus === "pending" ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={{ color: "white", fontSize: 22 }}>
              Login
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
            don't have an account?{" "}
          </Text>
          <Link
            to={{ screen: "Register" }}
            style={{ color: "pink", marginTop: 20 }}
          >
            <Text style={{ color: "red", fontSize: 18 }}>
              Click to register
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
    marginTop: 90,
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

export default Login;
