import{View,Text,Image,ScrollView} from 'react-native'
import Helpline_post from '../components/helpline-post'
import Side_bar_fore from '../components/side_bar_fore'
import Search_bar from '../components/search-bar'
import Bottom_bar from '../components/botton-bar'

const Helpline=()=>{return(
    <View style={{flex:1}}>
        <View style={{flex:0.2}}>
        <Side_bar_fore/>
<Search_bar text={"Search HelpNumbers"}/>
        </View>
<View style={{flexDirection:'column',flex:1,backgroundColor:'white'}}>
<ScrollView>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    </ScrollView>
</View>
<View>
<Bottom_bar style={{flex:0.16}}/>
</View>
</View>
)}
export default Helpline