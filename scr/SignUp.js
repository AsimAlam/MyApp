import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Background from './Background'
import { darkGreen } from './Constants'
import Field from './Field'
import Btn from './Btn'
import AsyncStorage from '@react-native-async-storage/async-storage'

function SignUp(props) {
    const [username, setUsername] = useState('');
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await AsyncStorage.setItem(username, password);
            await AsyncStorage.setItem('name', name);
            Alert.alert('Success', 'Signup successful');
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <Background>
            <View style={{ alignItems: "center", width: 460 }}>
                <Text style={{ color: "white", fontSize: 64, fontWeight: 'bold', marginTop: 10 }} >
                    Register
                </Text>
                <Text style={{ color: "white", fontSize: 19, fontWeight: "bold", marginBottom: 20 }} >Create A New Account</Text>
                <View style={{
                    backgroundColor: "white", height: 700, width: 460,
                    borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center'
                }} >

                    <Field placeholder="First Name" onChangeText={setname} />
                    <Field placeholder="Last Name" />
                    <Field placeholder="Email/Username" keyboardType={"email-address"} onChangeText={setUsername} />
                    <Field placeholder="Contact Number" keyboardType={"number"} />
                    <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} />
                    {/* <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }} >
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }} >Forgot Password?</Text>
                    </View> */}
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="SignUp" Press={() => {
                        handleSignup()
                        Alert.alert("logged In successfully")
                        props.navigation.navigate("Login")
                    }} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Login</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default SignUp
