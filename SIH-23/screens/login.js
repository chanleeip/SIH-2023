import React, { useEffect, useReducer, useState } from 'react';
import { View, Text, Image,StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Url from '../components/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const login = () => {
  const navigator = useNavigation()
  const [UserName, setUserName] = useState('')
  const [UserPassword, setUserPassword] = useState('')
  useEffect(()=>{

  },[])
  async function login(){
    console.log("ok");
    const response  = await fetch(`${Url()}/api/login`,{
      method:'POST',
      headers :{
        'Content-Type':'application/json'
      },
      body : JSON.stringify({'name':UserName, 'password': UserPassword})
    })
    const data = await response.json()
    if (data.status){
      AsyncStorage.setItem('IsLoggedIn','Loggedin')
      AsyncStorage.setItem('Token',data.token)
      navigator.replace('alerts');
    }
    else {
      Alert.alert("Error")
    }
  }
    return (
        <View style={styles.login}>
      <View style={styles.div}>
        <View style={styles.group}>
          <View style={styles.overlap}>
            <View style={styles.rectangle} />
            <View style={styles.overlapGroupWrapper}>
              <View style={styles.overlapGroup}>
                <Text style={styles.textWrapper}>User name</Text>
              </View>
            </View>
              <TextInput style={{flex:1, flexDirection:'row', paddingLeft:20, alignItems:'center', paddingTop:10}} onChangeText={(Text)=>setUserName(Text)}/>
            <Image style={styles.user} alt="User" source={require('../assets/user-login.png')} />
          </View>
        </View>
        <View style={styles.overlapWrapper}>
          <View style={styles.overlap2}>
            <View style={styles.ViewWrapper}>
              <View style={styles.passwordWrapper}>
                <Image style={styles.password}alt="Password" source={require('../assets/password-registeration.png')}/>
              <TextInput style={{flex:1, flexDirection:'row', paddingLeft:20, alignItems:'center', paddingTop:10}} secureTextEntry onChangeText={(Text)=>setUserPassword(Text)}/>
              </View>
            </View>
            <View style={styles.group2}>
              <View style={styles.overlap3}>
                <View style={styles.rectangle2}/>
                <Text style={styles.textWrapper2}>Password</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame}>
          <View style={styles.group3}>
            <View style={styles.overlapGroup2}>
            <View style={styles.rectangle3}/>
              <TouchableOpacity onPress={()=>login()}>
              <Text style={styles.textWrapper3}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image style={styles.img} alt="Login" source={require('../assets/login-registeration.png')} />
        </View>
        <View style={styles.group4}>
          <View style={styles.overlap4}>
            <Text style={styles.textWrapper4}>LOGIN</Text>
            <View style={styles.rectangle4}/>
          </View>
        </View>
        <View style={styles.groupWrapper}>
          <View style={styles.group5}>
            <View style={styles.forgotPasswordWrapper}>
              <Text style={styles.forgotPassword}>Forgot&nbsp;&nbsp;Password</Text>
            </View>
            {/* <Image style={styles.line} alt="Line" source={{uri:"https://c.animaapp.com/Zb94zA0d/img/line-1.svg"}} />
            <Image style={styles.line2} alt="Line" source={{uri:"https://c.animaapp.com/Zb94zA0d/img/line-2.svg"}} /> */}
          </View>
        </View>
        <View style={styles.group6}>
          <View style={styles.group7}>
            <View style={styles.overlap5}>
                  <TouchableOpacity onPress={()=>navigator.navigate('register')}>
              <View style={styles.group8}>
                <View style={styles.overlapGroup3}>
                  <Text style={styles.textWrapper5}>Create</Text>
                </View>
              <Image
                style={styles.addUserMale}
                alt="Add user male"
                source={require('../assets/add-user-registeration.png')}
                />
              </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.group9}>
          <Text style={styles.textWrapper6}>Remeber login</Text>
          <View style={styles.rectangle5} />
        </View>
      </View>
    </View>
    )}
    const styles = StyleSheet.create({login: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flex:1,
        alignSelf:'center'
      },
      div: {
        backgroundColor: '#ffffff',
        height: 844,
        overflow: 'hidden',
        position: 'relative',
        width: 390,
      },
      group: {
        height: 59,
        left: 35,
        position: 'absolute',
        top: 215,
        width: 336,
      },
      overlap: {
        height: 60,
        left: -1,
        position: 'relative',
        width: 338,
      },
      rectangle: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        height: 49,
        left: 0,
        position: 'absolute',
        top: 11,
        width: 338,
      },
      overlapGroupWrapper: {
        height: 17,
        left: 21,
        position: 'absolute',
        top: 0,
        width: 111,
      },
      overlapGroup: {
        backgroundColor: '#ffffff',
        height: 17,
        position: 'relative',
        width: 109,
      },
      textWrapper: {
        color: '#000000',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
        left: 4,
        letterSpacing: 0,
        // lineHeight: 'normal',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        whiteSpace: 'nowrap',
        width: 105,
      },
      user: {
        height: 33,
        left: 295,
        position: 'absolute',
        top: 17,
        width: 37,
      },
      overlapWrapper: {
        height: 56,
        left: 35,
        position: 'absolute',
        top: 320,
        width: 337,
      },
      overlap2: {
        height: 56,
        position: 'relative',
      },
      divWrapper: {
        height: 45,
        left: 0,
        position: 'absolute',
        top: 11,
        width: 337,
      },
      passwordWrapper: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        height: 47,
        left: -1,
        position: 'relative',
        top: -1,
        width: 339,
      },
      password: {
        height: 32,
        left: 293,
        position: 'absolute',
        top: 5,
        width: 37,
      },
      group2: {
        height: 18,
        left: 25,
        position: 'absolute',
        top: 0,
        width: 99,
      },
      overlap3: {
        height: 18,
        position: 'relative',
        width: 97,
      },
      rectangle2: {
        backgroundColor: '#ffffff',
        height: 14,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 97,
      },
      textWrapper2: {
        color: '#000000',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
        left: 5,
        letterSpacing: 0,
        // lineHeight: 'normal',
        position: 'absolute',
        textAlign: 'center',
        top: -10,
        backgroundColor:'#ffffff',
        whiteSpace: 'nowrap',
        width: 86,
      },
      frame: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        left: 100,
        position: 'absolute',
        top: 504,
      },
      group3: {
        height: 52,
        marginRight: -2,
        position: 'relative',
        width: 196,
      },
      overlapGroup2: {
        borderRadius: 10,
        height: 52,
        position: 'relative',
        width: 194,
      },
      rectangle3: {
        backgroundColor: '#8ceac1',
        borderRadius: 10,
        height: 52,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 194,
      },
      textWrapper3: {
        color: '#00203f',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '700',
        left: 33,
        letterSpacing: 0,
        // lineHeight: 'normal',
        position: 'absolute',
        top: 8,
        width: 74,
      },
      img: {
        height: 44,
        left: 139,
        position: 'absolute',
        top: 4,
        width: 38,
      },
      group4: {
        height: 55,
        left: -12,
        position: 'absolute',
        top: 126,
        width: 409,
      },
      overlap4: {
        height: 55,
        position: 'relative',
        width: 407,
      },
      textWrapper4: {
        color: '#00203f',
        fontFamily: 'Poppins',
        fontSize: 28,
        fontWeight: '700',
        left: 0,
        letterSpacing: 0,
        // lineHeight: 'normal',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        width: 407,
      },
      rectangle4: {
        backgroundColor: '#8ceac1',
        borderRadius: 2,
        height: 5,
        left: 170,
        position: 'absolute',
        top: 45,
        width: 68,
      },
      groupWrapper: {
        height: 26,
        left: 39,
        position: 'absolute',
        top: 429,
        width: 322,
      },
      group5: {
        height: 26,
        position: 'relative',
      },
      forgotPasswordWrapper: {
        height: 26,
        left: 85,
        position: 'absolute',
        top: 0,
        width: 162,
      },
      forgotPassword: {
        color: '#cac5c5',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '700',
        left: 0,
        letterSpacing: 0,
        // lineHeight: 'normal',
        position: 'absolute',
        top: 0,
        width: 160,
      },
      line: {
        height: 2,
        left: -1,
        position: 'absolute',
        top: 12,
        width: 66,
      },
      line2: {
        height: 2,
        left: 257,
        position: 'absolute',
        top: 12,
        width: 66,
      },
      group6: {
        height: 52,
        left: 100,
        position: 'absolute',
        top: 641,
        width: 194,
      },
      group7: {
        height: 52,
      },
      overlap5: {
        height: 52,
        position: 'relative',
        width: 196,
      },
      group8: {
        height: 52,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 196,
      },
      overlapGroup3: {
        backgroundColor: '#00203f',
        borderRadius: 10,
        height: 52,
        position: 'relative',
        width: 194,
      },
      textWrapper5: {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '700',
        left: 34,
        letterSpacing: 0,
        // lineHeight: 'normal',
        position: 'absolute',
        top: 6,
        width: 88,
      },
      addUserMale: {
        height: 44,
        left: 133,
        position: 'absolute',
        top: 0,
        width: 38,
      },
      group9: {
        height: 26,
        left: 105,
        position: 'absolute',
        top: 586,
        width: 198,
      },
      textWrapper6: {
        color: '#cac5c5',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '700',
        left: 36,
        letterSpacing: 0,
        // lineHeight: 'normal',
        position: 'absolute',
        top: 0,
        width: 160,
      },
      rectangle5: {
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 5,
        height: 19,
        left: 0,
        position: 'absolute',
        top: 4,
        width: 20,
      },})
export default login