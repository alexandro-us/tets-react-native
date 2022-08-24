import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../theme/appTheme';

export const NewsBox = ({item}) => {

    const handleOpenUrl = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + this.props.url);
            }
          });
      };

  return (
    <View style={styles.newsBox}>
        <View style={{alignItems: 'center'}}>
            <Image source={{
            uri: item.imgURL,
            }} style={{width: 300, height: 150, marginRight: 20}}/>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 20, marginBottom: 20}}>
            <View style={styles.titleNew}>
                <Text>{item.title}</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleOpenUrl(item.link)}
                >
                    <Text style={{color: '#FFF', fontWeight: '500', fontSize: 16}}>Ir a la noticia</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

