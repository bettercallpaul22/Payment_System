import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const TransactionHistory = () => {
  const [transaction, setTransaction] = useState([]);
  const url = "http://192.168.116.161:5000/api/4/transaction"
  useEffect(() => {
    const fetch_transactions = async()=>{
      // axios
      //   .get("http://192.168.116.161:5000/api/4/transaction")
      //   .then((resp) => setTransaction(resp.data))
      //   .catch((err) => console.log(err));
      const {data, meta} = await axios.get(url)
      if(meta){
        console.log('pending')
      }
      setTransaction(data)
    }
    fetch_transactions()
  }, []);

 

  return (
    <View>
      {transaction.map((transaction) => (
        <View
          key={transaction.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            borderBottomColor: "#5D3891",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 10 }}>{transaction.icon}</View>
            <View>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>
                {transaction.type}
              </Text>
              <Text style={{ color: "gray" }}>{Date( transaction.created_at)}</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "500", fontSize: 16 }}>
              {transaction.amount}
            </Text>
            <Text style={{ color: "green" }}>{transaction.status}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
