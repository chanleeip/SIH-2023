import{Text,View,StyleSheet,Image,Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')

const Alert_post=({
  content,
  path,
  alert
})=>{
  return(
    <View style={[styles.iphone]}>
      <View style={styles.overlapGroupWrapper}>
        <View style={styles.overlapGroup}>
          <View style={styles.card}>
            <Text style={{fontSize:20, fontWeight:'bold', paddingLeft:10}}>{alert.Title}</Text>
            <Text style={{paddingLeft:10, }}>{alert.Message}</Text>
            <Text style={{paddingRight:10, textAlign:'right'}}>{alert.Timestamp}</Text>
            <Image style={styles.ellipse} alt="Ellipse" source={path} />
          </View>
            <View style={styles.frame2}>
              <Text style={styles.textWrapper3}>Report</Text>
              <Image style={styles.vector} alt="Vector" source={require('../assets/vector.png')}/>
            </View>
            <View style={styles.frame}>
            <Text style={styles.textWrapper2}>Contact</Text>
            <Image style={styles.group} alt="Group" source={require('../assets/contact-alerts.png')} />
          </View>
        </View>
      </View>
    </View>
)}

const styles = StyleSheet.create({
    iphone: {
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      paddingBottom:20
    },
    overlapGroupWrapper: {
        flex:1,
        flexDirection:'row',
      height: 144,
      overflow: 'hidden',
      width: width*0.9,
    },
    overlapGroup: {
      height: 146,
      left: 30,
      position: 'relative',
      top: -1,
      width: 330,
    },
    card: {
      borderWidth: 2,
      borderColor: '#00203f',
      borderRadius: 15,
      height: 129,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      width: width*0.9,
    },
    textWrapper: {
      color: 'orange',
      fontFamily: 'Poppins',
      fontSize: 22,
      fontWeight: '600',
      left: 16,
      letterSpacing: 0,
      //  lineHeight: 28, // Adjust as needed
      position: 'absolute',
      top: 6,
    },
    div: {
      color: 'pink',
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: '600',
      left: 16,
      letterSpacing: 0.28,
      //  lineHeight: 18, // Adjust as needed
      position: 'absolute',
      top: 44,
      width: 215,
    },
    ellipse: {
      height: 76,
      left: 238,
      position: 'absolute',
      top: 31,
      width: 76,
    },
    frame: {
      backgroundColor: '#8ceac1',
      borderWidth: 1.5,
      borderColor: '#00203f',
      borderRadius: 10,
      height: 28,
      alignContent:'flex-end',
      justifyContent:'flex-end',
      alignSelf: 'flex-end',
      alignItems:'flex-end',
      overflow: 'hidden',
      position: 'absolute',
      width: 108,
      left:width*0.6,
      bottom:0
    },
    textWrapper2: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontSize: 15,
      fontWeight: '600',
      left: 35,
      letterSpacing: 0,
      //  lineHeight: 18, // Adjust as needed
      position: 'absolute',
      top: 1,
    },
    group: {
      height: 13,
      left: 13,
      position: 'absolute',
      top: 5,
      width: 15,
    },
    frame2: {
      backgroundColor: '#8ceac1',
      borderWidth: 1.5,
      alignContent:'flex-start',
      justifyContent:'flex-start',
      alignSelf: 'flex-start',
      alignItems:'flex-start',
      borderColor: '#00203f',
      borderRadius: 10,
      height: 28,
      overflow: 'hidden',
      position: 'absolute',
      width: 106,
      left:width*0.1,
      bottom:0
    },
    textWrapper3: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontSize: 15,
      fontWeight: '600',
      left: 33,
      letterSpacing: 0,
      //  lineHeight: 18, // Adjust as needed
      position: 'absolute',
      top: 1,
    },
    vector: {
      height: 15,
      left: 14,
      position: 'absolute',
      top: 6,
      width: 15,
    }
})
export default Alert_post