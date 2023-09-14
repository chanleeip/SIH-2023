import React from 'react';
import { View, Text, Image,StyleSheet} from 'react-native';

const side_bar = () => {
    return (
        <View style={styles.sidebar_expanded}>
      <View style={styles.profile_whole}>
        <Text style={styles.text_wrapper}>User Name</Text>
        <View style={styles.profile}>
          <Image style={styles.vector} alt="Vector" source={require('../assets/user-sidebar.jpg')} />
        </View>
      </View>
      <View style={styles.options}>
      <View style={styles.overlap_group_wrapper}>
      <View style={styles.overlap_group}>
      <View style={styles.notifications}>
              <Text style={styles.div}>Notifications</Text>
              <Image style={styles.img} alt="Vector" source={require('../assets/alert-sidebar.png')} />
            </View>
          </View>
        </View>
        <View style={styles.overlap_group_wrapper}>
        <View style={styles.overlap_group}>
        <View style={styles.subscriptions}>
        <Text style={styles.text_wrapper_2}>Subscription</Text>
              <Image style={styles.vector_2}alt="Vector" source={require('../assets/subscription-sidebar.png')} />
            </View>
          </View>
        </View>
        <View style={styles.overlap_group_wrapper}>
        <View style={styles.overlap_group}>
        <View style={styles.tutorial_content}>
        <Text style={styles.text_wrapper_3}>Tutorials</Text>
              <Image
                style={styles.icon_chalkboard}
                alt="Icon chalkboard"
                source={require('../assets/tutorial-side-bar.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.overlap_group_wrapper}>
        <View style={styles.overlap_group}>
        <View style={styles.transltn}>
        <Text style={styles.div}>Translate</Text>
              <Image style={styles.vector_3} alt="Vector" source={require('../assets/translate-sidebar.png')} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.close_button}>
      <View style={styles.overlap}>
      <View style={styles.ellipse} />
          <Image style={styles.group}alt="Group" source={require('../assets/x-sidebar.png')} />
        </View>
      </View>
      <View style={styles.overlap_2}>
      <View style={styles.rectangle}/>
      <Text style={styles.text_wrapper_4}>Logout</Text>
        <Image style={styles.Group_2} alt="Group" source={require('../assets/log_out-sidebar.png')} />
      </View>
    </View>
    );};

    const styles = StyleSheet.create({
        sidebar_expanded: {
            backgroundColor: '#ffffff',
            borderRadius: 0,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            height: 783,
            overflow: 'hidden',
            position: 'relative',
            width: 320,
          },
          profile_whole: {
            height: 117,
            left: 109,
            position: 'absolute',
            top: 67,
            width: 114,
          },
          text_wrapper: {
            color: '#00203f',
            fontFamily: 'Poppins',
            fontSize: 20,
            fontWeight: '600',
            left: 0,
            letterSpacing: 0,
            lineHeight: 20,
            position: 'absolute',
            top: 87,
          },
          profile: {
            // backgroundColor: '#00203f',
            borderRadius: 38,
            borderWidth:1,
            borderBlockColor:'#00203f',
            height: 76,
            left: 18,
            position: 'absolute',
            top: 0,
            width: 76,
          },
          vector: {
            height: 41,
            left: 15,
            position: 'absolute',
            top: 17,
            width: 45,
          },
          options: {
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'space-between',
            left: 29,
            position: 'absolute',
            top: 241,
          },
          overlap_group_wrapper: {
            height: 66,
            position: 'relative',
            width: 262,
            paddingBottom:100
          },
          overlap_group: {
            backgroundColor: '#ffffff',
            borderColor: '#e0e0e0',
            borderRadius: 20,
            borderWidth: 2,
            height: 68,
            left: -1,
            position: 'relative',
            top: -1,
            width: 264,
          },
          notifications: {
            height: 36,
            left: 27,
            position: 'relative',
            top: 15,
            width: 205,
          },
          div: {
            color: '#00203f',
            fontFamily: 'Poppins',
            fontSize: 24,
            fontWeight: '600',
            left: 48,
            letterSpacing: 0,
            lineHeight: 24,
            position: 'absolute',
            top: 5,
          },
          img: {
            height: 34,
            left: 0,
            position: 'absolute',
            top: 0,
            width: 30,
          },
          subscriptions: {
            height: 37,
            left: 27,
            position: 'relative',
            top: 20,
            width: 205,
          },
          text_wrapper_2: {
            color: '#00203f',
            fontFamily: 'Poppins',
            fontSize: 24,
            fontWeight: '600',
            left: 48,
            letterSpacing: 0,
            lineHeight: 24,
            position: 'absolute',
            top: 1,
          },
          vector_2: {
            height: 32,
            left: 0,
            position: 'absolute',
            top: 0,
            width: 30,
          },
          tutorial_content: {
            height: 39,
            left: 23,
            position: 'relative',
            top: 14,
            width: 161,
          },
          text_wrapper_3: {
            color: '#00203f',
            fontFamily: 'Poppins',
            fontSize: 24,
            fontWeight: '600',
            left: 52,
            letterSpacing: 0,
            lineHeight: 24,
            position: 'absolute',
            top: 0,
          },
          icon_chalkboard: {
            height: 32,
            left: 0,
            position: 'absolute',
            top: 7,
            width: 35,
          },
          transltn: {
            height: 36,
            left: 27,
            position: 'relative',
            top: 12,
            width: 166,
          },
          vector_3: {
            height: 30,
            left: 0,
            position: 'absolute',
            top: 5,
            width: 30,
          },
          close_button: {
            height: 26,
            left: 12,
            position: 'absolute',
            top: 60,
            width: 26,
          },
          overlap: {
            borderRadius: 23,
            height: 46,
            position: 'relative',
          },
          ellipse: {
            backgroundColor: '#00203f',
            borderRadius: 23,
            height: 46,
            left: 0,
            position: 'absolute',
            top: 0,
            width: 46,
          },
          group: {
            height: 21,
            left: 12,
            position: 'absolute',
            top: 12,
            width: 21,
          },
          overlap_2: {
            borderRadius: 15,
            height: 42,
            left: 91,
            position: 'absolute',
            top: 662,
            width: 144,
          },
          rectangle: {
            backgroundColor: '#00203f',
            borderRadius: 15,
            height: 42,
            left: 0,
            position: 'absolute',
            top: 0,
            width: 144,
          },
          text_wrapper_4: {
            color: '#ffffff',
            fontFamily: 'Poppins',
            fontSize: 20,
            fontWeight: '600',
            left: 52,
            letterSpacing: 0,
            lineHeight: 20,
            position: 'absolute',
            alignContent:'center',
            top: 13,
          },
          Group_2: {
            height: 18,
            left: 23,
            position: 'absolute',
            top: 12,
            width: 18,
          },    
    })

export default side_bar