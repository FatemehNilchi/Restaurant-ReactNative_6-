import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '@constants/colors';
import RowView from '@components/RowView';

const SearchBox = () => {
  return (
    <RowView justify="flex-start" style={styles.searchInput}>
      <Icon name="search" size={15} color="#5D626B" />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={'#5D626B'}
        style={styles.searchText}
      />
    </RowView>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 4,
    height: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  searchText: {
    fontSize: 12,
  },
});

export default SearchBox;
