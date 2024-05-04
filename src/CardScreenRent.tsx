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

  const {height, width} = Dimensions.get('window');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  console.log(selectedProductPicturesMass[activeIndex]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text>CardScreenRent</Text>

          <Text>{`Product ID: ${selectedProductId}`}</Text>
          <Text>{`Product Name: ${selectedProductTitle}`}</Text>
          <Text>{`Product Name: ${selectedProductPictures}`}</Text>
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
          <View>
            <Text>
              {
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
              }
            </Text>
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
});
