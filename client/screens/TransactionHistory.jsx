import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { recentTransaction } from "../data/RecentTransaction";

const TransactionHistory = () => {
  return (
    <View>
      {recentTransaction.map((transaction) => (
        <View
          key={transaction.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            borderBottomColor:'#5D3891', borderBottomWidth:1,
          }}
        >
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', }}>
           <View style={{marginRight:10}}>{transaction.icon}</View>
            <View>
              <Text style={{fontWeight:'500', fontSize:16}}>{transaction.type}</Text>
              <Text style={{color:'gray'}}>{transaction.time}</Text>
            </View>
          </View>
          <View>
            <Text style={{fontWeight:'500', fontSize:16}}>{transaction.amount}</Text>
            <Text style={{color:'green'}}>{transaction.status}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
