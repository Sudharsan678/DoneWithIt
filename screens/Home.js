import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    ImageBackground,
    Modal,
    ToastAndroid,
} from 'react-native';
import CustomButton from './utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({ navigation }) {

    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Landing');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 ) {
            Alert.alert('Warning!', 'Please enter your name.')
        }
        
        else if (pwd.length == 0)
        {
            Alert.alert('Warning!!', 'Please enter your Password.')
        }
         else {
            try {
                var user = {
                    Name: name,
                    Password : pwd
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                if (
                    (name.trim() == 'Sudharsan' || name.trim() == 'Vijay' ) 
                        && 
                    (pwd.trim() == '12345' || pwd.trim() == '0000')
                    ){
                navigation.navigate('Landing');}
                else {
                    Alert.alert('Warning!!', 'Please enter valid Username or Password.')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <ImageBackground source={require('/home/divum/ReactNativeProjects/DoneWithIt/assets/ffflurry.png')} 
        style = {styles.bg}>
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../assets/login.png')}
            />
            <Text style={styles.text}>
                Hello Please 
                Login
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                placeholderTextColor={'grey'}
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry 
                placeholderTextColor={'grey'}
                // keyboardType='numeric'
                onChangeText={(value) => setPwd(value)}
                // maxLength = {2}
                minLength = {8}
            />
            <CustomButton
                title='Login'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: 'black',
    },
    bg : {
        flex : 1,
        resizeMode : 'cover'
    }
})