import{View,Text,Image} from 'react-native'
import Helpline_post from '../components/helpline-post'
import Side_bar_fore from '../components/side_bar_fore'
import Search_bar from '../components/search-bar'
import Bottom_bar from '../components/botton-bar'

const Helpline=()=>{return(
    <View>
<Side_bar_fore/>
<Search_bar text={"Search HelpNumbers"}/>
<View style={{flexDirection:'column'}}>

    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
    <Helpline_post heading={"Ambulance"} content={"1223456576"}/>
</View>
<Bottom_bar custom_style={{top:205}}/>
</View>
)}
export default Helpline