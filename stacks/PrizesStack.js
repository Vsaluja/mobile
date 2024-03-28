import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories';
import Years from '../screens/Years';
import PrizeDetails from '../screens/PrizeDetails';



const Stack = createNativeStackNavigator();

export default function PrizesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Prizes Categories" component={Categories} />
            <Stack.Screen name="Prize Years" component={Years} />
            <Stack.Screen name="Prize Details" component={PrizeDetails} />
        </Stack.Navigator>
    );
}
