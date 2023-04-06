import { View, Text } from 'react-native'
import React from 'react'

import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  return (
    <LottieView
    source={require("../data/97952-loading-animation-blue.json")}
    loop={false}
    autoSize={true}
    autoPlay
    // className="flex flex-1"
    // onAnimationFinish={() => navigate.navigate("RegisterScreen")}
  />
  )
}

export default Loading