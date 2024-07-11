import React from "react";
import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export const ScreenMain = () => {
    const  navigation = useNavigation();

    return (
        <SafeAreaView>
        <TouchableOpacity>
            <Text>Главная</Text>
        </TouchableOpacity>


        </SafeAreaView>
    )
}
