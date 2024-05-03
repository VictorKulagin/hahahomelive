import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";




export const ScreenProfile = () => {

    const  navigation = useNavigation();
    const handleNavigateToScreen = () => {
        // @ts-ignore
        navigation.navigate("ScreenRent");
    }

    const handleNavigateToScreenDaily = () => {
        // @ts-ignore
        navigation.navigate("ScreenDaily");
    }

    return (
        <View>
            <Text>{"Профиль"}</Text>
            <TouchableOpacity onPress={() => handleNavigateToScreenDaily()}>
                <Text>Аренда</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateToScreen()}>
                <Text>Посуточно</Text>
            </TouchableOpacity>
        </View>
    )
}