import {View, Text, Image} from "react-native";
import React, {useEffect} from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "@/interfaces/navigation";
export default function OrderPreparingScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 3000);
    }, [navigation])
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require("../assets/images/delivery.gif")} className="h-80 w-80"/>
    </View>
  );
}