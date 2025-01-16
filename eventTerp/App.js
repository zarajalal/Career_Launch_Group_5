
// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from "../eventTerp/screens/Landing.js";
import AddEvent from "../eventTerp/screens/AddEvent.js";
import Swipes from "../eventTerp/screens/Swipes.js";
import Calendar from "../eventTerp/screens/Calendar.js";


const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={LandingScreen}/>
        <Stack.Screen name='Add Event' component={AddEvent}/>
        <Stack.Screen name='Swipes' component={Swipes}/>
        <Stack.Screen name='Calendar' component={Calendar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}