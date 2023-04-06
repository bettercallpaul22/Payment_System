import {
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/UserSlice";
import { useNavigation, Link } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { registerSchema } from "../schema/schema";
import RegisterSuccess from "../components/RegisterSuccess";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const user = useSelector((state) => state.user);
  const { handleChange, values, handleSubmit, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        comfirmPassword: "",
      },
      validationSchema: registerSchema,
    });

  const handlePress = () => {
    dispatch(register(values));
  
  };

  if (user.registerStatus === "success") {
    setTimeout(() => {
      navigate.navigate("LoginScreen");
      resetForm(values);
    }, 200);
  }

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });



  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView style={styles.mainContainer}>
        <View tyle={styles.header}>
          <Text style={{textAlign:'center', fontSize:22, letterSpacing:3}}>Hello Dear!</Text>
          <Text style={{textAlign:'center', fontSize:24, letterSpacing:1}}>Let's begin the journey</Text>
        </View>

        <TouchableOpacity style={styles.gooleSignup}>
          <Ionicons name="logo-google" size={32} color="#F1DBBF" />
          <Text style={{ color: "white", fontSize: 22 }}>
            Sign up with google
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "#20262E", fontSize: 22, marginTop: 5 }}>
          Or create an account with
        </Text>

        <View style={styles.formNames}>
          <View>
            <Text style={{ letterSpacing:2 }}>first name</Text>
            <TextInput
              style={styles.fistLastName}
              id="firstName"
              placeholder="Enter first name"
              value={values.firstName}
              onChangeText={handleChange("firstName")}
            />
          </View>
          <View>
            <Text style={{ letterSpacing:2 }}>last name</Text>
            <TextInput
              style={styles.fistLastName}
              id="lastName"
              placeholder="Enter last name"
              value={values.lastName}
              onChangeText={handleChange("lastName")}
            />
          </View>
        </View>
        <View>
          <Text style={{ marginTop: 10, letterSpacing:2 }}>Email address</Text>
          <TextInput
            style={styles.email}
            id="email"
            placeholder="Enter your email address"
            value={values.email}
            onChangeText={handleChange("email")}
          />
        </View>

        <View>
          <Text style={{ marginTop: 14, letterSpacing:2 }}>Password</Text>
          <TextInput
            style={styles.email}
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />
        </View>
        {user.registerStatus !== "success" ? (
          <Text style={{color:'red', marginTop:5}}>{user.registerError}</Text>
        ) : (
         <RegisterSuccess/>
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
     
        <View style={{  display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', width:300 }}  >
          <Text style={{ color: "black", fontSize: 18 }}>
            already have an account?{" "}
          </Text>
          <Link to={{ screen: "LoginScreen" }} style={{color:'pink', marginTop:20}}>
            <Text style={{ color: "red", fontSize: 22 }}>
              Login to you account
            </Text>
          </Link>
        </View>
        {/* <Text className="text-red-500  w-[300px] text-center mb-2 ">
          {errors.comfirmPassword}
        </Text> */}
      </SafeAreaView>
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
    backgroundColor: "#20262E",
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
    backgroundColor: "#20262E",
    display: "flex",
    height: 60,
    width: 350,
  
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-evenly",
    marginVertical:20
  },
});

export default Register;
