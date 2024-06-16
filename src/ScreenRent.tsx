import React, {useEffect, useRef, useCallback} from 'react';
import {useLongRentStore} from './zstore/longRent.ts';
import {CardScreenRent} from './CardScreenRent.tsx';
import {Radio} from './components/Radio.tsx';

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
  RefreshControl,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import {Empty} from './components/Empty.tsx';

import {Dropdown} from 'react-native-element-dropdown';

debugger;

const data = [
  {label: 'Бишкек', value: '10'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
export const ScreenRent = () => {
  const fetchRooms = useLongRentStore(state => state.fetchRooms);
  const rooms = useLongRentStore(state => state.rooms);
  const roomsFilters = useLongRentStore(state => state.roomsFilters);

  //console.log(roomsFilters['12'].elements + ' roomsFilters + ');

  //const roomsFilters['12']['elements'];

  const cityFilterKeyArray = roomsFilters['12']?.elements
    ? Object.entries(roomsFilters['12']?.elements).map(([value, label]) => ({
        label,
        value,
      }))
    : [];

  const salesmanFilterKeyArray = roomsFilters['12']?.elements
    ? Object.entries(roomsFilters['9']?.elements).map(([value, label]) => ({
        label,
        value,
      }))
    : [];

  const areaFilterKeyArray = roomsFilters['44']?.elements
    ? Object.entries(roomsFilters['44']?.elements).map(([value, label]) => ({
        label,
        value,
      }))
    : [];

  const roomsFilterKeyArray = roomsFilters['3']?.elements
    ? Object.entries(roomsFilters['3']?.elements).map(([value, label]) => ({
        label,
        value,
      }))
    : [];

  const seriesFilterKeyArray = roomsFilters['8']?.elements
    ? Object.entries(roomsFilters['8']?.elements).map(([value, label]) => ({
        label,
        value,
      }))
    : [];

  console.log(salesmanFilterKeyArray[1] + ' salesmanFilterKeyArray + ');
  for (let key in salesmanFilterKeyArray) {
    console.log(key + ': ', salesmanFilterKeyArray[key]);
  }

  const navigation = useNavigation();
  const setParameters = useLongRentStore(state => state.setParameters);

  const scrollViewRef = useRef(null);
  const {height: screenHeight} = useWindowDimensions();
  const itemsPerPage = 20;
  const totalPages = 598;
  const totalItems = itemsPerPage * totalPages;
  let currentIndex = 0;

  const [value, setValue] = React.useState(null);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [salesmanFilter, setSalesmanFilter] = React.useState('');
  const [areaFilter, setAreaFilter] = React.useState('');
  const [areaLabelFilter, setAreaLabelFilter] = React.useState('');
  const [cityFilter, setCityFilter] = React.useState(10);
  const [cityLabelFilter, setCityLabelFilter] = React.useState('Бишкек');
  const [roomsFilter, setRoomsFilter] = React.useState('');

  const [priceFilter, setPriceFilter] = React.useState<number[]>([]);

  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');

  const [minFloor, setMinFloor] = React.useState('');
  const [maxFloor, setMaxFloor] = React.useState('');

  const [minTotalFloor, setMinTotalFloor] = React.useState('');
  const [maxTotalFloor, setMaxTotalFloor] = React.useState('');

  const [seriesFilter, setSeriesFilter] = React.useState('');
  const [seriesLabelFilter, setSeriesLabelFilter] = React.useState('');

  const [toIndex, setToIndex] = React.useState(0);

  const [isLoading, setLoading] = React.useState(true);
  //const keyExtractor = useCallback(item => item.id.toString());
  const keyExtractor = useCallback((item, index) => item.id.toString() + index);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const applyFilters = newIndex => {
    const city = parseInt(cityFilter); // Преобразование введенного значения в число
    setCityFilter(city); // Установка значения cityFilter в хранилище*/
    const salesman = parseInt(salesmanFilter); // Преобразование введенного значения в число
    setSalesmanFilter(salesman); // Установка значения cityFilter в хранилище*/
    const cityArea = parseInt(areaFilter); // Преобразование введенного значения в число
    setAreaFilter(cityArea); // Установка значения roomsFilter в хранилище
    const room = parseInt(roomsFilter); // Преобразование введенного значения в число
    setRoomsFilter(room); // Установка значения roomsFilter в хранилище
    const pPriceF0 = parseInt(minPrice); // Преобразование введенного значения в число
    setMinPrice(pPriceF0); // Установка значения roomsFilter в хранилище
    const pPriceF1 = parseInt(maxPrice); // Преобразование введенного значения в число
    setMaxPrice(pPriceF1); // Установка значения roomsFilter в хранилище

    const pFloor0 = parseInt(minFloor); // Преобразование введенного значения в число
    setMaxPrice(minFloor); // Установка значения roomsFilter в хранилище
    const pFloor1 = parseInt(maxFloor); // Преобразование введенного значения в число
    setMaxPrice(maxFloor); // Установка значения roomsFilter в хранилище

    const pTotalFloor0 = parseInt(minTotalFloor); // Преобразование введенного значения в число
    setMaxTotalFloor(minTotalFloor); // Установка значения roomsFilter в хранилище
    const pTotalFloor1 = parseInt(maxTotalFloor); // Преобразование введенного значения в число
    setMaxTotalFloor(maxTotalFloor); // Установка значения roomsFilter в хранилище

    const pSeries = parseInt(seriesFilter); // Преобразование введенного значения в число
    setSeriesFilter(seriesFilter); // Установка значения roomsFilter в хранилище
    /*const price = [minPrice, maxPrice]; // Преобразование введенного значения в число
    setPriceFilter(price); // Установка значения roomsFilter в хранилище*/
    //console.log('Applying filters with index:', newIndex);

    if (roomsFilter) {
      // Очистка предыдущих элементов через стор longRent
      // useLongRentStore.getState().clearElements();
      console.log('CLEAR ELEMENTS');
    }

    console.log('VALUE roomsFilter:', roomsFilter);

    useLongRentStore.getState().fetchRooms(
      city,
      salesman,
      cityArea,
      pPriceF0,
      pPriceF1,
      roomsFilter,
      pFloor0,
      pFloor1,
      pTotalFloor0,
      pTotalFloor1,
      pSeries,
      /*price,*/
      //typeof toIndex === 'object' ? 1 : toIndex,
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

  const onEndReached = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  useEffect(() => {
    applyFilters(page);
  }, [page]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    // Your refresh logic here
    setRefreshing(true);
    applyFilters(1);
    // Simulate a delay to show refreshing indicator
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const fetchRoomsComponent = () => {
    if (rooms?.length > 0) {
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <View>{console.log(roomsFilter + "ROOMS + " + rooms?.length)}</View>
            <View>{Header()}</View>
          </View>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={rooms}
              keyExtractor={keyExtractor}
              numColumns={2}
              ListEmptyComponent={Empty}
              onEndReachedThreshold={0.1}
              onEndReached={onEndReached}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
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
    if (!rooms || rooms.length === 0) {
      return (
        <>
          {Header()}
          <View>
            <Text style={{textAlign: 'center'}}>{'Ничего не найдено'}</Text>
          </View>
        </>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          {/* Existing code to display rooms when there are elements */}
        </SafeAreaView>
      );
    }
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <View
          style={{
            alignItems: 'flex-start',
            width: '5%',
            padding: 10,
            paddingTop: 18,
          }}>
          <Image
            source={require('./image/icons8-map-24.png')}
            style={{width: 20, height: 20}}
            tintColor={'#274abb'}
          />
        </View>
        {/* Image that when clicked will open the modal */}

        <View style={{alignItems: 'flex-start', width: '40%', padding: 15}}>
          <Text style={{fontSize: 18}}>{cityLabelFilter}</Text>
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
              style={{
                flex: 1 /*, justifyContent: 'center', alignItems: 'center'*/,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={cityFilterKeyArray}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={`${cityLabelFilter || 'Выберете город'}`}
                searchPlaceholder="Поиск..."
                value={value}
                onChange={item => {
                  setCityFilter(item.value);
                  setCityLabelFilter(item.label);
                }}
                /*renderLeftIcon={() => (
                  <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}*/
              />
              {/*<Text style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
                Продавец:
              </Text>*/}
              <Radio
                options={salesmanFilterKeyArray}
                checkedValue={salesmanFilter}
                onChange={setSalesmanFilter}
                style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}
              />

              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={areaFilterKeyArray}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={`${areaLabelFilter || 'Выберете район'}`}
                searchPlaceholder="Поиск..."
                value={value}
                onChange={item => {
                  setAreaFilter(item.value);
                  setAreaLabelFilter(item.label);
                }}
                /*renderLeftIcon={() => (
                  <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}*/
              />

              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <View style={{flex: 1}}>
                  <TextInput
                    value={minPrice}
                    onChangeText={setMinPrice}
                    placeholder="Цена от"
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      /*borderWidth: 1, borderColor: 'gray',*/ borderRadius: 5,
                    }}
                  />
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    value={maxPrice}
                    onChangeText={setMaxPrice}
                    placeholder="до"
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      /*borderWidth: 1, borderColor: 'gray',*/ borderRadius: 5,
                    }}
                  />
                </View>
              </View>
              <Radio
                options={roomsFilterKeyArray}
                /*options={[
                  {label: '1', value: '1'},
                  {label: '2', value: '2'},
                  {label: '3', value: '3'},
                  {label: '4', value: '4'},
                  {label: '5', value: '5'},
                  {label: '6', value: '154'},
                  {label: 'Больше 6', value: '6'},
                  {label: 'Свободная планировка', value: '32'},
                  {label: 'Студия', value: '33'},
                ]}*/
                checkedValue={roomsFilter}
                onChange={setRoomsFilter}
                style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}
              />
              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <View style={{flex: 1}}>
                  <TextInput
                    value={minFloor}
                    onChangeText={setMinFloor}
                    placeholder="Этаж от"
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      /*borderWidth: 1, borderColor: 'gray',*/ borderRadius: 5,
                    }}
                  />
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    value={maxFloor}
                    onChangeText={setMaxFloor}
                    placeholder="до"
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      /*borderWidth: 1, borderColor: 'gray',*/ borderRadius: 5,
                    }}
                  />
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <View style={{flex: 1}}>
                  <TextInput
                    value={minTotalFloor}
                    onChangeText={setMinTotalFloor}
                    placeholder="Всего этажей от"
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      /*borderWidth: 1, borderColor: 'gray',*/ borderRadius: 5,
                    }}
                  />
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    value={maxTotalFloor}
                    onChangeText={setMaxTotalFloor}
                    placeholder="до"
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      /*borderWidth: 1, borderColor: 'gray',*/ borderRadius: 5,
                    }}
                  />
                </View>
              </View>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={seriesFilterKeyArray}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={`${seriesLabelFilter || 'Серия дома'}`}
                searchPlaceholder="Поиск..."
                value={value}
                onChange={item => {
                  setSeriesFilter(item.value);
                  setSeriesLabelFilter(item.label);
                }}
                /*renderLeftIcon={() => (
                  <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}*/
              />

              <Button
                title="Apply Filters"
                onPress={() => {
                  applyFilters(); // Вызов функции applyFilters
                  useLongRentStore.getState().clearElements(); // Сброс состояния хранилища Zustand
                }}
              />

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
    backgroundColor: '#fcfcfc',
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
    //height: 195,
    height: Dimensions.get('window').width - 190, // Вычитаем 10 для учета отступов
    borderRadius: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 1.5,
    marginLeft: 2,
    marginRight: 2,
    width: Dimensions.get('window').width - 210, // Вычитаем 10 для учета отступов
    /*backgroundColor: 'red',*/
  },
  /* cardTextBlack: {
    color: 'black',
    fontSize: 16,
    ineHeight: 1.3,
  },*/

  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
