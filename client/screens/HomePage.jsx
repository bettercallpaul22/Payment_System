import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
  Fontisto,
} from "@expo/vector-icons";
import { data } from "../data/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLoginStatus, loadState } from "../features/UserSlice";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import TransactionHistory from "./TransactionHistory";

export const HomePage = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadState());
  }, []);
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.mainContainer}>
      {/* <Header firstName={user.firstName} /> */}
      <View style={styles.ProfileHeader}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Ionicons name="person" size={35} color="black" />
          <View style={{ marginLeft:10}}>
            <Text style={{fontWeight:'700'}}>Hey Paul</Text>
            <Text>welcome back</Text>
          </View>
        </View>
        <View>
          <Ionicons name="notifications" size={35} color="gray" />
        </View>
      </View>
     
        <View style={styles.dashboard}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",

              width: 330,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Total Balance
            </Text>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={()=>{navigate.navigate("TransactionHistory")}}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Transaction History
              </Text>
              <AntDesign
                name="right"
                size={16}
                color="white"
                style={{ marginTop: 5 }} 
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: 330,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 30,
                marginRight: 30,
              }}
            >
              284,566
            </Text>
            <TouchableOpacity>
              <Entypo name="eye-with-line" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: 330,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="cash-refund"
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={{ color: "white" }}>Fund Wallet</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigate.navigate("Transfer")}
              >
                <MaterialCommunityIcons
                  name="bank-transfer-out"
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={{ color: "white", textAlign: "center" }}>
                Transfer
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Fontisto name="wetransfer" size={35} color="white" />
              </TouchableOpacity>
              <Text style={{ color: "white" }}>Withdraw</Text>
            </View>
          </View>
        </View>
        <Text style={{ fontWeight:'700', fontSize:18, marginLeft:10 }}>Recent transaction</Text>
        <ScrollView  >
     
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    marginTop: 30,
  },

  ProfileHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 130, 
    marginHorizontal:10,
   
  },
  dashboard: {
    backgroundColor: "purple",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 160,

    width: 370,
    margin: 10,
    borderRadius: 10,
    marginTop: 2,
  },

  session: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 170,
    backgroundColor: "#11698E",
    borderRadius: 10,
  },
});

export default HomePage;
