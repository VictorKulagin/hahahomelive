import React, {useEffect, useRef} from 'react';
import {useLongRentStore} from './zstore/longRent.ts';

import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export const CardScreenRent = () => {
  const fetchRooms = useLongRentStore(state => state.fetchRooms);
  const rooms = useLongRentStore(state => state.rooms);
  const selectedProductId = useLongRentStore(state => state.selectedProductId);
  const selectedProductTitle = useLongRentStore(
    state => state.selectedProductTitle,
  );
  const selectedProductPictures = useLongRentStore(
    state => state.selectedProductPictures,
  );
  const selectedProductPicturesMass = useLongRentStore(
    state => state.selectedProductPicturesMass,
  );

  const selectedProductPrice = useLongRentStore(
    state => state.selectedProductPrice,
  );

  const selectedProductCurrency = useLongRentStore(
    state => state.selectedProductCurrency,
  );

  const selectedProductCity = useLongRentStore(
    state => state.selectedProductCity,
  );

  const selectedProductCityArea = useLongRentStore(
    state => state.selectedProductCityArea,
  );

  const selectedProductRooms = useLongRentStore(
    state => state.selectedProductRooms,
  );

  const selectedProductFloor = useLongRentStore(
    state => state.selectedProductFloor,
  );

  const selectedProductAnons = useLongRentStore(
    state => state.selectedProductAnons,
  );

  const selectedProductSeries = useLongRentStore(
    state => state.selectedProductSeries,
  );

  const selectedProductSeriesName = useLongRentStore(
    state => state.selectedProductSeriesName,
  );

  const selectedProductRepair = useLongRentStore(
    state => state.selectedProductRepair,
  );

  const selectedProductRepairName = useLongRentStore(
    state => state.selectedProductRepairName,
  );

  const {height, width} = Dimensions.get('window');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  /* console.log(selectedProductPicturesMass[activeIndex]);*/
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text
            style={{
              fontSize: 28,
              color: '#000000',
            }}>{`${selectedProductTitle}`}</Text>
          <Text>{`${selectedProductCity} , ${selectedProductCityArea}`}</Text>
          <Text
            style={{
              fontSize: 28,
              color: '#274abb',
            }}>{`${selectedProductPrice} ${
            selectedProductCurrency === 'Сомы' ? 'KGS' : selectedProductCurrency
          }`}</Text>
        </View>

        <View style={{flex: 1}}>
          <View style={{height: height / 2.3}}>
            <FlatList
              pagingEnabled
              horizontal
              onScroll={e => {
                // @ts-ignore
                console.log(e.nativeEvent.contentOffset.x + ' x' + width);
                setSelectedIndex(
                  (e.nativeEvent.contentOffset.x / width).toFixed(0),
                );
              }}
              data={selectedProductPicturesMass}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <Image
                    source={{
                      uri: `https://hahahome.live/${
                        typeof selectedProductPicturesMass[activeIndex] ===
                        'object'
                          ? selectedProductPicturesMass[activeIndex]?.value
                          : selectedProductPicturesMass[activeIndex]
                      }`,
                    }}
                    style={{width: width, height: height / 2.3}}
                  />
                );
              }}
            />
            <View
              style={{
                width: width,
                height: 40,
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {selectedProductPicturesMass?.map(
                (picture: any, index: number) => {
                  return (
                    <View
                      style={{
                        backgroundColor:
                          selectedIndex == index ? '#BeBeBe' : '#f2f2f2',
                        height: 5,
                        width: 20,
                      }}
                    />
                  );
                },
              )}
            </View>
          </View>
          <View>
            <FlatList
              data={selectedProductPicturesMass}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: width / 3,
                      height: height / 5,
                      borderWidth: 4,
                      borderColor: '#f2f2f2',
                    }}
                    onPress={() => {
                      setActiveIndex(index);
                      /*setActiveIndex(0);*/
                    }}>
                    <Image
                      source={{
                        uri: `https://hahahome.live/${
                          typeof item === 'object' ? item?.value : item
                        }`,
                      }}
                      style={{width: '100%', height: '100%'}}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.blockRooms}>
            <View>
              <Text>{`${selectedProductRooms}`}</Text>
              <Text>{'Квартира'}</Text>
            </View>
            <View>
              <Text>{`${selectedProductFloor}`}</Text>
              <Text>{'Комната'}</Text>
            </View>
          </View>
          <View>
            <Text>{'Описание'}</Text>
            <Text>{`${selectedProductAnons}`}</Text>
          </View>
          <View>
            <Text>{'Общая информация'}</Text>
            <View style={styles.blockGeneralInformation}>
              {selectedProductSeries !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductSeriesName}`}</Text>
                  {selectedProductSeries !== null && (
                    <Text>{`${selectedProductSeries}`}</Text>
                  )}
                </View>
              )}
              {selectedProductRepair !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductRepairName}`}</Text>
                  {selectedProductSeries !== null && (
                    <Text>{`${selectedProductRepair}`}</Text>
                  )}
                </View>
              )}
              <View style={styles.blockGeneralInformationEach}>
                <Text style={styles.optionsHome}>{'Тип аренды'}</Text>
                <Text>{'Длительно'}</Text>
              </View>
              <View style={styles.blockGeneralInformationEach}>
                <Text style={styles.optionsHome}>{'Можно с животными'}</Text>
                <Text>{'Нет'}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  blockRooms: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#707070',
    width: '100%',
    display: 'block',
    listStyle: 'none',
    margin: 0,
    paddingBottom: 24,
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  blockGeneralInformation: {
    flex: 1,
    flexDirection: 'column',
    /*justifyContent: 'space-between', // You can use 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', or 'space-evenly'
    flexWrap: 'wrap',
    alignContent: 'flex-start',*/
  },
  blockGeneralInformationEach: {
    flexDirection: 'row',
  },

  optionsHome: {
    width: '50%',
    textAlign: 'left',
    paddingRight: 50,
    /*width: '100%',*/
  },
});
