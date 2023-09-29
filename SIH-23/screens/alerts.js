import {View,Text,Image,StyleSheet,ScrollView} from 'react-native'
import Search_bar from '../components/search-bar'
import Side_bar_fore from '../components/side_bar_fore'
import Alert_post from '../components/alert-post'
import Bottom_bar from '../components/botton-bar'
import Map_filter from '../components/map-filter'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Url from '../components/Url'

const Alerts=({navigation})=>{
    const [Isloding, setIsloding] = useState(true)
    const [UserRole, setUserRole] = useState('')
    useEffect(async ()=>{
        const token = await AsyncStorage.getItem('Token')
        setUserRole(await AsyncStorage.getItem('role'))        
        const response = await fetch(`${Url()}/api/alerts`,{
            method : 'GET',
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        const data = await response.json()
        if(data.status){
            setIsloding(false)
        }
        else{
            navigation.replace('login')
        }
    },[])

    const alerts = [
        {
          Title: 'Alert 1',
          Message: 'This is the first alert message.',
          Type: 'Information',
          Timestamp: '2023-09-23T08:00:00Z',
        },
        {
          Title: 'Alert 2',
          Message: 'A critical alert has occurred!',
          Type: 'Critical',
          Timestamp: '2023-09-23T10:30:00Z',
        },
        {
          Title: 'Alert 3',
          Message: 'Warning: Low battery level.',
          Type: 'Warning',
          Timestamp: '2023-09-23T14:15:00Z',
        },
        {
            Title: 'Alert 1',
            Message: 'This is the first alert message.',
            Type: 'Information',
            Timestamp: '2023-09-23T08:00:00Z',
          },
          {
            Title: 'Alert 2',
            Message: 'A critical alert has occurred!',
            Type: 'Critical',
            Timestamp: '2023-09-23T10:30:00Z',
          },
          {
            Title: 'Alert 3',
            Message: 'Warning: Low battery level.',
            Type: 'Warning',
            Timestamp: '2023-09-23T14:15:00Z',
          },
          {
            Title: 'Alert 1',
            Message: 'This is the first alert message.',
            Type: 'Information',
            Timestamp: '2023-09-23T08:00:00Z',
          },
          {
            Title: 'Alert 2',
            Message: 'A critical alert has occhudouhoudhouhwifuwgvi idcvghurred!',
            Type: 'Critical',
            Timestamp: '2023-09-23T10:30:00Z',
          },
          {
            Title: 'Alert 3',
            Message: 'Warning: Low battery level.',
            Type: 'Warning',
            Timestamp: '2023-09-23T14:15:00Z',
          },
          {
            Title: 'Alert 1',
            Message: 'This is the first alert message.',
            Type: 'Information',
            Timestamp: '2023-09-23T08:00:00Z',
          },
          {
            Title: 'Alert 2',
            Message: 'A critical alert has occurred!',
            Type: 'Critical',
            Timestamp: '2023-09-23T10:30:00Z',
          },
          {
            Title: 'Alert 3',
            Message: 'Warning: Low battery level.',
            Type: 'Warning',
            Timestamp: '2023-09-23T14:15:00Z',
          },
        // Add more alert objects as needed
      ];
      
        

    if (Isloding){
        return(
            <View style={{flex:1,flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:30}}>Loading</Text>
            </View>
        )
    }
    

    return(
    <View style={{flex:1}}>
        <View style={{flex:0.2,marginBottom:20}}>
            <Search_bar/>
            <Side_bar_fore/>
            </View>
            <Text style={{paddingLeft:10, fontSize:20, textTransform:'uppercase'}}>{UserRole}</Text>
            <View style={{flex:0.1,flexDirection:'row'}}>
                <ScrollView horizontal={true}>
            <Map_filter/>
            <Map_filter/>
            <Map_filter/>
            <Map_filter/>
            </ScrollView>
            </View>
            <View style={{flex:1,flexDirection:'column'}}>
            <ScrollView>
                {alerts.map((alert)=>(
                    <View>
                        <Alert_post alert={alert}/>
                    </View>
                ))}
                </ScrollView>
                {/* <Text>fdsfdgfhhgffhgh</Text> */}
            </View>
            <View style={{flex:0.16}}>
                <Bottom_bar/>
            </View>
    </View>
    
)}

export default Alerts