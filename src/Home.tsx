import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Constants from 'react-native';
export const Home = () => {
  const navigation = useNavigation();

  // @ts-ignore
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ScreenRent')}
        style={styles.buttonContainer3}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Долгосрочная Аренда</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ScreenDaily')}
        style={styles.buttonContainer3}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Посуточно</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /*marginTop: Constants.st,*/
  },
  buttonContainer: {
    marginVertical: 20,
    height: 40,
    marginHorizontal: 10,
    /*backgroundColor: '#5d57ff',*/
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer3: {
    marginVertical: 5,
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#274abb',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#274abb',
    fontSize: 18,
  },
});
