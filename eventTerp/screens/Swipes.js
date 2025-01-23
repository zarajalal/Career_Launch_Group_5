// Juhi
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
export default function Swipes() {
  const card = {
    image: require('../assets/terpimg.png'),
  };

  return (
    <View style={styles.container}>
      <Card card = {card}/>
      <View style={styles.options}>
        <Image source={require('../assets/x-mark.png')}/>
        <Image source={require('../assets/check-mark.png')}/>
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
