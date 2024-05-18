import React, {useEffect, useRef} from 'react';
import {useLongRentStore} from './zstore/longRent.ts';
import {CardScreenRent} from './CardScreenRent.tsx';

import {Dimensions} from 'react-native';
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

debugger;
export const ScreenRent = () => {
  const fetchRooms = useLongRentStore(state => state.fetchRooms);
  const rooms = useLongRentStore(state => state.rooms);

  const navigation = useNavigation();
  const setParameters = useLongRentStore(state => state.setParameters);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [cityFilter, setCityFilter] = React.useState(10);
  const [roomsFilter, setRoomsFilter] = React.useState(1);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const applyFilters = toIndex => {
    const city = parseInt(cityFilter); // Преобразование введенного значения в число
    setCityFilter(city); // Установка значения cityFilter в хранилище
    const room = parseInt(roomsFilter); // Преобразование введенного значения в число
    setRoomsFilter(room); // Установка значения roomsFilter в хранилище

    useLongRentStore.getState().fetchRooms(cityFilter, roomsFilter, toIndex);

    //setRoomFilter
    // Implement logic to apply the selected filters
    // For example, you can make an API call with the filter values

    console.log('City:', city);
    console.log('City Filter:', cityFilter);
    console.log('Rooms Filter:', roomsFilter);
    // You can add more logic here
  };

  useEffect(() => {
    toggleModal(); // Open the modal when the component mounts
  }, []); // Empty dependency array to run this effect only once on mount

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  const handleNavigate = (
    id: number,
    title: string,
    pictures: string[],
    picturesMass: string[],
    price: string,
    currency: string,
    city: string,
    cityArea: string,
    rooms: string,
    floor: string,
    anons: string,
    series: string,
    seriesName: string,
    repair: string,
    repairName: string,
    rentType: string,
    rentTypeName: string,
    TermsAnimals: string,
    TermsAnimalsName: string,
    TermsChildren: string,
    TermsChildrenName: string,
    FOT: string,
    FOTName: string,
    COMM: string,
    COMMName: string,
    FURN: string,
    FURNName: string,
    HHAP: string,
    HHAPName: string,
    AP_IMP: string,
    AP_IMPName: string,
    Settlement: string,
    SettlementName: string,
    Seller: string,
    SellerName: string,
    MAP_LAT: string,
    MAP_LNG: string,
    SellerPhone: string,
    SellerPhoneName: string,
  ) => {
    // @ts-ignore
    setParameters(
      id,
      title,
      pictures,
      picturesMass,
      price,
      currency,
      city,
      cityArea,
      rooms,
      floor,
      anons,
      series,
      seriesName,
      repair,
      repairName,
      rentType,
      rentTypeName,
      TermsAnimals,
      TermsAnimalsName,
      TermsChildren,
      TermsChildrenName,
      FOT,
      FOTName,
      COMM,
      COMMName,
      FURN,
      FURNName,
      HHAP,
      HHAPName,
      AP_IMP,
      AP_IMPName,
      Settlement,
      SettlementName,
      Seller,
      SellerName,
      MAP_LAT,
      MAP_LNG,
      SellerPhone,
      SellerPhoneName,
    );
    // @ts-ignore
    //navigation.navigate('CardScreenRent');
    navigation.navigate('CardScreenRent');
  };

  const scrollView = useRef(null);

  let toIndex = 1;
  const fetchRoomsComponent = () => {
    if (rooms?.length > 0) {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.scrollView}
            ref={scrollView}
            horizontal={false}
            /*pagingEnabled={true}*/
            onMomentumScrollEnd={event => {
              // scroll animation ended
              console.log(event.nativeEvent.contentOffset.x + ' x');
              console.log(event.nativeEvent.contentOffset.y + ' y');
              const windowHeight = Dimensions.get('window').height;
              console.log(windowHeight + ' Dimensions');

              const updatePageY1 = event.nativeEvent.contentOffset.y / 100;
              const updatePageY95 = updatePageY1 * 0.95;
              console.log(updatePageY95 + ' updatePageY95');

              if (event.nativeEvent.contentOffset.y > windowHeight * 2) {
                toIndex++;
                //useLongRentStore.getState().fetchRooms(toIndex);

                //console.log(useLongRentStore.getState().fetchRooms(toIndex));

                applyFilters(toIndex);

                console.log(toIndex);
              }
              if (event.nativeEvent.contentOffset.y == 0) {
                toIndex--;
                console.log(toIndex);
                //useLongRentStore.getState().fetchRooms(toIndex);
                applyFilters(toIndex);
              }
              if (toIndex == 1) {
                toIndex = 1;
                console.log(toIndex);
                //useLongRentStore.getState().fetchRooms(toIndex);
                applyFilters(toIndex);
              }
            }}>
            <View>
              <Text>{console.log(rooms[0].prop)}</Text>
            </View>
            <>{Header('Бишкек')}</>
            <View style={styles.flexR}>
              {rooms.map((room: any) => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    handleNavigate(
                      room?.id,
                      room?.title,
                      room?.prop?.GALLERY?.links[0].value,
                      room?.prop?.GALLERY?.links,
                      room?.prop?.PRICE?.links[0].value,
                      room?.prop?.CURRENCY?.links[0].value,
                      room?.prop?.CITY?.links[0].value,
                      room?.prop?.CITY_AREA?.links[0].value,
                      room?.prop?.ROOMS?.links[0].value,
                      room?.prop?.FLOOR?.links[0].value,
                      room?.anons,
                      room?.prop?.SERIES?.links[0].value,
                      room?.prop?.SERIES?.title,
                      room?.prop?.REPAIR?.links[0].value,
                      room?.prop?.REPAIR?.title,
                      room?.prop?.RENT_TYPE?.links[0].value,
                      room?.prop?.RENT_TYPE?.title,
                      room?.prop?.TERMS_ANIMALS?.links[0].value,
                      room?.prop?.TERMS_ANIMALS?.title,
                      room?.prop?.TERMS_CHILDREN?.links[0].value,
                      room?.prop?.TERMS_CHILDREN?.title,
                      room?.prop?.FOT?.links[0].value,
                      room?.prop?.FOT?.title,
                      room?.prop?.COMM?.value,
                      room?.prop?.COMM?.title,
                      room?.prop?.FURN?.value,
                      room?.prop?.FURN?.title,
                      room?.prop?.HHAP?.value,
                      room?.prop?.HHAP?.title,
                      room?.prop?.AP_IMP?.value,
                      room?.prop?.AP_IMP?.title,
                      room?.prop?.SETTLEMENT?.value,
                      room?.prop?.SETTLEMENT?.title,
                      room?.prop?.SELLER?.value,
                      room?.prop?.SELLER?.title,
                      room?.prop?.MAP_LAT?.value,
                      room?.prop?.MAP_LNG?.value,
                      room?.prop?.SELLER_PHONE?.value,
                      room?.prop?.SELLER_PHONE?.title,
                    )
                  }>
                  <View key={room?.id} style={styles.card}>
                    <Text>{/*room?.create_date*/}</Text>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri:
                          'https://hahahome.live/' +
                          room.prop?.GALLERY?.links[0]?.value,
                      }}
                    />

                    <Text style={styles.cardTextBlack}>{room?.title}</Text>
                    <Text>{room.prop?.CITY_AREA?.links[0].value}</Text>
                    <Text style={styles.cardTextBlack}>
                      {room.prop?.PRICE?.links[0].value}
                    </Text>
                    {/*<Button
                      title="Go to Card Screen"
                      onPress={() =>
                        handleNavigate(
                          room?.id,
                          room?.title,
                          room?.prop.GALLERY?.links[0].value,
                        )
                      }
                    />*/}
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  };

  const Header = (city: string) => {
    return (
      <View style={styles.header}>
        <View style={{alignItems: 'flex-start', width: '10%', padding: 10}}>
          <Image
            source={require('./image/icons8-map-24.png')}
            style={{width: 30, height: 30}}
            tintColor={'#274abb'}
          />
        </View>
        {/* Image that when clicked will open the modal */}

        <View style={{alignItems: 'flex-start', width: '40%', padding: 10}}>
          <Text>{city}</Text>
        </View>
        <View style={{alignItems: 'flex-end', width: '50%', padding: 10}}>
          {/* Image that when clicked will open the modal */}
          <TouchableOpacity onPress={toggleModal}>
            <Image
              source={require('./image/icons8-adjust-50.png')}
              style={{width: 30, height: 30}}
              tintColor={'#274abb'}
            />
          </TouchableOpacity>
          {/* Modal component */}
          <Modal visible={isModalVisible} animationType="slide">
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>This is a modal</Text>
              <Text>City:</Text>
              <TextInput
                value={cityFilter}
                onChangeText={setCityFilter}
                placeholder={`Enter City ${cityFilter}`}
              />
              <Text>Number of Rooms:</Text>
              <TextInput
                value={roomsFilter}
                onChangeText={setRoomsFilter}
                placeholder="Enter Number of Rooms"
              />
              <Button title="Apply Filters" onPress={applyFilters} />
              <Button title="Close" onPress={toggleModal} />
            </View>
          </Modal>
        </View>
      </View>
    );
  };

  return (
    <>
      <>{fetchRoomsComponent()}</>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    /*paddingTop: StatusBar.currentHeight,*/
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#c8c8c8',
    flexDirection: 'row',
    /*justifyContent: 'center',*/
  },
  scrollView: {
    paddingHorizontal: 1,
    /*backgroundColor: 'red',*/
    marginBottom: 0,
    height: '100%',
  },
  flexR: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  tinyLogo: {
    height: 180,
    borderRadius: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 1.5,
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 0,
    width: '50%',
  },
  cardTextBlack: {
    color: 'black',
    fontSize: 16,
    /*lineHeight: 1.3,*/
  },
});
