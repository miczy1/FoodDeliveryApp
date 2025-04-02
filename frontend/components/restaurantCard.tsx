import {View, Text, TouchableWithoutFeedback, Image, ImageSourcePropType} from "react-native"
import React from 'react'
import * as Icon from "react-native-feather";
import {themeColors} from "@/theme";
import {useNavigation} from "@react-navigation/native";
import {urlFor} from "@/sanity";


export const RestaurantCard = ({restaurant}: { restaurant: any }) => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback
            onPress={() => { // @ts-ignore
                navigation.navigate("Restaurant", {...restaurant})
            }}
        >
            <View style={{
                shadowColor: themeColors.bgColor(0.2),
                shadowRadius: 7

            }} className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={{uri: urlFor(restaurant.image).url()}}/>
                <View className="px-3 pb-4 gap-y-2">
                    <Text className="text-lg font-bold pt-2 ">{restaurant.name}</Text>
                    <View className="flex-row items-center gap-x-1">
                        <Image source={require('../assets/images/fullstar.png')} className="h-4 w-4"/>
                        <Text className="text-xs">
                            <Text className="text-green-700">{restaurant.rating}</Text>
                            <Text className="text-gray-700">({restaurant.reviews} reviews) ·
                                <Text className="font-semibold">{restaurant?.type?.name}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-x-1">
                        <Icon.MapPin color="gray" width="15" height="15"/>
                        <Text className="text-gray-700 text-xs">Nearby · {restaurant.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}