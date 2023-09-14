import { View,Image,StyleSheet } from "react-native";

const Side_bar_fore=()=>{return(
    <Image
      style={styles.sidebarCollapsedInstance}
      alt="Sidebar collapsed"
      source={require('../assets/side-bar-map.png')}
    />
)}
const styles=StyleSheet.create({
    sidebarCollapsedInstance: {
        top: 55,
        height:50,
        width:50
      }
})
export default Side_bar_fore