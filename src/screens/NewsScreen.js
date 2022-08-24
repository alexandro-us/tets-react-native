import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NewsBox } from '../components/NewsBox';
import { useNews } from '../hooks/useNews';

export const NewsScreen = () => {

    const {news, isLoading} = useNews();
  return (
    <View>
        {
            (isLoading)
            ? <Text>Cargando...</Text>
            : <FlatList
                showsVerticalScrollIndicator={false}
                data={news}
                numColumns={1}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<NewsBox item={item}/>)}
            />
        }
    </View>
  );
};


