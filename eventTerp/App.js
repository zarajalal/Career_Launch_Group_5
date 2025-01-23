
// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

//Screens
import LandingScreen from "../eventTerp/screens/Landing.js";
import Swipes from "../eventTerp/screens/Swipes.js";
import Calendar from "../eventTerp/screens/Calendar.js";
import Interests from "../eventTerp/screens/Interests.js";

//Global State for Interests
import React from "react";
import { InterestsProvider } from "../eventTerp/screens/context/InterestsContext.js";
import interests from "../eventTerp/screens/Interests.js";

//

const Tab = createBottomTabNavigator();

export default function App() {

  const [loaded, error] = useFonts({
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
  });

  return (
    <InterestsProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: "gold" },
          }}
        >
          <Tab.Screen
            name="Home"
            component={LandingScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <AntDesign name="home" size={20} color={"black"} />
              ),
            }}
          />
          <Tab.Screen
            name="Interests"
            component={Interests}
            options={{
              tabBarIcon: ({ focused }) => (
                <AntDesign name="hearto" size={20} color={"black"} />
              ),
            }}
          />
          <Tab.Screen
            name="Swipes"
            component={Swipes}
            options={{
              tabBarIcon: ({ focused }) => (
                <AntDesign name="arrowright" size={20} color={"black"} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarIcon: ({ focused }) => (
                <AntDesign name="calendar" size={20} color={"black"} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </InterestsProvider>
  );
}