import React, {useEffect, useRef} from 'react';
import {useLongRentStore} from './zstore/longRent.ts';
import {Button, Linking} from 'react-native';

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

  const selectedProductRentType = useLongRentStore(
    state => state.selectedProductRentType,
  );

  const selectedProductRentTypeName = useLongRentStore(
    state => state.selectedProductRentTypeName,
  );

  const selectedProductTermsAnimals = useLongRentStore(
    state => state.selectedProductTermsAnimals,
  );

  const selectedProductTermsAnimalsName = useLongRentStore(
    state => state.selectedProductTermsAnimalsName,
  );

  const selectedProductTermsChildren = useLongRentStore(
    state => state.selectedProductTermsChildren,
  );

  const selectedProductTermsChildrenName = useLongRentStore(
    state => state.selectedProductTermsChildrenName,
  );

  const selectedProductFOT = useLongRentStore(
    state => state.selectedProductFOT,
  );

  const selectedProductFOTName = useLongRentStore(
    state => state.selectedProductFOTName,
  );

  const selectedProductCOMM = useLongRentStore(
    state => state.selectedProductCOMM,
  );

  const selectedProductCOMMName = useLongRentStore(
    state => state.selectedProductCOMMName,
  );

  const selectedProductFURN = useLongRentStore(
    state => state.selectedProductFURN,
  );

  const selectedProductFURNName = useLongRentStore(
    state => state.selectedProductFURNName,
  );

  const selectedProductHHAP = useLongRentStore(
    state => state.selectedProductHHAP,
  );

  const selectedProductHHAPName = useLongRentStore(
    state => state.selectedProductHHAPName,
  );

  const selectedProductAP_IMP = useLongRentStore(
    state => state.selectedProductAP_IMP,
  );

  const selectedProductAP_IMPName = useLongRentStore(
    state => state.selectedProductAP_IMPName,
  );

  const selectedProductSettlement = useLongRentStore(
    state => state.selectedProductSettlement,
  );

  const selectedProductSettlementName = useLongRentStore(
    state => state.selectedProductSettlementName,
  );

  const selectedProductSeller = useLongRentStore(
    state => state.selectedProductSeller,
  );

  const selectedProductSellerName = useLongRentStore(
    state => state.selectedProductSellerName,
  );

  const selectedProductMAP_LAT = useLongRentStore(
    state => state.selectedProductMAP_LAT,
  );

  const selectedProductMAP_LNG = useLongRentStore(
    state => state.selectedProductMAP_LNG,
  );

  const selectedProductSellerPhone = useLongRentStore(
    state => state.selectedProductSellerPhone,
  );

  const selectedProductSellerPhoneName = useLongRentStore(
    state => state.selectedProductSellerPhoneName,
  );

  const {height, width} = Dimensions.get('window');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  /* console.log(selectedProductPicturesMass[activeIndex]);*/
  const openYandexMapsWithMarker = () => {
    const latitude = selectedProductMAP_LAT; // Широта
    const longitude = selectedProductMAP_LNG; // Долгота
    const zoom = 10; // Уровень масштабирования

    const mapUrl = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=${zoom}`;

    Linking.openURL(mapUrl);
  };

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
              {selectedProductFOT !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductFOTName}`}</Text>
                  {selectedProductFOT !== null && (
                    <Text>{`${selectedProductFOT}`}</Text>
                  )}
                </View>
              )}
              {selectedProductCOMM !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductCOMMName}`}</Text>
                  {selectedProductCOMM !== null && (
                    <Text>{`${selectedProductCOMM}`}</Text>
                  )}
                </View>
              )}
              {selectedProductFURN !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductFURNName}`}</Text>
                  {selectedProductFURN !== null && (
                    <Text>{`${selectedProductFURN}`}</Text>
                  )}
                </View>
              )}
              {selectedProductHHAP !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductHHAPName}`}</Text>
                  {selectedProductHHAP !== null && (
                    <Text>{`${selectedProductHHAP}`}</Text>
                  )}
                </View>
              )}
              {selectedProductAP_IMP !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductAP_IMPName}`}</Text>
                  {selectedProductAP_IMP !== null && (
                    <Text>{`${selectedProductAP_IMP}`}</Text>
                  )}
                </View>
              )}
              {selectedProductSettlement !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductSettlementName}`}</Text>
                  {selectedProductSettlement !== null && (
                    <Text>{`${selectedProductSettlement}`}</Text>
                  )}
                </View>
              )}
              {selectedProductSeller !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductSellerName}`}</Text>
                  {selectedProductSeller !== null && (
                    <Text>{`${selectedProductSeller}`}</Text>
                  )}
                </View>
              )}
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
                  {selectedProductRepair !== null && (
                    <Text>{`${selectedProductRepair}`}</Text>
                  )}
                </View>
              )}
              {selectedProductTermsAnimals !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductTermsAnimalsName}`}</Text>
                  {selectedProductTermsAnimals !== null && (
                    <Text>{`${selectedProductTermsAnimals}`}</Text>
                  )}
                </View>
              )}
              {selectedProductRentType !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductRentTypeName}`}</Text>
                  {selectedProductRentType !== null && (
                    <Text>{`${selectedProductRentType}`}</Text>
                  )}
                </View>
              )}

              {selectedProductTermsChildren !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductTermsChildrenName}`}</Text>
                  {selectedProductTermsChildren !== null && (
                    <Text>{`${selectedProductTermsChildren}`}</Text>
                  )}
                </View>
              )}
              <Button
                title="Открыть Яндекс Карты с маркером"
                onPress={openYandexMapsWithMarker}
              />
              {selectedProductSellerPhone !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      styles.optionsHome
                    }>{`${selectedProductSellerPhoneName}`}</Text>
                  {selectedProductSellerPhone !== null && (
                    <Text>{`${selectedProductSellerPhone}`}</Text>
                  )}
                </View>
              )}
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
  map: {
    flex: 1,
  },
});
