import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import RowView from '@components/RowView';

const Header = ({title = ''}) => {
  const nav = useNavigation();

  return (
    <RowView style={styles.container}>
      <Icon
        name="arrow-left"
        size={25}
        color="#000"
        style={styles.icon}
        onPress={() => {
          nav.navigate('OrderDetails');
        }}
      />
      <Text
        onPress={() => {
          nav.navigate('Meats');
        }}
        style={styles.text}>
        {title}
      </Text>
      <Icon
        name="shopping-cart"
        size={25}
        color="#000"
        onPress={() => {
          nav.navigate('OrderHistory');
        }}
      />
    </RowView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 58,
    backgroundColor: '#fff',
    elevation: 30,
    shadowColor: '#444',
    zIndex: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
});

export default Header;
