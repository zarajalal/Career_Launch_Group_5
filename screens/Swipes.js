// Juhi
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
export default function Swipes() {
  const card = {
    image: require('../assets/terpimg.png'),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Swipes</Text>
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
    // flex: .8,
    height: '80%',
    width: '90%',
    marginTop: 10,
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
    marginTop: 10,
  },
})
