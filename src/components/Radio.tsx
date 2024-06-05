import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const Radio = ({options, checkedValue, onChange, style}) => {
  return (
    <View style={[styles.container, style]}>
      {options.map(option => {
        let active = option.value == checkedValue;
        return (
          <TouchableOpacity
            style={
              active
                ? [styles.radio, {backgroundColor: '#274abb'}]
                : styles.radio
            }
            onPress={() => onChange(option.value)}
            key={option.value}>
            <Text
              style={active ? [styles.text, {color: '#ffffff'}] : styles.text}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  radio: {
    height: 45,
    width: '19%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});
