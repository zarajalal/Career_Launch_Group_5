//Alex

import { View, Text, StyleSheet, Pressable, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';

export default function CalendarComponent() {
  const [open, setOpen] = useState(false);
  const [openDay, setOpenDay] = useState(false);
  const [selected, setSelected] = useState({});
  const [showCard, setShowCard] = useState(false);
  const [cardIndex, setCardIndex] = useState(null);

  const data = [
    ["Cosmic Bowling", "Terpzone", "2/1/25", "20:00", "Terpzone, Adele H. Stamp Student Union-Center for Campus Life", "Social, Sports/Recreation, Entertainment"],
    ["Ganji Workshop", "Terpzone Activities Room in STAMP", "2/3/25", "18:00", "Korean Pop Dance Club", "Music, Social"],
    ["Bible Study", "Memorial Chapel Room 2116", "2/4/25", "17:00", "The Humble Walk", "Religious"],
    ["RUF Large Group", "Garden Chapel", "2/5/25", "18:00", "Reformed University Fellowship", "Religious"],
    ["Maryland Minza Mixer 7.0", "Samuel Riggs IV Alumni Center", "2/7/25", "18:00", "Maryland Minza", "Cultural, Social, Music, Competition"],
    ["College Night Ski Trip to Liberty Mountain", "Liberty Mountain Resort", "2/8/25", "13:30", "123 I Like to Ski :)", "Off-Campus"],
    ["Ganji Workshop", "Terpzone Activities Room in STAMP", "2/10/25", "18:00", "Korean Pop Dance Club", "Music, Social"],
    ["Bible Study", "Memorial Chapel Room 2116", "2/11/25", "17:00", "The Humble Walk", "Religious"],
  ];

  const names = data.map((row) => row[0]);
  const locations = data.map((row) => row[1]);
  const dates = data.map((row) => row[2]);

  const formatDate = (dateStr) => {
    const [m, d, y] = dateStr.split("/").map((v) => v.padStart(2, "0"));
    return `20${y.slice(-2)}-${m}-${d}`;
  };

  useEffect(() => {
    const formattedDates = {};
    dates.map(formatDate).forEach((date) => {
      formattedDates[date] = { marked: true, dotColor: "blue", selected: true, selectedColor: "red" };
    });
    setSelected(formattedDates);
  }, []);

  function handleOnPress() {
    setOpen(!open);
  }

  function handleOnDayPress() {
    setOpenDay(!openDay);
  }

  function findDate(indexDate) {
    for (let i = 0; i < dates.length; i++) {
      if (dates[i] === indexDate) {
        return i;
      }
    }
    return -1;
  }

  function handleDayDescription(day) {
    const date = day.dateString;
    const indexDate = findDate(date);

    if (indexDate !== -1) {
      setCardIndex(indexDate);
      setShowCard(true);
      handleOnDayPress();
    }
  }

  return (
    <View style={styles.pageWrap}>
      <View style={styles.headers}>
        <Text style={[styles.headerOne, styles.headerTwo]}>Calendar</Text>
      </View>

      <Pressable onPress={handleOnPress}>
        <View style={styles.calenderWrapper}>
          <View style={styles.boxCalender}>
            <Text style={styles.calenderText}>Calendar</Text>
          </View>
        </View>
      </Pressable>

      <Modal animationType='slide' transparent={true} visible={open}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Calendar
              onDayPress={handleDayDescription} 
              current={'2025-01-24'}
              markingType={"multi-dot"}
              markedDates={selected}
             
            />
            <Button title='close' onPress={handleOnPress} />
          </View>
        </View>
      </Modal>

      {showCard && (
        <View>
          <Card card={{ name: names[cardIndex], location: locations[cardIndex], date: dates[cardIndex] }} />
          <Button title='close' onPress={() => setShowCard(false)} />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({

  card: {
    height: '50%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(219, 123, 123)',
  },
  details: {
    width: '70%',
    padding: 10,
  },
  text:{
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 24,
  },
  
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
  backgroundColor: '#fdf5e6',
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
    top: 40,
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
  height: 480,
  width: 300,
  borderRadius:25,
  position: 'absolute',
  justifyContent: 'center',
  alignContent: 'flex-end',
  backgroundColor: 'rgb(243, 40, 21)',
  verticalAlign: 'bottom',
  alignSelf: 'center',
  top: 140,
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
