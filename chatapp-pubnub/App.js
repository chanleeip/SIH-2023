import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { ChatView } from './src/ChatScree.js'
import { ChannelListReactNative } from './src/Groups-list.js'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
     <SafeAreaView style={styles.container}>
       <StatusBar style='auto' />
       <KeyboardAvoidingView
         style={styles.keyboardAvoidingViewContainer}
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
       >
         <ChatView style={styles.container} />
          {/* <ChannelListReactNative  /> */}
       </KeyboardAvoidingView>
     </SafeAreaView>
   </SafeAreaProvider>
 )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
  },
});
