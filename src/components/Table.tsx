import React from 'react';
import { View, StyleSheet, ViewStyle, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { ResultUserType } from '../types';

type Props = {
  data: ResultUserType[];
  style: ViewStyle;
};

function Table({ data, style }: Props) {
  return (
    <View {...style}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.largeColumn}>
            <Text style={styles.header}>Name</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={styles.header}>Rank</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={styles.header}>Bananas</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={styles.header}>Search</Text>
          </DataTable.Title>
        </DataTable.Header>

        {data.length > 0 &&
          data.map(item => (
            <DataTable.Row key={item.uid} style={item.search ? styles.foundRow : {}}>
              <DataTable.Cell style={styles.largeColumn}>{item.name}</DataTable.Cell>
              <DataTable.Cell numeric>{item.rank}</DataTable.Cell>
              <DataTable.Cell numeric>{item.bananas}</DataTable.Cell>
              <DataTable.Cell numeric>{item.search ? 'Yes' : 'No'}</DataTable.Cell>
            </DataTable.Row>
          ))}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  largeColumn: {
    flex: 2.3,
  },
  foundRow: {
    backgroundColor: 'lightgray',
  },
  header: {
    fontSize: 15,
    fontWeight: '700',
  },
});
export default Table;
