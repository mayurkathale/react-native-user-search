import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { ResultScreenRouteProp, ResultUserType } from '../types';
import { readAndSortJson, getUserIndexByName } from '../utils';
import ModalBox from '../components/Model';
import Table from '../components/Table';
import { STYLE_CONSTANTS } from '../constants';

function SearchScreen() {
  const route = useRoute<ResultScreenRouteProp>();
  const [result, setResult] = useState<ResultUserType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data = readAndSortJson();
      const indexData = getUserIndexByName(data, route.params.text);
      if (indexData === -1) {
        setResult([]);
        setShowModal(true);
      } else if (indexData > 9 && data[indexData]) {
        setResult([
          ...data.slice(0, 9).map((item, i) => {
            const resultItem: ResultUserType = {
              rank: i + 1,
              search: false,
              name: item.name,
              bananas: item.bananas,
              uid: item.uid,
            };
            return resultItem;
          }),
          {
            rank: indexData + 1,
            search: true,
            name: data[indexData].name,
            bananas: data[indexData].bananas,
            uid: data[indexData].uid,
          },
        ]);
        setShowModal(false);
      } else {
        setResult(
          data.slice(0, 10).map((item, i) => {
            const resultItem: ResultUserType = {
              rank: i + 1,
              search: i === indexData,
              name: item.name,
              bananas: item.bananas,
              uid: item.uid,
            };
            return resultItem;
          }),
        );
        setShowModal(false);
      }
      setLoading(false);
    }, 2000); // Mocking loading effect
  }, [route.params.text]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeader}>
        {loading ? 'Fetching' : 'Displaying'} results for &quot;{route.params.text}&quot;
      </Text>
      {loading ? (
        <Spinner visible={loading} color={STYLE_CONSTANTS.primaryColor} />
      ) : (
        <>
          <ModalBox
            displayModal={showModal}
            setDisplayModal={setShowModal}
            message="This user name does not exist! Please specify an existing user name!"
          />
          {result.length > 0 && <Table data={result} style={{ marginTop: 40 }} />}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  pageHeader: { fontSize: 18, fontWeight: '700' },
});
export default SearchScreen;
