import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '@constants/colors';
import FoodDetail from '@pages/OrderDetails/FoodDetail';
import Header from '@components/Header';
import InternalSection from '@components/InternalSection';
import OrderAddress from '@components/OrderAddress';
import PaymentSection from './PaymentSection';
import Price from './Price';
import RowView from '@components/RowView';
import BigButton from './BigButton';

const OrderDetails = () => {
  return (
    <View style={styles.background}>
      <ScrollView>
        <Header title="Order details" />
        <View style={styles.container}>
          <InternalSection>
            <RowView justify="flex-start">
              <Image
                source={require('@assets/logo/slice.png')}
                resizeMode="contain"
                style={styles.logo}
              />
              <Text style={styles.restaurantName}>Cafe Harvest</Text>
            </RowView>

            <FoodDetail />
            <OrderAddress />
            <PaymentSection />

            <View style={styles.priceSection}>
              <Text style={styles.boldText}>Summary</Text>
              <Price title="Subtotal" price="$31.50" />
              <Price title="Delivery" price="Free" />
              <Price title="Saved" price="-$12.08" isOrange={true} />
              <Price title="Total" price="$31.50" isBold={true} />
            </View>
            
            <BigButton />
          </InternalSection>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },

  logo: {
    width: 29,
    marginRight: 5,
  },
  image: {
    width: 95,
    height: 95,
    marginRight: 10,
  },
  priceSection: {
    rowGap: 10,
    borderColor: '#E5E6E8',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15,
  },
  boldText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.black,
  },
});

export default OrderDetails;
