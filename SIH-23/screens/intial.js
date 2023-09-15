import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Intial_screen() {
  return (
    <View style={styles.mainFrame}>
      <View style={styles.View}>
       <Image
          style={styles.ellipse}
          source={require( './../assets/ellipse-1.jpg' )}
          // You can also use a local image if needed: require('./path/to/local/image.png')
        />
        {/* <SvgUri
          width="100" 
          height="100"
          source={require( './../ellipse-1.svg' )}
        />  */}
        <View style={styles.yourCentralHubFor} >
          <Text style={styles.title_text}>Your Central Hub For your Central Hub For Coordinating Disaster Relief Efforts</Text>
        </View>
        <View style={styles.group}>
          <View style={styles.ellipse2} />
          <View style={styles.ellipse3} />
          <View style={styles.ellipse4} />
        </View>
        <View style={styles.overlapGroupWrapper}>
          <View style={styles.overlapGroup}>
            <Text style={styles.textWrapper2}>Welcome!</Text>
          </View>
        </View>
        <Image
          style={styles.nextPage}
          source={{ uri: 'https://c.animaapp.com/NPFKwylh/img/next-page@2x.png' }}
        />
        <Image
          style={styles.backTo}
          source={{ uri: 'https://c.animaapp.com/NPFKwylh/img/back-to@2x.png' }}
        />
        <View style={styles.overlapWrapper}>
          <View style={styles.overlap}>
            <Text style={styles.textWrapper3}>DISASTER MANAGEMENT</Text>
            <View style={styles.rectangle} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  mainFrame: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View: {
    backgroundColor: '#ffffff',
    height: 844,
    overflow: 'hidden',
    position: 'relative',
    width: 390,
  },
  ellipse: {
    height: 279,
    left: 102,
    position: 'absolute',
    top: 149,
    width: 231,
  },
  yourCentralHubFor: {
    left: 10,
    position: 'absolute',
    overflow: 'hidden',
    top: 576,
  },
  group: {
    height: 10,
    left: 158,
    position: 'absolute',
    top: 692,
    width: 74,
  },
  ellipse2: {
    backgroundColor: '#00203f',
    borderColor: '#00203f',
    borderRadius: 6,
    height: 12,
    left: 63,
    position: 'absolute',
    top: -1,
    width: 12,
  },
  ellipse3: {
    backgroundColor: '#00203f',
    borderColor: '#00203f',
    borderRadius: 6,
    height: 12,
    left: 31,
    position: 'absolute',
    top: -1,
    width: 12,
  },
  ellipse4: {
    backgroundColor: '#00203f',
    borderRadius: 6,
    height: 12,
    left: -2,
    position: 'absolute',
    top: -2,
    width: 14,
  },
  overlapGroupWrapper: {
    height: 60,
    left: 102,
    position: 'absolute',
    top: 477,
    width: 202,
  },
  overlapGroup: {
    backgroundColor: '#00203f',
    borderRadius: 10,
    height: 60,
    position: 'relative',
    width: 200,
  },
  title_text: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', // Center-align the text
    marginHorizontal: 20, // Add horizontal margin for better readability
    color: '#333', // Set your desired text color
  },
  textWrapper2: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    left: 29,
    letterSpacing: 0,
    lineHeight: 34,
    position: 'absolute',
    top: 11,
  },
  nextPage: {
    height: 50,
    left: 281,
    position: 'absolute',
    top: 751,
    width: 71,
  },
  backTo: {
    height: 50,
    left: 52,
    position: 'absolute',
    top: 751,
    width: 71,
  },
  overlapWrapper: {
    height: 55,
    left: -6,
    position: 'absolute',
    top: 47,
    width: 409,
  },
  overlap: {
    height: 55,
    position: 'relative',
    width: 407,
  },
  textWrapper3: {
    color: '#00203f',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    left: 0,
    letterSpacing: 0,
    lineHeight: 55,
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: 407,
  },
  rectangle: {
    backgroundColor: '#8ceac1',
    borderRadius: 2,
    height: 5,
    left: 170,
    position: 'absolute',
    top: 42,
    width: 68,
  },
};
