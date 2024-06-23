/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {ScreenRent} from './src/ScreenRent.tsx';
import {ScreenDaily} from './src/ScreenDaily.tsx';
import {ScreenMain} from './src/Tabs/ScreenMain.tsx';
import {CardScreenRent} from './src/CardScreenRent.tsx';
import {ScreenFavorites} from './src/Tabs/ScreenFavorites.tsx';
import {ScreenPost} from './src/Tabs/ScreenPost.tsx';
import {ScreenMessages} from './src/Tabs/ScreenMessages.tsx';
import {ScreenProfile} from './src/Tabs/ScreenProfile.tsx';
import {Home} from './src/Home.tsx';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#274abb',
        tabBarInactiveTintColor: '#444',
      }}>
      <Tab.Screen
        name="Главная"
        component={StackContainer}
        options={{
          headerShown: false,
          tabBarLabel: 'Главная',
          tabBarIcon: () => (
            <Image
              source={require('./src/image/free-icon-home-748015.png')}
              style={{width: 30, height: 30}}
              tintColor={'#274abb'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Избранное"
        component={ScreenFavorites}
        options={{
          headerShown: true,
          tabBarLabel: 'Избранное',
          tabBarIcon: ({color = '#000000', size = 30}) => (
            <Image
              source={require('./src/image/free-icon-favorite-121727.png')}
              style={{width: 30, height: 30}}
              tintColor={'#274abb'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Разместить"
        component={ScreenPost}
        options={{
          headerShown: true,
          tabBarLabel: 'Разместить',
          tabBarIcon: ({color = '#000000', size = 30}) => (
            <Image
              source={require('./src/image/free-icon-post-7263985.png')}
              style={{width: 30, height: 30}}
              tintColor={'#274abb'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Сообщения"
        component={ScreenMessages}
        options={{
          headerShown: true,
          tabBarLabel: 'Сообщения',
          tabBarIcon: ({color = '#000000', size = 30}) => (
            <Image
              source={require('./src/image/free-icon-speech-bubble-2462719.png')}
              style={{width: 30, height: 30}}
              tintColor={'#274abb'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={ScreenProfile}
        options={{
          headerShown: true,
          tabBarLabel: 'Профиль',
          tabBarIcon: ({color = '#000000', size = 30}) => (
            <Image
              source={require('./src/image/free-icon-user-1077063.png')}
              style={{width: 30, height: 30}}
              tintColor={'#274abb'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Главная" component={Home} />
      <Stack.Screen
        name="ScreenRent"
        component={ScreenRent}
        /*component={ScreenRentContainer}*/ options={{
          headerShown: true,
          title: 'Долгосрочная аренда',
        }}
      />
      <Stack.Screen
        name="CardScreenRent"
        component={CardScreenRent}
        options={{headerShown: false, title: ''}}
      />
      <Stack.Screen
        name="ScreenDaily"
        component={ScreenDaily}
        options={{headerShown: true, title: 'Посуточно'}}
      />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabContainer />
    </NavigationContainer>
  );
}

export default App;
