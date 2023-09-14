import { View, Text, Image,StyleSheet } from 'react-native';

const map_sidebar=()=>{return(
<View style={styles.frame}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <Text style={styles.textWrapper}>select a type</Text>
          <View style={styles.rectangle} />
        </View>
        <View style={styles.div2}>
          <Image style={styles.cyclone} alt="Cyclone" source={require('../assets/cyclone.png')} />
          <Text style={styles.textWrapper2}>cyclones</Text>
          <Image style={styles.line} alt="Line" source={require('../assets/line-4.png')} />
          <Text style={styles.textWrapper3}>earthquakes</Text>
          <Image style={styles.img}alt="Line" source={require('../assets/line-4.png')} />
          <Text style={styles.textWrapper4}>floods</Text>
          <Image style={styles.vector} alt="Vector"source={require('../assets/earthquale.png')} />
          <Image style={styles.vector2} alt="Vector" source={require('../assets/flood.png')} />
        </View>
        {/* <Image style={styles.line-2} alt="Line" source={require('../assets/line-4.png')} /> */}
        <View style={styles.closeButton}>
          <View style={styles.overlapGroup}>
            <View style={styles.ellipse}/>
            <Image style={styles.group} alt="Group" source={require('../assets/x-sidebar.png')} />
          </View>
        </View>
      </View>
    </View>

)}
const styles = StyleSheet.create({
    frame: {
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      top:50,
      width:'auto'

    },
    div: {
      backgroundColor: '#ffffff',
      height: 332,
      position: 'relative',
      width: 353,
    },
    overlap: {
      height: 40,
      left: 100,
      position: 'absolute',
      top: 14,
      width: 156,
    },
    textWrapper: {
      color: '#00203f',
      fontFamily: 'Poppins',
      fontSize: 24,
      fontWeight: '600',
      left: 0,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: 0,
    },
    rectangle: {
      backgroundColor: '#8ceac1',
      borderRadius: 2,
      height: 5,
      left: 43,
      position: 'absolute',
      top: 35,
      width: 68,
    },
    div2: {
      height: 182,
      left: 52,
      position: 'absolute',
      top: 94,
      width: 250,
    },
    cyclone: {
      height: 35,
      left: 0,
      position: 'absolute',
      top: 0,
      width: 36,
    },
    textWrapper2: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontSize: 24,
      fontWeight: '600',
      left: 78,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: -1,
      width: 110,
    },
    line: {
      height: 1,
      left: 0,
      position: 'absolute',
      top: 54,
      width: 251,
    },
    textWrapper3: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontSize: 24,
      fontWeight: '600',
      left: 74,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: 71,
    },
    img: {
      height: 1,
      left: 0,
      position: 'absolute',
      top: 124,
      width: 251,
    },
    textWrapper4: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontSize: 24,
      fontWeight: '600',
      left: 78,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: 141,
    },
    vector: {
      height: 43,
      left: 0,
      position: 'absolute',
      top: 66,
      width: 42,
    },
    vector2: {
      height: 35,
      left: 3,
      position: 'absolute',
      top: 141,
      width: 35,
    },
    line2: {
      height: 1,
      left: 52,
      position: 'absolute',
      top: 284,
      width: 251,
    },
    closeButton: {
      height: 46,
      left: 302,
      position: 'absolute',
      top: 23,
      width: 46,
    },
    overlapGroup: {
      borderRadius: 23,
      height: 46,
      position: 'relative',
    },
    ellipse: {
      backgroundColor: '#00203f',
      borderRadius: 23,
      height: 46,
      left: 0,
      position: 'absolute',
      top: -11,
      width: 46,
    },
    group: {
      height: 21,
      left: 13,
      position: 'absolute',
      top: 2,
      width: 21,
    },
  });
export default map_sidebar