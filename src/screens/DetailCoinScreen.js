import React, { useEffect } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { LineChart, ContributionGraph } from 'react-native-chart-kit';
import { IconBox } from '../components/IconBox';
import { useCoinChar } from '../hooks/useCoin';
import { styles } from '../theme/appTheme';

export const DetailCoinScreen = (coin) => {

    const item = coin.route.params.coin;
    const {charData, isLoading} = useCoinChar(item.id);

    useEffect(() => {
        coin.navigation.setOptions({
          headerShown: true,
          title: item.name,
        });
      }, [item.name, coin.navigation]);
  return (
    <View style={{flex: 1, marginHorizontal: 10, marginTop: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Image source={{
            uri: item.icon,
            }} style={{width: 100, height: 100, marginRight: 20}}/>
            <View>
                <Text style={{marginBottom: 20}}>Precio</Text>
                <Text>{item.price} MXN</Text>
            </View>
        </View>
        <View>
            {
                isLoading 
                ? <Text>Cargando....</Text>
                : <LineChart
                        data={{
                        labels: charData.map(e => e[0]),
                        datasets: [
                            {
                            data: [...charData.map(e => parseFloat(e[1]))],
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width - 20} // from react-native
                        height={220}
                        yAxisLabel="$"
                        // yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#000000",
                        backgroundGradientFrom: "#000000",
                        backgroundGradientTo: "#000000",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 0
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 0,
                        }}
                    />
            }
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
            <IconBox nameIcon="logo-twitter" color="#287AD3"/>
            <IconBox nameIcon="globe-outline" color="#0F4D91"/>
        </View>
    </View>
  );
};
