import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
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
                onPress={() => navigate.navigate("Transaction")}
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
  )
}

export default Dashboard

const styles = StyleSheet.create({

    dashboard: {
        backgroundColor: "#512D6D",
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
    
})