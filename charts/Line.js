import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions, View, StyleSheet, Text, Image, Switch } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Line({ navigation, route }) {

    /** TODO:
     * Flytta kod och använd chartcomponent och importera bara charts dit.
     */

    const { params, coinData } = route.params // use coinData.color in sheet
    console.log(coinData)

    const screenWidth = Dimensions.get("window").width;

    //testdata
    const data = {
        labels: ['last 24h'],
        datasets: [
            {
                data: coinData.sparkline,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: [coinData.name] // optional
    };

    // Pass into function as prop?
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        dotColor: coinData.color,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };


    return (<View style={styles.container}>
        <Image
            source={{ uri: coinData.iconUrl }}
            style={{ width: 50, height: 50 }}
        />
        <Text style={styles.defaultText}>Rank: {coinData.rank} </Text>
        <Text style={styles.text}>   USD </Text>
        {/* <Button
            title="PieChart"
            onPress={() => navigation.navigate('PieChart')}
        /> */}
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig} />
        <View style={styles.switchContainer}>
            <Text style={styles.switchContainer}>Get updates on {coinData.name}</Text>
            <Switch></Switch>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151a34',
        height: Dimensions.get("window").height
    },
    logo: {
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        width: 100,
        height: 100,
        top: -200
    },
    text: {
        color: 'green'
    },
    defaultText: {
        color: 'white'
    },
    switchContainer: {
        color: 'white',
        alignSelf: 'flex-end',
        flexDirection: 'column'
    }
});