// Juhi
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
export default function Swipes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Swipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 24,
  }

})
