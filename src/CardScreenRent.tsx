import React, {useEffect, useRef} from 'react';
import {useLongRentStore} from './zstore/longRent.ts';

import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import LongTermRentalCreatorReducer from './redux/long-term-rental-creator-reducer';

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

  const {height, width} = Dimensions.get('window');
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <>
      <View>
        <Text>CardScreenRent</Text>
        <Text>{`Product ID: ${selectedProductId}`}</Text>
        <Text>{`Product Name: ${selectedProductTitle}`}</Text>
        <Text>{`Product Name: ${selectedProductPictures}`}</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={{height: 200}}>
          <FlatList
            pagingEnabled
            horizontal
            onScroll={e => {
              // @ts-ignore
             // console.log(e.nativeEvent.contentOffset.x + ' x' + width);
              setSelectedIndex(
                (e.nativeEvent.contentOffset.x / width).toFixed(0),
              );
            }}
            data={selectedProductPicturesMass}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <Image
                  source={{uri: 'https://hahahome.live/' + item.value}}
                  style={{width: width, height: 200}}
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
            {selectedProductPicturesMass?.map((picture: any, index: number) => {
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
            })}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});
