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
    useEffect(async ()=>{
        const token = await AsyncStorage.getItem('Token')
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
    },[])
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
                <Alert_post/>
                <Alert_post/>
                <Alert_post/>
                <Alert_post/>
                </ScrollView>
            </View>
            <View style={{flex:0.16}}>
                <Bottom_bar/>
            </View>
    </View>
    
)}

export default Alerts