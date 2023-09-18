import { View, Text, Image,StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
import PropTypes from 'prop-types';

const Bottom_bar = ()=>{
            return (
              <View style={[styles.bottomBar]}>
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
                  <Image style={styles.postIcon} alt="Post icon" source={require('../assets/post-bottom-bar.png')} />
                   <Text style={styles.textWrapper2}>Post</Text>
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
        height: height*0.085,
        overflow: 'hidden',
        bottom: 0,
        width: width,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:10

      },
      mapNavigation: {
        height: height*0.08,
        // position: 'relative',
        width: 38,
        // backgroundColor:'green',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
      },
      overlapGroup: {
        height: 56,
        position: 'relative',
        width: 36,
      },
      mapIcon: {
        height: 35,
        position: 'relative',
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
        position: 'relative',
      },
      alertNavigation: {
        // backgroundColor:'green',
        height: height*0.08,
        // position: 'relative',
        alignItems:'center',
        width: 50,
        justifyContent:'center',
        alignContent:'center'
      },
      overlap: {
        height: 56,
        position: 'relative',
        width: 48,
      },
      siren: {
        height: 38,
        position: 'relative',
        width: 38,
      },
      div: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'relative',
        width: 48,
      },
      postNavigation: {
        justifyContent:'center',
        alignContent:'center',
        height: height*0.08,
        // position: 'relative',
        width: 38,
      },
      textWrapper2: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 'normal',
        position: 'relative',
      },
      postIcon: {
        height: 29,
        position: 'relative',
        width: 36,
      },
      chatNavigation: {
        // backgroundColor:'green',
        justifyContent:'center',
        alignContent:'center',
        height: height*0.08,
        // position: 'relative',
        width: 64,
      },
      vector: {
        height: 30,
        position: 'relative',
        width: 30,
      },
      textWrapper3: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 'normal',
        position: 'relative',
      },
      emergencyNavigation: {
        // backgroundColor:'green',
        justifyContent:'center',
        alignContent:'center',
        height: height*0.08,
        // position: 'relative',
        width: 64,
      },
      overlap2: {
        height: 52,
        position: 'relative',
        width: 62,
      },
      img: {
        height: 30,
        position: 'relative',
                width: 30,
      },
      textWrapper4: {
        color: '#8ceac1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'relative',
      },})

export default Bottom_bar