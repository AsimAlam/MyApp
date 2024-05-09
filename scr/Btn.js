import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

function Btn({ bgColor, btnLabel, textColor, Press }) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                backgroundColor: bgColor,
                borderRadius: 100,
                alignItems: 'center',
                width: 350,
                paddingVertical: 5,
                marginVertical: 10
            }}>
            <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>
                {btnLabel}
            </Text>

        </TouchableOpacity>
    );
}

export default Btn
