import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import React from 'react'
import {themeColors} from "@/theme";
import {RestaurantCard} from "@/components/restaurantCard";
import {FeaturedRows} from "@/interfaces/featuredRows";
import {Restaurant} from "@/interfaces/restaurant";



export const FeaturedRow: React.FC<FeaturedRows> = ({title, description, restaurants}: FeaturedRows) => {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text className="font-semibold" style={{color: themeColors.text}}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}} className="overflow-visible py-5">
                {
                    restaurants.map((restaurant: Restaurant, index: number) => {
                        return (
                            <RestaurantCard
                                restaurant={restaurant}
                                key={index}/>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}