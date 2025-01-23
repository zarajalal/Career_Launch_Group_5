import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';



export default function Interests() {
  const [interests, setInterests]=useState([]);
  
  const saveInterest = (title) => {
    if (!interests.includes(title)) {
      setInterests((prevInts) => {
        const updatedInterests = [...prevInts, title];
        console.log(updatedInterests); 
        return updatedInterests; 
      });
    }
    if (interests.includes(title)){
      setInterests((prevInts) => prevInts.filter((interests) => interests !== title )
    )
    }
  };

  return (
    <View style={styles.container}>
      //Render interests if the list is not empty
      {interests.length > 0 && (
        <View style={styles.intlist}>
          {interests.map((interest, index) => (
            <View key={index} style={styles.intItem}>
              <Text style={styles.inttext}>{interest}</Text>
            </View>
          ))}
        </View>
      )}
      
      <Text style={styles.heading}>What Are Your Interests?</Text>

      
      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 200, right:270 }]}  onPress={() => saveInterest('Academic')}>
        <Text style={styles.buttontext}> Academic </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 200, right:150 }]} onPress={() => saveInterest('Career Development')}>
        <Text style={styles.buttontext}>Career Development</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 200, right:30 }]} onPress={() => saveInterest('Competition')}>
        <Text style={styles.buttontext}>Competition</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 295, right:150 }]} onPress={() => saveInterest('Cultural')}>
        <Text style={styles.buttontext}>Cultural</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 295, right:270 }]} onPress={() => saveInterest('Educational')}>
        <Text style={styles.buttontext}>Educational</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 390, right:150 }]} onPress={() => saveInterest('Entertainment')}>
        <Text style={styles.buttontext}>Entertainment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 390, right:30 }]} onPress={() => saveInterest('Health/Wellness')}>
        <Text style={styles.buttontext}>Health/Wellness</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 390, right:270 }]} onPress={() => saveInterest('Lecture/Speaker')}>
        <Text style={styles.buttontext}>Lecture/Speaker</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 485, right:270 }]} onPress={() => saveInterest('Music')}>
        <Text style={styles.buttontext}>Music</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 485, right:150 }]} onPress={() => saveInterest('Networking')}>
        <Text style={styles.buttontext}>Networking</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 295, right:30 }]} onPress={() => saveInterest('Off-Campus')}>
        <Text style={styles.buttontext}>Off-Campus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { position:'absolute', top: 485, right:30 }]} onPress={() => saveInterest('Religious')}>
        <Text style={styles.buttontext}>Religious</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    width:400
  },
  intlist:{
    flexDirection: 'row',
    flexWrap:'wrap',
    left:0,
    position:'absolute',
    top:90,
    backgroundColor:'rgba(300, 0, 0, 0.5)',
    opacity:10,
    borderRadius:90,
  },
  inttext:{
    fontSize:15,
    position:'center',
    margin:5,
    position:'relative',
    left:15,
    fontFamily: 'Quicksand',

  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'red',
    top:'30',
    position:'absolute',
    fontFamily: 'Quicksand-Bold',
},
button:{
  backgroundColor:'gold',
  width:100,
  height:50,
  borderRadius:50,
},

buttontext:{
  textAlign:'center',
  fontWeight:'bold',
  position:'relative',
  top:15,
  fontFamily: 'Quicksand-SemiBold',
},
})