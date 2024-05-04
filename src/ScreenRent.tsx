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
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

debugger;
export const ScreenRent = () => {
  const fetchRooms = useLongRentStore(state => state.fetchRooms);
  const rooms = useLongRentStore(state => state.rooms);

  const navigation = useNavigation();
  const setParameters = useLongRentStore(state => state.setParameters);

  const handleNavigate = (id: number, title: string, pictures: string[], picturesMass: string[]) => {
    setParameters(id, title, pictures, picturesMass/*.map((picture) => 'https://hahahome.live/' + picture)*/);
    // @ts-ignore
    //navigation.navigate('CardScreenRent');
    navigation.navigate('CardScreenRent');
  };

  const scrollView = useRef(null);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

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
                useLongRentStore.getState().fetchRooms(toIndex);

                console.log(useLongRentStore.getState().fetchRooms(toIndex));

                console.log(toIndex);
              }
              if (event.nativeEvent.contentOffset.y == 0) {
                toIndex--;
                console.log(toIndex);
                useLongRentStore.getState().fetchRooms(toIndex);
              }
              if (toIndex == 1) {
                toIndex = 1;
                console.log(toIndex);
                useLongRentStore.getState().fetchRooms(toIndex);
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
        <View style={{alignItems: 'flex-start', width: '40%', padding: 10}}>
          <Text>{city}</Text>
        </View>
        <View style={{alignItems: 'flex-end', width: '50%', padding: 10}}>
          <Image
            source={require('./image/icons8-adjust-50.png')}
            style={{width: 30, height: 30}}
            tintColor={'#274abb'}
          />
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
