import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import * as Icon from "react-native-feather";
import {themeColors} from "@/theme";
import DishRow from "@/components/dishRow";
import CartIcon from "@/components/cartIcon";
import {StatusBar} from "expo-status-bar";
import {useDispatch} from "react-redux";
import {setRestaurant} from "@/slices/restaurantSlice";
import {urlFor} from "@/sanity";
import {Restaurant} from "@/interfaces/restaurant";
import {Dish} from "@/interfaces/dish";


export default function RestaurantScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let restaurant: Restaurant = params as Restaurant;
    const dispatch = useDispatch();
    useEffect(() => {
        if (restaurant && restaurant._id) {
            dispatch(setRestaurant({...restaurant}))
        }
    }, [restaurant, dispatch])

    return (
        <View>
            <CartIcon />
            <StatusBar style="light"/>
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={{uri: urlFor(restaurant.image).url()}}/>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }} className="bg-white -mt-12 pt-6">
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{restaurant.name}</Text>
                        <View className="flex-row gap-x-2 my-1">
                            <View className="flex-row items-center gap-x-1">
                                <Image source={require('../assets/images/fullstar.png')} className="h-4 w-4"/>
                                <Text className="text-xs">
                                    <Text className="text=green-700">{restaurant.rating}</Text>
                                    <Text className="text-gray-700">({restaurant.reviews} reviews) · &nbsp;
                                        {
                                            <Text className="font-semibold">{restaurant.type?.name}</Text>
                                        }
                                    </Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center gap-x-1">
                                <Icon.MapPin color="gray" width="15" height="15"/>
                                <Text className="text-gray-700 text-xs">Nearby · {restaurant.address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
                    </View>
                </View>
            </ScrollView>
            <ScrollView className="h-2/3">
                <View className="pb-36 bg-white -mb-10">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/*DISHES*/}
                    {
                        restaurant.dishes.map((dish: Dish, index: number) => <DishRow
                            dish={{...dish}} key={index}/>)
                    }
                </View>
            </ScrollView>
        </View>
    );
}