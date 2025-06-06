import {View, Text, TextInput, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import * as Icon from "react-native-feather";
import {themeColors} from "@/theme";
import Categories from "@/components/categories";
import {FeaturedRow} from "@/components/featuredRow";
import {getFeaturedRestaurants} from "@/api";
import {Restaurant} from "@/interfaces/restaurant";

export default function HomeScreen() {
    const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

    useEffect(() => {
        getFeaturedRestaurants().then (data => {
            setFeaturedRestaurants(data)
        })
    }, [])

  return (
    <SafeAreaView className="bg-white" >
        {/*SEARCH BAR*/}
        <StatusBar style="dark"/>
        <View className="flex-row items-center gap-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 mr-2">
                <Icon.Search height="25" width="25" stroke="gray"/>
                <TextInput placeholder="Restaurants" placeholderTextColor="gray" className="ml-2 flex-1"/>
                <View className="flex-row items-center gap-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray"/>
                    <Text className="text-gray-600">New York, NYC</Text>
                </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3  rounded-full">
                <Icon.Sliders height="25" width="25" strokeWidth={2.5} stroke="white"/>
            </View>
        </View>

        {/*MAIN*/}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
            {/*CATEGORIES*/}
            <Categories/>

            {/*FEATURED*/}
            <View className="mt-5">
                {
                    featuredRestaurants.map((item: { name: string, restaurants: Restaurant[], description: string }, index: number) => {
                    return(
                        <FeaturedRow
                        key={index}
                        title={item.name}
                        restaurants={item.restaurants}
                        description={item.description}/>
                    )
                    })
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}