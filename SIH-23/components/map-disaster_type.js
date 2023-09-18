import { View, Text, Image,StyleSheet,Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window')

const map_sidebar=()=>{return(
  <View>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <Text style={styles.textWrapper}>select a type</Text>
          <View style={styles.rectangle} />
            <Image style={styles.group} alt="Group" source={require('../assets/x-sidebar.png')} />
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
        <Image style={styles.line2} alt="Line" source={require('../assets/line-4.png')} />
        <View style={styles.closeButton}>
          {/* <View style={styles.overlapGroup}>
            <View style={styles.ellipse}/>
            <Image style={styles.group} alt="Group" source={require('../assets/x-sidebar.png')} />
          </View> */}
        </View>
      </View>
      </View>

)}
const styles = StyleSheet.create({
    div: {
      height: 332,
      top:50,
      position: 'relative',
      width: width*0.4,
      alignSelf:'center'
      
    },
    overlap: {
      height: 40,
      position: 'relative',
      flexDirection:'row',
      alignContent:'center',
      alignSelf:'center',
      width: width*0.3,
    },
    textWrapper: {
      color: '#00203f',
      fontFamily: 'Poppins',
      fontSize: width*0.05,
      paddingBottom:20,
      fontWeight: '600',
      lineHeight: 'normal',
      position: 'relative',
      alignItems:'center',
      alignSelf:'center'
    },
    rectangle: {
      backgroundColor: '#8ceac1',
      borderRadius: 2,
      height:5,
      position: 'absolute',
      top: 35,
      width: width*0.3,
    },
    div2: {
      marginTop:30,
      height: 182,
      position: 'relative',
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
      position: 'relative',
      top: 54,
      width: width*0.5,
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
      width: width*0.5,
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
      position: 'relative',
      width: width*0.5,
    },
    closeButton: {
      height: 46,
      flexDirection:'row',
      alignContent:'flex-end',
      alignSelf:'flex-end',
      position: 'absolute',
      top: 23,
      width: 46,
    },
    overlapGroup: {
      borderRadius: 23,
      height: 46,
      position: 'relative',
      alignSelf:'flex-end',
      alignContent:'flex-end',
      alignItems:'flex-end'
    },
    ellipse: {
      backgroundColor: '#00203f',
      borderRadius: 30,
      height: height*0.04,
      position: 'relative',
      width: width*0.07,
      left:100
    },
    group: {
      height: height*0.02,
      position: 'relative',
      width: 21,
      left:width*0.04
    },
  });
export default map_sidebar