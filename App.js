import { NavigationContainer } from '@react-navigation/native';
import PrizesStack from './stacks/PrizesStack';

export default function App() {
  return (
    <NavigationContainer>
      <PrizesStack />
    </NavigationContainer>
  );
}

