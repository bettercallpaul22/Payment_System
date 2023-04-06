import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RefreshControl } from 'react-native'

const Transaction = () => {
  
  return (
    <View>
       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({})