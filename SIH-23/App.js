import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Intial_screen from './screens/intial';
import register_screen from './screens/register'
import login from './screens/login';
import side_bar from './components/sidebar'
import bottom_bar from './components/botton-bar';
import post_message from './screens/post-message';
import Map from './screens/map';
import map_sidebar from './components/map-disaster_type';
import Alert_post from './components/alert-post';
import Alerts from './screens/alerts';
import Helpline_post from './components/helpline-post';
import Helpline from './screens/helpline';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator = createStackNavigator(
  {
    // Home: App, // Your existing App component
    // Intial_screen: intial_screen, 
    Register_screen:Alerts// Your new screen component
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
  return (
    
    <View style={styles.container}>
     < StatusBar/>
      <AppContainer/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
