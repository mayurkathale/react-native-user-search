import React, { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { STYLE_CONSTANTS } from '../constants';
import { HomeScreenNavigationProp } from '../types';

function HomeScreen(): JSX.Element {
  const [searchText, setSearchText] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleOnPress = (): void => {
    if (searchText.length > 3) {
      navigation.navigate('Result', {
        text: searchText,
      });
    }
    setSearchText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.search}
          ref={inputRef}
          onChangeText={(text: string) => setSearchText(text)}
          value={searchText}
          placeholder="Enter value to search"
          placeholderTextColor="#ffc249"
          testID="searchText"
        />
        <Pressable style={styles.button} onPress={() => handleOnPress()} testID="searchButton">
          <AntDesign name="search1" size={32} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchBox: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: 50,
    borderWidth: 3,
    borderColor: STYLE_CONSTANTS.primaryColor,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexGrow: 1,
    paddingHorizontal: 3,
    fontSize: 18,
  },
  button: {
    backgroundColor: STYLE_CONSTANTS.primaryColor,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;
