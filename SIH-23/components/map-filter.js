import { View,Text,StyleSheet,Dimensions } from "react-native"
const {width,height} =Dimensions.get('window')
const Map_filter=({text,style})=>{return(
    <View style={[styles.divWrapper,style]}>
          <Text style={styles.textWrapper6}>{"Disasters"}</Text>
        </View>
)}
const styles=StyleSheet.create({
    divWrapper: {
      height:height*0.04,
      width:width*0.25,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#00203f',
        borderRadius: 20,
        overflow: 'hidden',
        marginTop:2,
        marginHorizontal: 1,
      },
      textWrapper6: {
        flex: 1,
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center',
  color: '#000000',
  fontFamily: 'Poppins',
  fontSize: height * 0.022,
  fontWeight: '600',
  position: 'relative',
      }
})
export default Map_filter