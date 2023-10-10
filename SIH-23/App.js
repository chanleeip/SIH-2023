// import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Intial_screen from './screens/intial';
import register_screen from './screens/register'
import login from './screens/login';
// import side_bar from './components/sidebar'
import bottom_bar from './components/botton-bar';
// import post_message from './screens/post-message';
// import Map from './screens/map';
import map_sidebar from './components/map-disaster_type';
import Alert_post from './components/alert-post';
import Alerts from './screens/alerts';
import Helpline_post from './components/helpline-post';
// import Helpline from './screens/helpline';
import Map_basic from './components/map-basic';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding_screen from './screens-responsive/intial-flexbox';
import Alert_page from './components/alert-post';
import Map_filter from './components/map-filter'
import Search_bar from './components/search-bar';
import Side_bar_fore from './components/side_bar_fore';
import side_bar from './components/sidebar';
import Helpline from './screens/helpline';
import Map from './screens/map';
import post_message from './screens/post-message';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();


export default function App() {
  
  const [LoggedInStatus, setLoggedInStatus] = useState('LoggedIn');
  const [isLoading, setisLoading] = useState(true);
  useEffect(()=>{
    async function redirect_to_dashboard(){
        const loginstatus = await AsyncStorage.getItem('IsLoggedIn');
        if (loginstatus != null){
          setLoggedInStatus(loginstatus);
          setisLoading(false);
        }
        else {
          setLoggedInStatus('onboarding');
          setisLoading(false);
        }
    }
    redirect_to_dashboard();
  },[]);

  if(isLoading){
    return(
      <View>
          <Text>Loading</Text>
      </View>
    )
  }

  function startapp(){
    if (LoggedInStatus == 'Loggedin'){
      return "alerts";
    } else if (LoggedInStatus == 'NotLoggedIn'){
      return "login";
    } else if (LoggedInStatus == 'onboarding') {
      return "onboarding";
    }
  }

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={startapp()}>
      <Stack.Screen name="login" component={Helpline_post} options={{headerShown:false}}/>
      <Stack.Screen name="onboarding" component={Onboarding_screen} options={{headerShown:false}}/>
      <Stack.Screen name="register" component={register_screen} options={{headerShown:false}}/>
      <Stack.Screen name="alerts" component={Alerts} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});
