// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Intial_screen from './screens/intial';
import register_screen from './screens/register'
import login from './screens/login';
// import side_bar from './components/sidebar'
// import bottom_bar from './components/botton-bar';
// import post_message from './screens/post-message';
// import Map from './screens/map';
// import map_sidebar from './components/map-disaster_type';
// import Alert_post from './components/alert-post';
// import Alerts from './screens/alerts';
// import Helpline_post from './components/helpline-post';
// import Helpline from './screens/helpline';
import Map_basic from './components/map-basic';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name="login" component={Map_basic} options={{headerShown:false}}/>
      <Stack.Screen name="register" component={register_screen} options={{headerShown:false}}/>
      {/* <Stack.Screen name="alerts" component={Alerts} options={{headerShown:false}}/> */}
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
