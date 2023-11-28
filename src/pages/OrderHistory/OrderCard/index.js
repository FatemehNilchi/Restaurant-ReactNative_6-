import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@constants/colors';
import FoodDetail from '@pages/OrderHistory/FoodDetail';
import RowView from '@components/RowView';
import InternalSection from '@components/InternalSection';
import OrderAddress from '@components/OrderAddress';

const OrderCard = () => {
  return (
    <InternalSection>
      <RowView>
        <RowView>
          <Image
            source={require('@assets/logo/slice.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.titr}>Cafe Harvest</Text>
        </RowView>
        <RowView>
          <Icon name="chatbox-ellipses-outline" size={20} color="#5D626B" />
          <Text style={styles.titr}> Contact seller</Text>
        </RowView>
      </RowView>

      <FoodDetail />
      <View style={styles.orderDetailContainer.orderDetail}>
        <OrderAddress />

        <RowView>
          <Text style={styles.orderDetailContainer.title}>Order Number</Text>
          <Text style={styles.orderDetailContainer.numberAndDate}>4829366</Text>
        </RowView>

        <RowView>
          <Text style={styles.orderDetailContainer.title}>Delivered </Text>
          <View style={styles.orderDetailContainer.dateContainer}>
            <Text style={styles.orderDetailContainer.numberAndDate}>
              Sep, 29, 9:00 PM
            </Text>
          </View>
        </RowView>
      </View>
    </InternalSection>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 40,
    borderRadius: 8,
    elevation: 10,
    shadowColor: '#747474',
    backgroundColor: colors.white,
  },
  titr: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },
  logo: {
    width: 29,
    marginRight: 5,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  foodDetailContainer: {
    foodDetail: {
      flexDirection: 'row',
      alignItems: 'center',
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
    priceSection: {
      columnGap: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },

    counter: {
      fontSize: 11,
      fontWeight: '500',
      color: colors.lightGray,
      position: 'absolute',
      right: 0,
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
  },

  orderDetailContainer: {
    orderDetail: {
      rowGap: 6,
    },

    title: {
      fontSize: 13,
      color: colors.black,
    },
    numberAndDate: {
      fontSize: 12,
      color: colors.black,
    },
    dateContainer: {
      paddingVertical: 5,
      paddingHorizontal: 6,
      backgroundColor: colors.green,
      borderRadius: 4,
    },
  },
});

export default OrderCard;
