
// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import LandingScreen from "../eventTerp/screens/Landing.js";
import AddEvent from "../eventTerp/screens/AddEvent.js";
import Swipes from "../eventTerp/screens/Swipes.js";
import Calendar from "../eventTerp/screens/Calendar.js";


const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='Home' 
          component={LandingScreen}
          options={{
            tabBarIcon: ({focused}) => <AntDesign name='home' size='20' color='#ffd200' />,
          }}
          />


        <Tab.Screen 
        name='Add Event' 
        component={AddEvent}
        options={{
          tabBarIcon: ({focused}) => <AntDesign name='pluscircleo' size='20' color='#ffd200' />,
        }}
        />
        <Tab.Screen 
        name='Swipes' 
        component={Swipes}
        options={{
          tabBarIcon: ({focused}) => <AntDesign name='arrowright' size='20' color='#ffd200' />,
        }}
        />
        <Tab.Screen 
        name='Calendar' 
        component={Calendar}
        options={{
          tabBarIcon: ({focused}) => <AntDesign name='calendar' size='20' color='#ffd200' />,
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}