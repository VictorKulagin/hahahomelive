import React, {useEffect, useRef, useCallback} from 'react';
import {useLongRentStore} from './zstore/longRent.ts';
import {CardScreenRent} from './CardScreenRent.tsx';

import {ActivityIndicator, Dimensions, Platform} from 'react-native';
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import {Empty} from './components/Empty.tsx';

debugger;
export const ScreenRent = () => {
  const fetchRooms = useLongRentStore(state => state.fetchRooms);
  const rooms = useLongRentStore(state => state.rooms);
  const success = useLongRentStore(state => state.success);

  console.log(success + ' success');
  const navigation = useNavigation();
  const setParameters = useLongRentStore(state => state.setParameters);

  const scrollViewRef = useRef(null);
  const {height: screenHeight} = useWindowDimensions();
  const itemsPerPage = 20;
  const totalPages = 598;
  const totalItems = itemsPerPage * totalPages;
  let currentIndex = 0;

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [cityFilter, setCityFilter] = React.useState(10);
  const [roomsFilter, setRoomsFilter] = React.useState('');

  const [priceFilter, setPriceFilter] = React.useState<number[]>([]);

  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');

  const [toIndex, setToIndex] = React.useState(0);

  const [isLoading, setLoading] = React.useState(true);
  const keyExtractor = useCallback(item => item.id.toString());

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const applyFilters = newIndex => {
    /*const city = parseInt(cityFilter); // Преобразование введенного значения в число
    setCityFilter(city); // Установка значения cityFilter в хранилище
    const room = parseInt(roomsFilter); // Преобразование введенного значения в число
    setRoomsFilter(room); // Установка значения roomsFilter в хранилище
    const price = [minPrice, maxPrice]; // Преобразование введенного значения в число
    setPriceFilter(price); // Установка значения roomsFilter в хранилище*/
    console.log('Applying filters with index:', newIndex);
    useLongRentStore.getState().fetchRooms(
      /* cityFilter,
      roomsFilter,
      price,*/
      /*typeof toIndex === 'object' ? 1 : toIndex,*/
      newIndex,
    );
    //setRoomFilter
    // Implement logic to apply the selected filters
    // For example, you can make an API call with the filter values

    /* console.log('City:', city);
    console.log('City Filter:', cityFilter);
    console.log('price Filter:', price);

    console.log('minPrice Filter:', minPrice);
    console.log('maxPrice Filter:', maxPrice);

    console.log('toIndex Filter:', toIndex);*/

    // You can add more logic here
  };

  const smoothScrollToIndex = index => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: (index * screenHeight) / itemsPerPage,
        animated: true,
      });
    }
  };

  /*useEffect(() => {
    toggleModal(); // Open the modal when the component mounts
  }, []); // Empty dependency array to run this effect only once on mount*/

  useEffect(() => {
    fetchRooms();
    setLoading(false);
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

  // @ts-ignore
  const [page, setPage] = React.useState(1);

  /*const onEndReached = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    applyFilters(nextPage);
  };*/


  const onEndReached = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  useEffect(() => {
    applyFilters(page);
  }, [page]);

  const fetchRoomsComponent = () => {
    if (rooms?.length > 0) {
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <View>{Header('Бишкек')}</View>
          </View>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={rooms}
              keyExtractor={keyExtractor}
              numColumns={2}
              ListEmptyComponent={Empty}
              onEndReachedThreshold={0.01}
              onEndReached={onEndReached}
              renderItem={({item}) => (
                <View style={styles.cardContainer}>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      handleNavigate(
                        item?.id,
                        item?.title,
                        item?.prop?.GALLERY?.links[0].value,
                        item?.prop?.GALLERY?.links,
                        item?.prop?.PRICE?.links[0].value,
                        item?.prop?.CURRENCY?.links[0].value,
                        item?.prop?.CITY?.links[0].value,
                        item?.prop?.CITY_AREA?.links[0].value,
                        item?.prop?.ROOMS?.links[0].value,
                        item?.prop?.FLOOR?.links[0].value,
                        item?.anons,
                        item?.prop?.SERIES?.links[0].value,
                        item?.prop?.SERIES?.title,
                        item?.prop?.REPAIR?.links[0].value,
                        item?.prop?.REPAIR?.title,
                        item?.prop?.RENT_TYPE?.links[0].value,
                        item?.prop?.RENT_TYPE?.title,
                        item?.prop?.TERMS_ANIMALS?.links[0].value,
                        item?.prop?.TERMS_ANIMALS?.title,
                        item?.prop?.TERMS_CHILDREN?.links[0].value,
                        item?.prop?.TERMS_CHILDREN?.title,
                        item?.prop?.FOT?.links[0].value,
                        item?.prop?.FOT?.title,
                        item?.prop?.COMM?.value,
                        item?.prop?.COMM?.title,
                        item?.prop?.FURN?.value,
                        item?.prop?.FURN?.title,
                        item?.prop?.HHAP?.value,
                        item?.prop?.HHAP?.title,
                        item?.prop?.AP_IMP?.value,
                        item?.prop?.AP_IMP?.title,
                        item?.prop?.SETTLEMENT?.value,
                        item?.prop?.SETTLEMENT?.title,
                        item?.prop?.SELLER?.value,
                        item?.prop?.SELLER?.title,
                        item?.prop?.MAP_LAT?.value,
                        item?.prop?.MAP_LNG?.value,
                        item?.prop?.SELLER_PHONE?.value,
                        item?.prop?.SELLER_PHONE?.title,
                      )
                    }>
                    {
                      <View style={styles.card}>
                        <Text>{/*item?.create_date*/}</Text>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri:
                              'https://hahahome.live/' +
                              item.prop?.GALLERY?.links[0]?.value,
                          }}
                        />
                        <Text style={styles.cardTextBlack}>{item?.title}</Text>
                        <Text>{item.prop?.CITY_AREA?.links[0].value}</Text>
                        <Text style={styles.cardTextBlack}>
                          {item.prop?.PRICE?.links[0].value}
                        </Text>
                      </View>
                    }
                  </TouchableWithoutFeedback>
                </View>
              )}
            />
          )}
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
              <Text>Number of minPrice:</Text>
              <TextInput
                value={minPrice}
                onChangeText={setMinPrice}
                placeholder="Enter Min Price"
              />
              <Text>Number of maxPrice:</Text>
              <TextInput
                value={maxPrice}
                onChangeText={setMaxPrice}
                placeholder="Enter Max Price"
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
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#c8c8c8',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  /*scrollView: {
    paddingHorizontal: 1,

    marginBottom: 0,
    height: '100%',
  },
  cardContainer: {
    paddingHorizontal: 1,
    marginBottom: 0,

    height: '100%',
  },

  flexR: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },*/
  tinyLogo: {
    height: 180,
    width: 200,
    borderRadius: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 1.5,
    marginLeft: 5,
    width: 200,
    /*backgroundColor: 'red',*/
  },
  /* cardTextBlack: {
    color: 'black',
    fontSize: 16,
    ineHeight: 1.3,
  },*/
});
