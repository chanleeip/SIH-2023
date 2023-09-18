import{View,Text,StyleSheet,Image,Dimensions,TextInput} from 'react-native'
const {width,height}=Dimensions.get('window')

const Search_bar=({text})=>{return(
 
    <View style={styles.searchBar}>
          <Image style={styles.searchIcon} alt="Search icon" source={require('../assets/search-map.png')}/>
          <TextInput 
        style={styles.searchPlaces}
        placeholder={text}
        // onChangeText={onChangeText}
        placeholderTextColor="#cac5c5"
      />
        </View>
)}
const styles=StyleSheet.create({
    searchBar: {
        alignItems:'center',
        borderWidth: 2,
        borderColor: '#00203f',
        borderRadius: 20,
        height: 57,
        overflow: 'hidden',
        position: 'absolute',
        top: 40,
        left:width*0.18,
        width: width*0.8,
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
        backgroundColor:'red'
      }
})
export default Search_bar