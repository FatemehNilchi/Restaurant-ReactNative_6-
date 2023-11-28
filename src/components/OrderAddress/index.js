import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@constants/colors';

const OrderAddress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="location-outline" size={25} color="#5D626B" />
        <Text style={styles.titr}>Delivery Information</Text>
      </View>
      <Text style={styles.address}>784 Palm Avenue, Brooklyn, NY 11234</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 6,
  },
  titr: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },

  titleContainer: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  address: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.black,
  },
});

export default OrderAddress;
