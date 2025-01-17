
// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LandingScreen from "../eventTerp/screens/Landing.js";
import AddEvent from "../eventTerp/screens/AddEvent.js";
import Swipes from "../eventTerp/screens/Swipes.js";
import Calendar from "../eventTerp/screens/Calendar.js";


const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
  });

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