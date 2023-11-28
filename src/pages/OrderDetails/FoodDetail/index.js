import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@constants/colors';
import RowView from '@components/RowView';
import RoundButton from '@pages/OrderDetails/RoundButton';

const FoodDetail = () => {
  return (
    <RowView justify="flex-start" style={styles.container}>
      <Image
        source={require('@assets/images/meat.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.foodNameSection}>
        <Text style={styles.name}>Pumpkin soup with crackers</Text>
        <Text style={styles.serving}>Serving: 2</Text>
        <RowView justify="flex-start" gap={10}>
          <Text style={styles.price}>$31.50</Text>
          <Text style={styles.prevPrice}>$43.58</Text>
        </RowView>
        <RowView style={styles.counterSection}>
          <RowView gap={10} justify="flex-start">
            <RoundButton icon="minus" />
            <Text style={styles.counter}>2</Text>
            <RoundButton icon="plus" />
          </RowView>
          <Icon name="trash-outline" size={20} color={colors.gray} />
        </RowView>
      </View>
    </RowView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 95,
    height: 95,
    marginRight: 10,
  },

  container: {
    borderColor: '#E5E6E8',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginVertical: 17,
    paddingVertical: 17,
  },

  foodNameSection: {
    flex: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.black,
    marginBottom: 9,
  },
  serving: {
    fontSize: 11,
    color: colors.lightGray,
    marginBottom: 5,
  },
  counterSection: {
    marginTop: 12,
  },
  counter: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.black,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },

  prevPrice: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.lightGray,
    textDecorationLine: 'line-through',
  },
});

export default FoodDetail;
