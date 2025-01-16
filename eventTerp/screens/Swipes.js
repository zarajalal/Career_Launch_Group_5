// Juhi
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
export default function AddEvent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
  }

})
