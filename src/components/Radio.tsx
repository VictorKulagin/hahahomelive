import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

export const Radio = ({options, checkedValue, onChange, style}) => {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={options}
        horizontal
        renderItem={({item, index}) => {
          let active = item.value === checkedValue;
          let itemWidth = index >= options.length - 3 ? 120 : 60; // Установка ширины элемента в зависимости от индекса
          return (
            <TouchableOpacity
              style={
                active
                  ? [
                      styles.radio,
                      {backgroundColor: '#274abb', width: itemWidth},
                    ]
                  : [styles.radio, {width: itemWidth}]
              }
              onPress={() => onChange(item.value)}>
              <Text
                style={
                  active ? [styles.text, {color: '#ffffff'}] : styles.text
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.value.toString()}
        style={styles.flatList} // Установка стиля для FlatList
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //width: '100%',
    height: 50,
    /*flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',*/
  },
  radio: {
    height: 45,
    width: '19%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
  flatList: {
    height: 100, // Установка высоты FlatList в 100px
  },
});
