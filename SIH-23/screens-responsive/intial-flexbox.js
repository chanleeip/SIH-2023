import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Onboarding_screen() {
  return (
    <View style={{flex:1}}>
      <View style={styles.overlapGroupWrapper}>
        <View style={styles.overlap}>
          <Text style={styles.textWrapper3}>DISASTER MANAGEMENT</Text>
          <View style={styles.rectangle} />
        </View>
      </View>
      <View style={styles.flexibleContainer}>
      <Image
          style={styles.ellipse}
          source={require( './../assets/ellipse-1.jpg' )}
        />
        </View>
        <View style={{flex:0.1}}>
    <View style={styles.overlapGroupWrappers}>
          <View style={styles.overlapGroup}>
            <Text style={styles.textWrapper2}>Welcome!</Text>
          </View>
        </View>
    </View>
        <View style={{flex:0.1}}>
            
        <View style={styles.yourCentralHubFor} >
          <Text style={styles.title_text}>Your Central Hub For your Central Hub For Coordinating Disaster Relief Efforts</Text>
        </View>
    </View>
    <View style={{flex:0.1,flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
    <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
          <View style={styles.ellipse2} />
          <View style={styles.ellipse3} />
          <View style={styles.ellipse4} />
        </View>
        </View>
        <View style={{flex:0.1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Image
          style={styles.backTo}
          source={{ uri: 'https://c.animaapp.com/NPFKwylh/img/back-to@2x.png' }}
        />
        <Image
          style={styles.nextPage}
          source={{ uri: 'https://c.animaapp.com/NPFKwylh/img/next-page@2x.png' }}
        />
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
  overlapGroupWrapper: {
    flex:0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextPage: {
    height: height*0.06,
    position: 'relative',
    width: width*0.11,
    marginHorizontal:width*0.08
  },
  backTo: {
    height: height*0.06,
    position: 'relative',
    width: width*0.11,
    marginHorizontal:width*0.08
  },ellipse2: {
    backgroundColor: '#00203f',
    borderColor: '#00203f',
    borderRadius: width*0.02,
    height: 12,
    marginHorizontal:10,
    width: 12,
  },
  ellipse3: {
    backgroundColor: '#00203f',
    borderColor: '#00203f',
    borderRadius: width*0.02,
    height: 12,
    marginHorizontal:10,
    width: 12,
  },
  ellipse4: {
    backgroundColor: '#00203f',
    borderRadius: width*0.2,
    height: 12,
    marginHorizontal:10,
    width: 12,
  },overlapGroupWrappers: {
    alignItems: 'center',
    justifyContent: 'center',
  },  overlapGroup: {
    marginTop:20,
    backgroundColor: '#00203f',
    borderRadius: 10,
    height: 60,
    position: 'relative',
    alignContent:'center',
    justifyContent:'center',
    width: 200,
  },textWrapper2: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0,
    position: 'relative',
    alignContent:'center',
    alignSelf:'center',
    justifyContent:'center',
  },yourCentralHubFor: {
    marginTop:10,
    position: 'relative',
    alignContent:'center',
    justifyContent:'center',
  },title_text: {
    fontSize: height*0.025, // Adjust the font size as needed
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', // Center-align the text
    marginHorizontal: 20, // Add horizontal margin for better readability
    color: '#333', // Set your desired text color
  },ellipse: {
    padding:20,
    flex:1,
    position: 'relative',
    alignContent:'center',
    justifyContent:'center',
    alignSelf: 'center',
    width:width*0.8
  },
  overlap: {
    width: width * 0.8, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper3: {
    marginTop:20,
    color: '#00203f',
    fontFamily: 'Poppins',
    fontSize: height * 0.03, // Set font size based on screen height
    fontWeight: '700',
    letterSpacing: 0,
    textAlign: 'center',
    marginBottom:5
  },
  rectangle: {
    backgroundColor: '#8ceac1',
    borderRadius: 2,
    height: 5,
    width: width * 0.5,
  },
  flexibleContainer: {
    flex: 0.4, // Take up 1 part of available space
  },
});
