import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import UserSlice from "./features/UserSlice";
import TabNavigator from "./src/components/TabNavigator";
// import LottieStartScreen from "./src/components/LottieStartScreen";

import Register from "./screens/Register";
import Login from "./screens/Login";
import SplashScreen from "./components/splashScreen";
import Welcome from "./components/Welcome";
import LoginSuccess from "./screens/LoginSuccess";
import ChatScreen from "./screens/ChatScreen";
// import Transaction from "./screens/Transaction";
import TransactionHistory from "./screens/TransactionHistory";
import Transfer from "./screens/Transfer";


const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          {/* <Stack.Screen name="Lottie" component={SplashScreen}  
          options={{ headerShown: false }}
          /> */}

          {/* <Stack.Screen name="Welcome" component={Welcome}  
          options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen name="RegisterScreen" component={Register} 
           options={{ headerTitle: "Register", headerShown: false }}
          /> */}
          <Stack.Screen name="LoginScreen" component={Login} 
           options={{ headerTitle: "Login", headerShown: false }}
          />
          <Stack.Screen name="LoginSuccess" component={LoginSuccess} 
           options={{ headerTitle: "Login", headerShown: false }}
          />
          <Stack.Screen name="HomePageScreen" component={TabNavigator} 
           options={{ headerTitle: "HomePage", headerShown: false }}
          />
          <Stack.Screen name="Transfer" component={Transfer} 
           options={{ headerTitle: "Transfer to Bank", headerShown: true }}
          />
          <Stack.Screen name="TransactionHistory" component={TransactionHistory} 
           options={{ headerTitle: "Transactions", headerShown: true }}
          />
          <Stack.Screen name="ChatScreen" component={ChatScreen} 
           options={{ headerTitle: "Chat", headerShown: true }}
          />
          <Stack.Screen name="ProfileScreen" component={TabNavigator} 
           options={{ headerTitle: "Profile", headerShown: false }}
          />
          <Stack.Screen name="WalletScreen" component={TabNavigator} 
           options={{ headerTitle: "Wallet", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
