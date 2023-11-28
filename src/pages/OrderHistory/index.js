import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '@constants/colors';
import Header from '@components/Header';
import SearchBox from '@components/SearchBar/SearchBox';
import SortAndResultLine from '@components/SortAndResultLine';
import OrderCard from './OrderCard';

const OrderHistory = () => {
  return (
    <View style={styles.background}>
      <ScrollView>
        <Header title="Order history" />
        <View style={styles.container}>
          <SearchBox />
          <SortAndResultLine />
          <OrderCard />
          <OrderCard />
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
  },
});

export default OrderHistory;
