import {useState, useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  FlatListView,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
} from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons';

export const Dropdown = () => {
  return (
    <View style={styles.dropdownContainer}>
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <View style={styles.leftIcon}>
            <Material name={'folder-open'} size={18} color={'#274abb'} />
          </View>
          <View style={styles.titleBox}>
            <Text style={{fontSize: 14, color: '#383838', fontWeight: '300'}}>
              Выберете город
            </Text>
          </View>

          <View style={styles.arrowRight}>
            <Material name={'chevron-right'} size={18} color={'#274abb'} />
            <View style={styles.circle} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.list}>
        <View style={[styles.searchContainer, {opacity: 1}]}>
          <View style={styles.searchBar}>
            <View style={styles.magnify}>
              <Material name={'magnify'} size={22} color={'#adadad'} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    height: 'auto',
    alignSelf: 'stretch',
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1.8,
    borderColor: '#274abb',
    borderRadius: 5,
    zIndex: 10,
  },
  leftIcon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
    zIndex: 10,
  },
  titleBox: {
    position: 'absolute',
    left: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    zIndex: 0,
    borderRadius: 5,
  },
  arrowRight: {
    height: 50,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  circle: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(64, 122, 195, 0.08)',
    borderRadius: 50,
    position: 'absolute',
    zIndex: 0,
  },
  list: {
    height: 215,
    width: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 50,
    left: 0,
    borderRadius: 5,
    borderWidth: 1.8,
    borderColor: '#274abb',
    paddingHorizontal: 8,
    paddingTop: 8,
    zIndex: 0,
  },
  searchContainer: {
    flex: 1,
  },
  searchBar: {
    height: 25,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
  },
  magnify: {
    height: 10,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
