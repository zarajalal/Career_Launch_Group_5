//Alex

import { View, Text, StyleSheet, Pressable, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import eventList from './CVS_Data.json';

export default function CalendarComponent() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const formattedDates = {};

    eventList.forEach(([name, location, date, startTime, host, tags]) => {
      if (!formattedDates[date]) {
        formattedDates[date] = { marked: true, dots: [{ color: "blue" }] };
      } else {
        formattedDates[date].dots.push({ color: "blue" });
      }
    });

    setSelected(formattedDates);
  }, []);

  function handleOnPress() {
    setOpen(!open);
  }


  return (

    <View style={styles.pageWrap}>

        <View style={styles.headers}>
            <Text style={styles.headerOne}>Your events</Text>

          <View style={styles.box}>
              <Text style={styles.storyText}>Add an Event</Text>
          </View>

          <Text style={[styles.headerOne, styles.headerTwo]}>Calendar</Text>
        </View>

        <Pressable onPress={handleOnPress}>
          <View style={styles.calenderWrapper}>
            <View style={styles.boxCalender}>
                <Text style={styles.calenderText}>Calendar</Text>
            </View>
          </View>
        </Pressable>

        <Modal
        animationType='slide'
        transparent={true}
        visible={open}
        >

          <View style={styles.centerView}>
            <View style={styles.modalView}>

              <Calendar
                onDayPress={day => {
                  console.log('selected day', day);
                }}

                current={'2025-01-024'}

                markingType={"multi-dot"}

                markedDates={{
                  [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'rgb(245, 110, 110)'},
                }}
              />

            <Button title='close' onPress={handleOnPress}/>
            
            </View>

          </View>


        </Modal>


    </View>
  );
}


const styles = StyleSheet.create({
  
  /// Calendar
  centerView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView:{
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 5,
    gap: 30,

  },



pageWrap:{
  flex: 1,
},
  // hearders
  headers:{
    top: 40,
    left: 20,
    gap: 35,
  },
  headerOne: {
    justifyContent: "flex-start",
    fontWeight: 'bold', 
    fontFamily: 'Futura',
    fontSize: 25,
  },
  headerTwo: {
    fontSize: 30,
  },

// box
box: {
  height: 110,
  width: 75,
  borderRadius:25,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.3)',
  bottom: 5,
},
boxBeahvior:{
  flexDirection: 'row',
  gap: 5,
},
  storyText: {
    color: 'white',
    fontWeight: 'bold', 
    fontFamily: 'Futura',
    fontSize: 14,
    textAlign: 'center',
},

boxCalender:{
  height: 350,
  width: 300,
  borderRadius:25,
  position: 'absolute',
  justifyContent: 'center',
  alignContent: 'flex-end',
  backgroundColor: 'rgb(243, 40, 21)',
  verticalAlign: 'bottom',
  alignSelf: 'center',
  top: 100,
  borderColor: 'rgb(0, 0, 0)',
  borderWidth: 10,
},
calenderText:{
  fontSize: 30,
  color: 'rgb(255, 255, 255)',
  fontWeight: 'bold', 
  textAlign: 'center',
},
calenderWrapper:{
  alignItems: 'flex-end',
}
  

})
