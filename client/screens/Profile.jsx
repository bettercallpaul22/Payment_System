import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { clearLoginStatus, loadState, logOut } from "../features/UserSlice";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ProfileMenu from "../components/ProfileMenu";

const Profile = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogOut = () => {
    console.log("logout");
    dispatch(logOut());
    setTimeout(() => {
      navigate.navigate("LoginScreen");
    }, 10);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Header firstName={user.firstName} />

        <View style={styles.container}>
          <View style={styles.profileImg}>
            <Ionicons name="person" size={100} color="black" />
            {/* <MaterialIcons style={{position:'absolute', top:5, right:5}} name="mode-edit" size={40} color="pink" /> */}
          </View>
          <Text
            style={{ fontSize: 20 }}
          >{`${user.firstName} ${user.lastName}`}</Text>

          <Text style={{ fontSize: 20 }}>{user.email}</Text>

          <Button title="Update Profile" />

          <View style={{ marginTop: 20 }}>
            <ProfileMenu
              name="My therapist"
              icon1="person-fill"
              icon2="arrow-forward-ios"
              color1="purple"
              color2="black"
              size1={30}
              size2={24}
            />
            <ProfileMenu
              name="My assesments"
              icon1="checklist"
              icon2="arrow-forward-ios"
              color1="black"
              color2="black"
              size1={24}
              size2={24}
            />
            <ProfileMenu
              name="My subscriptions"
              icon1="key"
              icon2="arrow-forward-ios"
              color1="black"
              color2="black"
              size1={24}
              size2={24}
            />
          
            <TouchableOpacity style={styles.main} onPress={handleLogOut}>
              <Octicons name="arrow-left" size={24} color="black" />
              <Text style={{ marginLeft: 6, fontSize: 20, letterSpacing: 2 }}>
                Logout
              </Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
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
  container: {
    display: "flex",
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  profileImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: 130,
    marginTop: 30,
    marginBottom: 2,
    backgroundColor: "#11698E",
    borderRadius: 50,
    position: "relative",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    letterSpacing: 2,
    marginVertical: 10,
    width: 350,
    height: 70,
    flexDirection: "row",
    borderWidth: 2,
  },
  updateBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
    backgroundColor: "#11698E",
    borderRadius: 10,
  },
});

export default Profile;
