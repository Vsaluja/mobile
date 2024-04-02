import { NavigationContainer } from '@react-navigation/native';
import PrizesStack from './stacks/PrizesStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LaureatesList from './screens/LaureatesList';
import LaureateStack from './stacks/LaureateStack';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Laureates" component={LaureateStack} />
        <Tab.Screen name="Prizes" component={PrizesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

