import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@constants/colors';
import RowView from '@components/RowView';

const SortAndResultLine = () => {
  return (
    <RowView style={styles.container}>
      <View>
        <Text style={styles.text}>Last 6 months</Text>
      </View>
      <RowView>
        <Icon name="funnel-outline" size={15} color="#5D626B" />
        <Text style={styles.text}> Sort by: Newest</Text>
      </RowView>
    </RowView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
    color: colors.darkGray,
  },
});

export default SortAndResultLine;
