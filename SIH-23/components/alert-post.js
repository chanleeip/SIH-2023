import{Text,View,StyleSheet,Image} from 'react-native'

const Alert_post=({heading,content,custom_style})=>{return(
    <View style={[styles.iphone,custom_style]}>
      <View style={styles.overlapGroupWrapper}>
        <View style={styles.overlapGroup}>
          <View style={styles.card}>
            <Text style={styles.textWrapper}>{heading}</Text>
            <Text style={styles.div}>{content}</Text>
            <Image style={styles.ellipse} alt="Ellipse" source={{uri:"https://c.animaapp.com/VRoiScPa/img/ellipse-12.svg"}} />
          </View>
          <View style={styles.frame}>
            <Text style={styles.textWrapper2}>Contact</Text>
            <Image style={styles.group} alt="Group" source={{uri:"https://c.animaapp.com/VRoiScPa/img/group-42@2x.png"}} />
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.frame2}>
              <Text style={styles.textWrapper3}>Report</Text>
              <Image style={styles.vector} alt="Vector" source={{uri:"https://c.animaapp.com/VRoiScPa/img/vector.svg" }}/>
            </View>
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
      top:100,
      paddingBottom:20
    },
    overlapGroupWrapper: {
      backgroundColor: '#ffffff',
      height: 144,
      overflow: 'hidden',
      width: 385,
    },
    overlapGroup: {
      height: 146,
      left: 30,
      position: 'relative',
      top: -1,
      width: 330,
    },
    card: {
      backgroundColor: '#eff1ff',
      borderWidth: 2,
      borderColor: '#00203f',
      borderRadius: 15,
      height: 129,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      width: 330,
    },
    textWrapper: {
      color: '#00203f',
      fontFamily: 'Poppins',
      fontSize: 22,
      fontWeight: '600',
      left: 16,
      letterSpacing: 0,
      lineHeight: 28, // Adjust as needed
      position: 'absolute',
      top: 6,
    },
    div: {
      color: '#777373',
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: '600',
      left: 16,
      letterSpacing: 0.28,
      lineHeight: 18, // Adjust as needed
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
      left: 185,
      overflow: 'hidden',
      position: 'absolute',
      top: 117,
      width: 108,
    },
    textWrapper2: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontSize: 15,
      fontWeight: '600',
      left: 35,
      letterSpacing: 0,
      lineHeight: 18, // Adjust as needed
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
    frameWrapper: {
      height: 27,
      left: 48,
      position: 'absolute',
      top: 118,
      width: 104,
    },
    frame2: {
      backgroundColor: '#8ceac1',
      borderWidth: 1.5,
      borderColor: '#00203f',
      borderRadius: 10,
      height: 28,
      left: -1,
      overflow: 'hidden',
      position: 'relative',
      top: -1,
      width: 106,
    },
    textWrapper3: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontSize: 15,
      fontWeight: '600',
      left: 33,
      letterSpacing: 0,
      lineHeight: 18, // Adjust as needed
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