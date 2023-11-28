import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '@constants/colors';

const PaymentSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="wallet" size={22} color="#5D626B" />
        <Text style={styles.titr}>Payment method</Text>
      </View>
      <Text style={styles.address}>visa **** 9809</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 6,
    borderColor: '#E5E6E8',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginVertical: 17,
    paddingVertical: 17,
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
export default PaymentSection;
