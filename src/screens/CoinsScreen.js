import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CriptoBox } from '../components/CriptoBox';
import { useCriptoCoins } from '../hooks/useCripto';

export const CoinsScreen = () => {

    const {coins, isLoading} = useCriptoCoins();
  return (
    <View>
        {
            (isLoading)
            ? <Text>Cargando...</Text>
            : <FlatList
                showsVerticalScrollIndicator={false}
                data={coins}
                numColumns={1}
                keyExtractor={(coin) => coin.id}
                renderItem={({item}) => (<CriptoBox coin={item}/>)}
            />
        }
    </View>
  );
};


