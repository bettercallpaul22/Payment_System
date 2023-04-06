import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const LoginSuccess = () => {
  const navigate = useNavigation();
  return (
    <LottieView
      source={require("../data/success-animation.json")}
      loop={false}
      autoPlay
     style={{marginTop:40}}
       onAnimationFinish={() => navigate.navigate("ProfileScreen")}
    />
  );
};

export default LoginSuccess;


