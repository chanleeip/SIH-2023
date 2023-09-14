import {Text,Image,View,StyleSheet} from 'react-native'

const Helpline_post=({heading,content})=>{return(
<View style={styles.frame}>
      <View style={styles.div}>
      <Text style={styles.textWrapper}>{heading}</Text>
        <Text style={styles.textWrapper2}>{content}</Text>
      </View>
    </View>

)}
const styles = StyleSheet.create({
    frame: {
      alignItems: 'flex-start',
      flexDirection: 'column',
      paddingHorizontal: 22,
      paddingTop: 20,
    },
    div: {
        top:50,
      backgroundColor: '#00203f',
      borderRadius: 10,
      height: 136,
      overflow: 'hidden',
      width: 341,
      marginBottom:10,
    },
    textWrapper: {
      color: '#8ceac1',
      fontFamily: 'Poppins',
      fontSize: 22,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 30,
      marginLeft: 22, // Adjust this value based on your design
      marginTop: 10, // Adjust this value based on your design
    },
    textWrapper2: {
      color: '#cac5c5',
      fontFamily: 'Poppins',
      fontSize: 18,
      fontWeight: '700',
      letterSpacing: 0,
      lineHeight: 24,
      marginLeft: 35, // Adjust this value based on your design
      marginTop: 47, // Adjust this value based on your design
      width: 243,
    },
    textWrapper3: {
      color: '#8ceac1',
      fontFamily: 'Poppins',
      fontSize: 22,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 30,
      marginLeft: 23, // Adjust this value based on your design
      marginTop: 7, // Adjust this value based on your design
    },
    textWrapper4: {
      color: '#cac5c5',
      fontFamily: 'Poppins',
      fontSize: 18,
      fontWeight: '700',
      letterSpacing: 0,
      lineHeight: 24,
      marginLeft: 35, // Adjust this value based on your design
      marginTop: 48, // Adjust this value based on your design
      width: 243,
    },
    textWrapper5: {
      color: '#8ceac1',
      fontFamily: 'Poppins',
      fontSize: 22,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 30,
      marginLeft: 23, // Adjust this value based on your design
      marginTop: 8, // Adjust this value based on your design
    },
    textWrapper6: {
      color: '#cac5c5',
      fontFamily: 'Poppins',
      fontSize: 18,
      fontWeight: '700',
      letterSpacing: 0,
      lineHeight: 24,
      marginLeft: 38, // Adjust this value based on your design
      marginTop: 47, // Adjust this value based on your design
      width: 243,
    },
    textWrapper7: {
      color: '#8ceac1',
      fontFamily: 'Poppins',
      fontSize: 22,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 30,
      marginLeft: 23, // Adjust this value based on your design
      marginTop: 4, // Adjust this value based on your design
    },
    textWrapper8: {
      color: '#cac5c5',
      fontFamily: 'Poppins',
      fontSize: 18,
      fontWeight: '700',
      letterSpacing: 0,
      lineHeight: 24,
      marginLeft: 35, // Adjust this value based on your design
      marginTop: 45, // Adjust this value based on your design
      width: 243,
    },
  });
export default Helpline_post