import React, {useEffect, useRef} from 'react';
import {useLongRentStore} from './zstore/longRent.ts';
import {Button, Linking, Platform, StatusBar, useColorScheme} from 'react-native';

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

  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState(colorScheme);

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

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
    <SafeAreaView style={[styles.container, {backgroundColor: theme === 'dark' ? '#000000' : '#fff'}]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text
            style={{
              fontSize: 28,
              /*color: '#000000',*/
              color: theme === 'dark' ? '#ffffff' : '#000000'
            }}>{`${selectedProductTitle}`}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./image/icons8-place-marker-50.png')}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
                /*tintColor: '#274abb',*/
                tintColor: theme === 'dark' ? '#eff3ff' : '#274abb'
              }}
            />
            <Text style={{color: theme === 'dark' ? '#ffffff' : '#707070'}}>
              {selectedProductCityArea
                ? `${selectedProductCity}, ${selectedProductCityArea}`
                : `${selectedProductCity}`}
            </Text>
          </View>
          {selectedProductPrice && (
            <Text
              style={{
                fontSize: 28,
                /*color: '#274abb',*/
                color: theme === 'dark' ? '#eff3ff' : '#274abb'
              }}>
              {`${selectedProductPrice.replace(
                /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                '$1 ',
              )} ${
                selectedProductCurrency === 'Сомы'
                  ? 'KGS'
                  : selectedProductCurrency
              }`}
            </Text>
          )}
        </View>

        <View style={{flex: 1}}>
          <View style={{height: height / 2.3}}>
            <FlatList
              pagingEnabled
              horizontal
              snapToInterval={width}
              onScroll={e => {
                // @ts-ignore
                //console.log(e.nativeEvent.contentOffset.x + ' x' + width);
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
                      uri: `https://hahahome.live/${item.value}`,
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
                          selectedIndex == index ? '#274abb' : '#f2f2f2',
                        height: 12,
                        width: 30,
                        borderRadius: 10,
                      }}
                    />
                  );
                },
              )}
            </View>
          </View>
          <View>
            {/*<FlatList
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
            />*/}
          </View>
          <View style={[styles.blockRooms, {backgroundColor: theme === 'dark' ? '#1c1c1c' : '#f9f9f9'}]}>
            {selectedProductRooms ? (
            <View>
              <Text
                style={{fontWeight: 'bold', color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductRooms}`}</Text>
              <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{'Квартира'}</Text>
            </View>
            ) : null}
            {selectedProductFloor ? (
            <View>
              <Text
                style={{fontWeight: 'bold', color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductFloor}`}</Text>
              <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{'Этаж'}</Text>
            </View>
            ) : null}
          </View>
          <View>
            <Text style={[styles.blockOptions, {color: theme === 'dark' ? '#ffffff' : '#000000'}]}>{'Описание'}</Text>
            <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductAnons}`}</Text>
          </View>
          <View>
            <Text style={[styles.blockOptions, {color: theme === 'dark' ? '#ffffff' : '#000000'}]}>{'Общая информация'}</Text>
            <View style={styles.blockGeneralInformation}>
              {selectedProductFOT !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductFOTName}`}</Text>
                  {selectedProductFOT !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductFOT}`}</Text>
                  )}
                </View>
              )}
              {selectedProductCOMM !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductCOMMName}`}</Text>
                  {selectedProductCOMM !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductCOMM}`}</Text>
                  )}
                </View>
              )}
              {selectedProductFURN !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductFURNName}`}</Text>
                  {selectedProductFURN !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductFURN}`}</Text>
                  )}
                </View>
              )}
              {selectedProductHHAP !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductHHAPName}`}</Text>
                  {selectedProductHHAP !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductHHAP}`}</Text>
                  )}
                </View>
              )}
              {selectedProductAP_IMP !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductAP_IMPName}`}</Text>
                  {selectedProductAP_IMP !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductAP_IMP}`}</Text>
                  )}
                </View>
              )}
              {selectedProductSettlement !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductSettlementName}`}</Text>
                  {selectedProductSettlement !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductSettlement}`}</Text>
                  )}
                </View>
              )}
              {selectedProductSeller !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductSellerName}`}</Text>
                  {selectedProductSeller !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductSeller}`}</Text>
                  )}
                </View>
              )}
              {selectedProductSeries !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductSeriesName}`}</Text>
                  {selectedProductSeries !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductSeries}`}</Text>
                  )}
                </View>
              )}
              {selectedProductRepair !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductRepairName}`}</Text>
                  {selectedProductRepair !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductRepair}`}</Text>
                  )}
                </View>
              )}
              {selectedProductTermsAnimals !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductTermsAnimalsName}`}</Text>
                  {selectedProductTermsAnimals !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductTermsAnimals}`}</Text>
                  )}
                </View>
              )}
              {selectedProductRentType !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductRentTypeName}`}</Text>
                  {selectedProductRentType !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductRentType}`}</Text>
                  )}
                </View>
              )}

              {selectedProductTermsChildren !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={
                      [styles.optionsHome, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                    }>{`${selectedProductTermsChildrenName}`}</Text>
                  {selectedProductTermsChildren !== null && (
                    <Text style={{color: theme === 'dark' ? '#ffffff' : '#000000'}}>{`${selectedProductTermsChildren}`}</Text>
                  )}
                </View>
              )}
              <Text style={[styles.blockOptions, {color: theme === 'dark' ? '#ffffff' : '#000000'}]}>{'Расположение'}</Text>
              <Button
                title="Открыть Яндекс Карты с маркером"
                onPress={openYandexMapsWithMarker}
              />
              {selectedProductSellerPhone !== undefined && (
                <View style={styles.blockGeneralInformationEach}>
                  <Text
                    style={[
                      styles.optionsHome,
                      styles.blockOptions,
                      {fontWeight: '300', fontSize: 18},
                      {color: theme === 'dark' ? '#ffffff' : '#000000'}
                    ]}>{`${selectedProductSellerPhoneName}`}</Text>
                  {selectedProductSellerPhone !== null && (
                    <Text
                      style={
                        [styles.blockOptions, {color: theme === 'dark' ? '#ffffff' : '#000000'}]
                      }>{`${selectedProductSellerPhone}`}</Text>
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
    /*backgroundColor: '#ffffff',*/

    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  blockRooms: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    /*backgroundColor: '#f9f9f9',*/
    width: '100%',
    display: 'block',
    listStyle: 'none',
    margin: 0,
    paddingBottom: 24,
    paddingTop: 20,
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

  blockOptions: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    /*color: '#000000',*/
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
