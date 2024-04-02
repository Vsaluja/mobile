import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaureatesList from '../screens/LaureatesList';
import LaureateDetails from '../screens/LaureateDetails';




const Stack = createNativeStackNavigator();

export default function LaureateStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Laureates List" component={LaureatesList} />
            <Stack.Screen name="Laureate Details" component={LaureateDetails} />
        </Stack.Navigator>
    );
}
