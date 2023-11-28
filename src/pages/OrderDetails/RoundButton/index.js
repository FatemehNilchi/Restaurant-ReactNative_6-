import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {colors} from '@constants/colors';

const RoundButton = ({icon}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={12} color="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.extraLigtGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RoundButton;
