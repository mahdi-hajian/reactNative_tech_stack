import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ placeHolder, value, onChangeText, secureTextEntry }) => {
    const { InputStyle, containerStyle } = Styles;
    return (
        <View style={containerStyle}>
            {/* <Text style={labelStyle}>{label}</Text> */}
            <TextInput
                autoCorrect={false} secureTextEntry={secureTextEntry} style={InputStyle} value={value} onChangeText={onChangeText}
                placeholder={placeHolder} 
            />
        </View>
    );
};

const Styles = {
    InputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 25,
        flex: 1
    },
    // labelStyle: {
    //     fontSize: 18,
    //     paddingLeft: 20,
    //     flex: 2
    // },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center'
    }
};

export { Input };
