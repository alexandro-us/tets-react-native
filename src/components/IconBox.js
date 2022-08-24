import React from 'react'
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const IconBox = ({nameIcon, color}) => {
  return (
    <View style={styles.iconBox}>
        <Icon name={nameIcon} color={color} size={30}/>
    </View>
  );
};

