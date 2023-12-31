import { View,Text,StyleSheet,Dimensions,ScrollView } from "react-native";
import Bottom_bar from "../components/botton-bar";
import Map_filter from "../components/map-filter";
import Search_bar from "../components/search-bar";
import Side_bar_fore from "../components/side_bar_fore";
import Map_basic from "../components/map-basic";
const { width, height } = Dimensions.get('window');
const Map=()=>{return(
    <View style={[styles.homeScreen]}>
      <View style={{flex:0.19,backgroundColor:'white'}}>
            <Side_bar_fore/>
            <Search_bar text={"hello"}/>
            </View>
        <View style={{flexDirection:'row',flex:0.06,backgroundColor:'white'}}>
          <ScrollView horizontal={true}>
        <Map_filter text="  State" />
        <Map_filter text="Nearby" />
        <Map_filter text="Types" />
        <Map_filter text="Duration" />
        </ScrollView>
        </View>
        <View style={{flex:1}}><Map_basic/></View>
        <View style={{flex:0.125,backgroundColor:'white'}}>
        <Bottom_bar/>
        </View>
      </View>
)}

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: 'white',
    flex:1,
  },
  overlap3: {
    backgroundColor: '#ffffff',
    height: 844,
    position: 'relative',
  },
  sidebarCollapsedInstance: {
    top: 55,
    height:50,
    width:50
  },
  searchBar: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#00203f',
    borderRadius: 20,
    height: 57,
    left: 55,
    overflow: 'hidden',
    position: 'absolute',
    top: 50,
    width: 308,
  },
  searchIcon: {
    height: 36,
    left: 12,
    position: 'absolute',
    top: 9,
    width: 36,
  },
  searchPlaces: {
    color: '#cac5c5',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    left: 70,
    letterSpacing: 0,
    lineHeight: 24,
    position: 'absolute',
    top: 11,
  },
  frame: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00203f',
    borderRadius: 20,
    height: 29,
    left: 5,
    overflow: 'hidden',
    position: 'absolute',
    top: 110,
    width: 92,
  },
  textWrapper5: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '600',
    left: 25,
    letterSpacing: 0,
    lineHeight: 18,
    position: 'absolute',
    top: 2,
  },
  divWrapper: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00203f',
    borderRadius: 20,
    height: 29,
    left: 102,
    overflow: 'hidden',
    position: 'absolute',
    top: 110,
    width: 92,
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
  },
  frame2: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00203f',
    borderRadius: 20,
    height: 29,
    left: 199,
    overflow: 'hidden',
    position: 'absolute',
    top: 110,
    width: 92,
  },
  textWrapper7: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '600',
    left: 22,
    letterSpacing: 0,
    lineHeight: 18,
    position: 'absolute',
    top: 2,
  },
  frame3: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00203f',
    borderRadius: 20,
    height: 29,
    left: 295,
    overflow: 'hidden',
    position: 'absolute',
    top: 110,
    width: 92,
  },
  textWrapper8: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '600',
    left: 11,
    letterSpacing: 0,
    lineHeight: 18,
    position: 'absolute',
    top: 2,
  },
  bottomBarInstance: {
    left: 0,
    position: 'absolute',
    top: 773,
  },
});
export default Map