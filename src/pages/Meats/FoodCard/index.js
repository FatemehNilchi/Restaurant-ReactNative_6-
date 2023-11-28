import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

const FoodCard = ({foodName, description, price, imageSource}) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={imageSource} style={styles.image} />
      <Text style={styles.foodName}>{foodName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    height: 160,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.extraLigtGray,
  },
  foodName: {
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 11,
    color: colors.lightGray,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default FoodCard;
