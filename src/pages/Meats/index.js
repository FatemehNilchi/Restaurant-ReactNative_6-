import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '@constants/colors';
import Header from '@components/Header';
import SearchBox from '@components/SearchBar/SearchBox';
import SortAndResultLine from '@components/SortAndResultLine';
import FoodCard from './FoodCard';
import RowView from '@components/RowView';

const Meats = () => {
  return (
    <View style={styles.background}>
      <ScrollView>
        <Header title="Meats" />
        <View style={styles.container}>
          <SearchBox />
          <SortAndResultLine />

          <RowView gap={10}>
            <FoodCard
              foodName="Pepperoni Pizza"
              description="Mayonnaise, Tomato, Mushroom"
              price="$35.80"
              imageSource={require('@assets/images/single.png')}
            />

            <FoodCard
              foodName="Chicken and Mushroom"
              description="Tomato Sauce, Cheese, Mushroom"
              price="$29.99"
              imageSource={require('@assets/images/gluteenfree.png')}
            />
          </RowView>

          <RowView gap={10}>
            <FoodCard
              foodName="Pepperoni Pizza"
              description="Mayonnaise, Tomato, Mushroom"
              price="$35.80"
              imageSource={require('@assets/images/gluteenfree.png')}
            />

            <FoodCard
              foodName="Chicken and Mushroom"
              description="Tomato Sauce, Cheese, Mushroom"
              price="$29.99"
              imageSource={require('@assets/images/single.png')}
            />
          </RowView>

          <RowView gap={10}>
            <FoodCard
              foodName="Pepperoni Pizza"
              description="Mayonnaise, Tomato, Mushroom"
              price="$35.80"
              imageSource={require('@assets/images/single.png')}
            />

            <FoodCard
              foodName="Chicken and Mushroom"
              description="Tomato Sauce, Cheese, Mushroom"
              price="$29.99"
              imageSource={require('@assets/images/gluteenfree.png')}
            />
          </RowView>
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

export default Meats;
