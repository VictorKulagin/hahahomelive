import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Empty = () => {
  return <Text style={styles.empty}>Карточек нет... / No data</Text>;
};

const styles = StyleSheet.create({
  empty: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});
