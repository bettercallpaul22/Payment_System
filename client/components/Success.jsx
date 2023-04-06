import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Success = () => {
  const navigate = useNavigation();
  return (
    <LottieView
      source={require("../data/success-animation.json")}
      loop={false}
      autoPlay
      className="bg-pink-500 flex flex-1"
       onAnimationFinish={() => navigate.navigate("HomePageScreen")}
    />
  );
};

export default Success;
