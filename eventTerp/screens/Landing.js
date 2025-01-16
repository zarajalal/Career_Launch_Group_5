// Madison

import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'

export default function LandingScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EventTerp</Text>
      <Text style={styles.text2}>Never Miss Another Event!</Text>
      <View style={styles.box} />
      <Text style={styles.check}>✅</Text>
      <Text style={styles.x}>❌</Text>    
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  header: {
    color: 'black',
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 60,
  },
  text2: {
    color: 'black',
    fontSize:25,
    textAlign:'center',
    top: 65,
    fontStyle: 'italic'

  },
  box: {
    height: 450,
    width:300,
    borderRadius:40,
    backgroundColor: 'white',
    marginLeft: 50,
    marginTop:130
  },
  image:{
    position:'absolute',
    resizeMode:'center',
    transform: [{ translateX: -190 }, { translateY: -19 }]
  },
  check:{
    fontSize:65,
    top:-95,
    left:70
  },
  x:{
    fontSize:65,
    top:-170,
    left:255
  }
})