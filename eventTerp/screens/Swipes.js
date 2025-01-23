// Juhi
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
export default function Swipes() {

  //0=name, 1=location, 2=date, 3=time, 4=host, 5=tags
  const data = [
    ["Cosmic Bowling", "Terpzone", "2/1/25", "20:00", "Terpzone, Adele H. Stamp Student Union-Center for Campus Life", "Social, Sports/Recreation, Entertainment"],
    ["Study Abroad Fair", "Grand Ballroom, Adele H. Stamp Student Union", "2/3/25", "14:00", "Education Abroad", "Academic, Cultural, Educational, Career Development, Networking"],
    ["Aerostructures Event", "Cypress Building", "2/3/25", "17:00", "Terrapin Rocket Team", "Educational, Career Development"],
    ["Ganji Workshop", "Terpzone Activities Room in STAMP", "2/3/25", "18:00", "Korean Pop Dance Club", "Music, Social"],
    ["Bible Study", "Memorial Chapel Room 2116", "2/4/25", "17:00", "The Humble Walk", "Religious"],
    ["RUF Large Group", "Garden Chapel", "2/5/25", "18:00", "Reformed University Fellowship", "Religious"],
    ["All Niter's Wizardly Build a Terp", "Grand Ballroom Lounge", "2/7/25", "17:00", "Stamp Special Events and Programs, Student Entertainment Events", "Social"],
    ["Maryland Minza Mixer 7.0", "Samuel Riggs IV Alumni Center", "2/7/25", "18:00", "Maryland Minza", "Cultural, Social, Music, Competition"],
    ["STAMP's All Nighter", "Stamp Student Union", "2/7/25", "17:00", "Stamp Special Events and Programs, Student Entertainment Events", "Social, Entertainment"],
    ["Cosmic Bowling", "Terpzone", "2/7/25", "20:00", "Terpzone, Adele H. Stamp Student Union-Center for Campus Life", "Social, Sports/Recreation, Entertainment"],
    ["College Night Ski Trip to Liberty Mountain", "Liberty Mountain Resort", "2/8/25", "13:30", "123 I Like to Ski :)", "Off-Campus"],
    ["EESA Date Auction", "Stamp Colony Ballroom 2203", "2/8/25", "13:00", "Ethiopian & Eritrean Students Association", "Cultural, Social, Music"],
    ["Cosmic Bowling", "Terpzone", "2/8/25", "20:00", "Terpzone, Adele H. Stamp Student Union-Center for Campus Life", "Social, Sports/Recreation, Entertainment"],
    ["Aerostructures Event", "Cypress Building", "2/10/25", "17:00", "Terrapin Rocket Team", "Educational, Career Development"],
    ["Ganji Workshop", "Terpzone Activities Room in STAMP", "2/10/25", "18:00", "Korean Pop Dance Club", "Music, Social"],
    ["Free West Coast Swing Dance Lessons (Beginner and Beyond Beginner)", "Prince George's Room", "2/10/25", "19:00", "Swing Dance Club at UMD", "Cultural, Music"],
    ["Wellness Course Series", "Lee Building (Room 2124)", "2/11/25", "12:00", "Graduate Pathways", "Health/Wellness"],
    ["GRadulting Workshop Series: How do I prepare my taxes?, international student session", "Online", "2/11/25", "12:00", "Graduate Student Legal Aid", "Lecture/Speaker"],
    ["GRadulting Workshop Series: What should I know before signing an employment contract?", "Online", "2/11/25", "12:30", "Graduate Student Legal Aid", "Lecture/Speaker"],
    ["stART", "College Park United Methodist Church", "2/11/25", "14:30", "The Humble Walk", "Religious"],
    ["Bible Study", "Memorial Chapel Room 2116", "2/11/25", "17:00", "The Humble Walk", "Religious"],
    ["STAMP Text Quest", "STAMP Student Union Student Engagement Suite", "2/11/25", "17:00", "Transfer and Off-Campus Student Life", "Social"],
    ["Suit Up and Be Civil", "Samuel Riggs IV Alumni Center", "2/11/25", "18:00", "American Society of Civil Engineers", "Networking"]
]

  const card = {
    image: require('../assets/terpimg.png'),
  };

  return (
    <View style={styles.container}>
      <Card card = {card}/>
      <View style={styles.options}>

        <TouchableOpacity onPress={ () => {
          console.log('User declined this event.')
        }}>        
          <Image source={require('../assets/x-mark.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => {
          console.log('User selected this event.')
        }}>
          <Image source={require('../assets/check-mark.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={card.image} style={styles.cardImage} />
      <View style={styles.details}>
        <Text style={styles.text}>[EVENT NAME]</Text>
        <Text style={{fontSize: 18, fontFamily: 'Quicksand-Light'}}>[EVENT LOCATION]</Text>
        <Text style={{fontSize: 18, fontFamily: 'Quicksand-Light'}}>[EVENT DATE]</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 24,
  },

  cardImage: {
    width: 160,
    flex: .9,
    resizeMode: 'contain'
  },
  card: {
    height: '85%',
    width: '90%',
    marginTop: 20,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 15,
  },
  details: {
    // justifyContent: start,
    width: '100%',
    padding: 10,
  }
})
