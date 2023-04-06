import {
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import Ionicons from "@expo/vector-icons/Ionicons";
import { loginSchema } from "../schema/schema";
import { useDispatch, useSelector } from "react-redux";
import { loadState, logOut, login } from "../features/UserSlice";
import { useNavigation, Link } from "@react-navigation/native";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import Loading from "../components/Loading";
import Success from "../components/Success";
import LoginSuccess from "./LoginSuccess";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const user = useSelector((state) => state.user);

  const { handleChange, values, handleSubmit, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
    });

  const handlePress = () => {
    if(errors.email===undefined && errors.password=== undefined && touched){

      dispatch(login(values));
    }
    console.log(errors.email)
  };

  if (user.loginStatus === "success") {
    setTimeout(() => {
      resetForm(user.loginStatus);
      navigate.navigate("HomePageScreen");
    }, 300);
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
        <View style={styles.header}>
          <Text style={{ textAlign: "center", fontSize: 22, letterSpacing: 3 }}>
            Hello Dear!
          </Text>
          <Text style={{ textAlign: "center", fontSize: 24, letterSpacing: 2 }}>
            Welcome back
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 50, letterSpacing: 2 }}>Email address</Text>
          <TextInput
            style={styles.email}
            id="email"
            placeholder="Enter your email address"
            value={values.email}
            onChangeText={handleChange("email")}
            textContentType="emailAddress"
            autoCapitalize="none"
            autoComplete="email"
            
          />
        </View>

        <View>
          <Text style={{ marginTop: 10, letterSpacing: 2 }}>Password</Text>
          <TextInput
            style={styles.email}
            id="password"
            secureTextEntry
            placeholder="Enter your password"
            value={values.password}
            onChangeText={handleChange("password")}
            
          />
        </View>

        {user.loginStatus !== "success" ? (
          <Text style={{ color: "red" }}>{user.loginError}</Text>
        ) : (
          <Text style={{ color: "green", fontSize: 25, fontWeight: "600" }}>
            Success
          </Text>
        )}

        <TouchableOpacity onPress={handlePress} style={styles.submit}>
          {user.loginStatus === "pending" ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Text style={{ color: "white", fontSize: 22 }}>SUBMIT</Text>
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
          <Text style={{ color: "black", fontSize: 16, marginBottom: 10 }}>
            not yet register?{" "}
          </Text>
          <Link to={{ screen: "RegisterScreen" }} className="text-pink-500">
            <Text style={{ color: "red", fontSize: 22, marginBottom: 30 }}>
              Register{" "}
            </Text>
          </Link>
          <Text style={{ color: "black", fontSize: 16, marginTop: 30 }}>
            Or{" "}
          </Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Ionicons name="logo-google" size={32} color="#F1DBBF" />
          <Text style={{ color: "white", fontSize: 22 }}>
            Login with google
          </Text>
        </TouchableOpacity>
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
  submit: {
    backgroundColor: "#20262E",
    display: "flex",
    height: 60,
    width: 350,

    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-evenly",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Login;
