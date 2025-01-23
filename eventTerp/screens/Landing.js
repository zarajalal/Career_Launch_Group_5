// Madison

import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'

const terpImg= require('../assets/terpimg.png')

export default function LandingScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EventTerp</Text>
      <Text style={styles.text2}>Never Miss Another Event!</Text>
      <View style={styles.box} />
      <Image
        source={terpImg}
        style={styles.image}
        />
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
    top: 50,
    fontFamily: 'Quicksand-Bold',
  },
  text2: {
    color: 'black',
    fontSize:25,
    textAlign:'center',
    top: 58,
    fontStyle: 'italic',
    fontFamily: 'Quicksand-SemiBold',

  },
  box: {
    height: 450,
    width:300,
    borderRadius:40,
    backgroundColor: 'white',
    marginLeft: 50,
    marginTop:90
  },
  image:{
    position:'absolute',
    resizeMode:'center',
    transform: [{ translateX: -190 }, { translateY: -45 }]
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