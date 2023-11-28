import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@constants/colors';

const InternalSection = props => {
  const {style, children} = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 40,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 10,
    shadowColor: '#747474',
    backgroundColor: colors.white,
  },
});

export default InternalSection;
