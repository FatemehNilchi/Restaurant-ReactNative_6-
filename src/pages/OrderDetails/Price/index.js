import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '@constants/colors';
import RowView from '@components/RowView';

const Price = props => {
  const {title, price, isOrange = false, isBold = false} = props;

  return (
    <RowView>
      <Text style={[styles.text, isBold && styles.bold]}>{title}</Text>
      <Text
        style={[
          styles.text,
          isBold && styles.bold,
          isOrange && styles.orangeText,
        ]}>
        {price}
      </Text>
    </RowView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    color: colors.black,
  },
  bold: {
    fontWeight: 'bold',
  },
  orangeText: {
    color: colors.orange,
  },
});

export default Price;
