
// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LandingScreen from "../eventTerp/screens/Landing.js";
import AddEvent from "../eventTerp/screens/AddEvent.js";
import Swipes from "../eventTerp/screens/Swipes.js";
import Calendar from "../eventTerp/screens/Calendar.js";


const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={LandingScreen}/>
        <Tab.Screen name='Add Event' component={AddEvent}/>
        <Tab.Screen name='Swipes' component={Swipes}/>
        <Tab.Screen name='Calendar' component={Calendar}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}