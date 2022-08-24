import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

export const CriptoBox = ({coin}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.criptoBox} key={coin.id}>
        <Image source={{
          uri: coin.icon,
        }} style={{width: 50, height: 50, marginRight: 20}}/>
        <View style={{flex: 0.8, justifyContent: 'flex-start', alignContent: 'flex-start'}}>
            <Text>{coin.name}</Text>
            <Text>{coin.price} MXN</Text>
        </View>
        <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate({name: 'DetailCoinScreen', params: { coin: coin }})}>
            <Icon name="information-circle-outline" size={20} color="#000000" />
        </TouchableOpacity>
    </View>
  );
};
