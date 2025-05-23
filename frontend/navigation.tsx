import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import RestaurantScreen from "@/screens/RestaurantScreen";
import CartScreen from "@/screens/CartScreen";
import OrderPreparingScreen from "@/screens/OrderPreparingScreen";
import DeliveryScreen from "@/screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (

            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" component={CartScreen} options={{presentation: 'modal'}}/>
                <Stack.Screen name="OrderPreparing" component={OrderPreparingScreen} options={{presentation: 'fullScreenModal'}}/>
                <Stack.Screen name="Delivery" component={DeliveryScreen} options={{presentation: 'fullScreenModal'}}/>
            </Stack.Navigator>
    )
}