import { View,Text,StyleSheet } from "react-native"
const Map_filter=({text,style})=>{return(
    <View style={[styles.divWrapper,style]}>
          <Text style={styles.textWrapper6}>{text}</Text>
        </View>
)}
const styles=StyleSheet.create({
    divWrapper: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#00203f',
        borderRadius: 20,
        height: 29,
        left: 10,
        overflow: 'hidden',
        top: 60,
        width: 92,
        marginHorizontal: 5
      },
      textWrapper6: {
        color: '#000000',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        left: 17,
        letterSpacing: 0,
        lineHeight: 18,
        position: 'absolute',
        top: 2,
      }
})
export default Map_filter