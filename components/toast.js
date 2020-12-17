import { View, TouchableOpacity, Text } from 'react-native'
import { Root, Toast } from 'popup-ui'
import React, { Component } from 'react'

export default function Toaster() {
    return (<Root>
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3498db',
            }}>
            <TouchableOpacity
                onPress={() =>
                    Toast.show({
                        type: 'Success',
                        title: 'User created',
                        text: 'Your user was successfully created, use the app now.',
                        color: '#2ecc71'
                    })
                }
            >
                <Text>Toast</Text>
            </TouchableOpacity>
        </View>
    </Root>)
}