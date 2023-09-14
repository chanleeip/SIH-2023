import { View, Text, Image,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const bottom_bar = ()=>{
            return (
              <View style={styles.bottomBar}>
                <View style={styles.mapNavigation}>
                  <View style={styles.overlapGroup}>
                    <Image style={styles.mapIcon} alt="Map icon" source={require('../assets/map-bottom-bar.png')} />
                    <Text style={styles.textWrapper}>Map</Text>
                  </View>
                </View>
                <View style={styles.alertNavigation}>
                  <View style={styles.overlap}>
                    <Image style={styles.siren} alt="Siren" source={require('../assets/siren-bottom-ba.png')}/>
                    <Text style={styles.div}>Alerts</Text>
                  </View>
                </View>
                <View style={styles.postNavigation}>
                  <Text style={styles.textWrapper2}>Post</Text>
                  <Image style={styles.postIcon} alt="Post icon" source={require('../assets/post-bottom-bar.png')} />
                </View>
                <View style={styles.chatNavigation}>
                  <Image style={styles.vector} alt="Vector" source={require('../assets/post-bottom_bar.png')} />
                  <Text style={styles.textWrapper3}>Chats</Text>
                </View>
                <View style={styles.emergencyNavigation}>
                  <View style={styles.overlap2}>
                    <Image style={styles.img} alt="Vector" source={require('../assets/chat-bottom_bar.png')} />
                    <Text style={styles.textWrapper4}>Helpline</Text>
                  </View>
                </View>
              </View>
            );
          };
    const styles=StyleSheet.create({ 
        bottomBar: {
        backgroundColor: '#00203f',
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 71,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        width: 390,

      },
      mapNavigation: {
        height: 56,
        left: 32,
        position: 'absolute',
        top: 9,
        width: 38,
      },
      overlapGroup: {
        height: 56,
        position: 'relative',
        width: 36,
      },
      mapIcon: {
        height: 35,
        left: 1,
        position: 'absolute',
        top: 0,
        width: 35,
      },
      textWrapper: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        left: 0,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 33,
      },
      alertNavigation: {
        height: 56,
        left: 100,
        position: 'absolute',
        top: 9,
        width: 50,
      },
      overlap: {
        height: 56,
        position: 'relative',
        width: 48,
      },
      siren: {
        height: 38,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 38,
      },
      div: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        left: 0,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 31,
        width: 48,
      },
      postNavigation: {
        height: 53,
        left: 167,
        position: 'absolute',
        top: 11,
        width: 38,
      },
      textWrapper2: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        left: 1,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 30,
      },
      postIcon: {
        height: 29,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 36,
      },
      chatNavigation: {
        height: 55,
        left: 233,
        position: 'absolute',
        top: 9,
        width: 48,
      },
      vector: {
        height: 30,
        left: 10,
        position: 'absolute',
        top: 0,
        width: 30,
      },
      textWrapper3: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        left: 0,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 32,
      },
      emergencyNavigation: {
        height: 52,
        left: 294,
        position: 'absolute',
        top: 11,
        width: 64,
      },
      overlap2: {
        height: 52,
        position: 'relative',
        width: 62,
      },
      img: {
        height: 30,
        left: 16,
        position: 'absolute',
        top: 0,
        width: 30,
      },
      textWrapper4: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        left: 0,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 30,
      },})

export default bottom_bar