import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Background from './Background'
import { darkGreen } from './Constants'
import Field from './Field'
import Btn from './Btn'
import WelcomePage from './WelcomePage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

function Login(props) {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const savedPassword = await AsyncStorage.getItem(username);
            const firstName = await AsyncStorage.getItem('name');
            if (savedPassword === password) {
                Alert.alert('Success', 'Login successful');
                navigation.navigate('WelcomePage', { name: firstName });
            } else {
                Alert.alert('Error', 'Invalid username or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <Background>
            <View style={{ alignItems: "center", width: 460 }}>
                <Text style={{ color: "white", fontSize: 64, fontWeight: 'bold', marginVertical: 10 }} >
                    Login
                </Text>
                <View style={{
                    backgroundColor: "white", height: 700, width: 460,
                    borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center'
                }} >
                    <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }} > Welcome Back</Text>
                    <Text style={{ color: "grey", fontSize: 19, fontWeight: "bold", marginBottom: 20 }} >Login to your Account</Text>
                    <Field placeholder="Email/Username" keyboardType={"email-address"} onChangeText={setUsername} />
                    <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} />
                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }} >
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }} >Forgot Password?</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => {
                        handleLogin()
                    }} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Login
