import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

const BigButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Checkout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 45,
    borderRadius: 8,
    backgroundColor: colors.buttonBackqround,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default BigButton;
