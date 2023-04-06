import { View, Text } from 'react-native'
import React from 'react'

import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigate = useNavigation();
  return (
    <LottieView
    source={require("../data/welcome.json")}
    loop={false}
    autoPlay
    className="bg-pink-500"
     onAnimationFinish={() =>  
        
         navigate.navigate("RegisterScreen")
      }
  />
  )
}

export default Welcome