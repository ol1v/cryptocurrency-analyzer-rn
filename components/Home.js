import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getCoin } from '../utils/apiclient'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';


function Home({ navigation }) {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    getCoin().then(res => {
      let resCoins = res.data.data.coins
      // Get current hour 
      let current = new Date()
      let hours = current.getHours()
      // Change from .svg to .png
      resCoins.forEach(coin => {
        coin.iconUrl = coin.iconUrl.replace('.svg', '.png');
        coin.currentTime = hours
      })

      setCoins(resCoins)
    })
  }, [])

  return <View style={styles.container2}>

    {!coins.length ? null :
      <FlatList
        style={styles.container2}
        data={coins}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('LineChart', {
                params: item.name,
                coinData: item
              })}>
              <View style={styles.container}>
                <Image
                  source={{ uri: item.iconUrl }}
                  style={{ width: 58, height: 58 }}

                />
              </View>
            </TouchableOpacity>

          </View>
        )}
        keyExtractor={(coin) => coin.name}
        numColumns={5}
      />

    }

  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    padding: 4,
    marginLeft: 4,
    marginRight: 4
  },
  container2: {
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 2
  },
  logo: {
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    top: -200
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  text: {
    color: '#FFFFFF'
  }
});

export default Home