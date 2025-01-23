//Alex

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
export default function Calender() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontSize: 50,
    fontFamily: 'Quicksand-SemiBold',
  }

})
