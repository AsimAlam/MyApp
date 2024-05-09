import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

function WelcomePage(props) {

    const { name } = props.route.params;

    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Welcome</Text>
                <Text style={{ color: 'white', fontSize: 64 }}>{name}</Text>
            </View>

        </Background>
    );
}

const styles = StyleSheet.create({});

export default WelcomePage;
