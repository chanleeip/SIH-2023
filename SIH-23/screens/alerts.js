import {View,Text,Image,StyleSheet} from 'react-native'
import Search_bar from '../components/search-bar'
import Side_bar_fore from '../components/side_bar_fore'
import Alert_post from '../components/alert-post'
import Bottom_bar from '../components/botton-bar'
import Map_filter from '../components/map-filter'

const Alerts=()=>{return(
    <View>
        <Search_bar text={"Search Alerts"}/>
        <Side_bar_fore/>
        <View style={{flexDirection:'row'}}>
        <Map_filter text='State' />
        <Map_filter text='State' />
        <Map_filter text='State'/>
        </View>
        <Alert_post style={{top:110}} heading="Flood in Uttrakand" content="tap to know more" path={require('../assets/flood-alert.png')}/>
        <Alert_post style={{top:110}} heading="Flood in Uttrakand" content="tap to know more" path={require('../assets/flood-alert.png')}/>
        <Alert_post style={{top:110}} heading="Flood in Uttrakand" content="tap to know more" path={require('../assets/flood-alert.png')}/>
        <Bottom_bar custom_style={{bottom:-280}}/>
    </View>
    
)}

export default Alerts