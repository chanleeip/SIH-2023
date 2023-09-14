import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import intial_screen from './screens/intial';
import register_screen from './screens/register'
import login from './screens/login';
import side_bar from './components/sidebar'
import post_message from './components/post-message';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator = createStackNavigator(
  {
    // Home: App, // Your existing App component
    // Intial_screen: intial_screen, 
    Register_screen:post_message// Your new screen component
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
