import{View,Text,StyleSheet,Image} from 'react-native'

const Search_bar=({text})=>{return(
    <View style={styles.searchBar}>
          <Image style={styles.searchIcon} alt="Search icon" source={require('../assets/search-map.png')}/>
          <Text style={styles.searchPlaces}>{text}</Text>
        </View>
)}
const styles=StyleSheet.create({
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
      }
})
export default Search_bar