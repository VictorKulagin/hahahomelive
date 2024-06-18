import React from 'react';
import {View, FlatList, Image, Dimensions, Text} from 'react-native';

export const Slider = ({imageObjects}) => {
  /*const screenWidth = Dimensions.get('window').width;*/
  /*width: screenWidth,*/

  return (
    <FlatList
      data={imageObjects}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={true}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <View
          style={{
            backgroundColor: 'white',
            padding: 1.5,
            marginLeft: 2,
            marginRight: 2,
            width: Dimensions.get('window').width - 210,
          }}>
          <Image
            source={{uri: 'https://hahahome.live/' + item}}
            style={{
              height: Dimensions.get('window').width - 190,
              borderRadius: 5,
            }}
          />
        </View>
      )}
    />
  );
};
