import React from "react";
import { View, Text, TextInput, ScrollView, Image, StyleSheet } from "react-native";
import Bottom_bar from "../components/botton-bar";

const post_message = () => {
  return (
    <View style={{flex:0.98,flexDirection:'column'}}>
    <ScrollView>
        <View style={styles.post}>
          <View style={styles.div}>
            <Text style={styles.textWrapper}>Type</Text>
            <Text style={styles.textWrapper2}>Description</Text>
            <Text style={styles.textWrapper3}>Image (optional)</Text>
            <View style={styles.overlap}>
              <Text style={styles.textWrapper4}>Contact info</Text>
              <View style={styles.card}>
                <Text style={styles.textWrapper5}>Enter mobile number</Text>
              </View>
            </View>
            <View style={styles.divWrapper}>
              <Text style={styles.textWrapper5}>Enter Title</Text>
            </View>
            <View style={styles.card2} />
            <View style={styles.card3}>
              <Text style={styles.textWrapper5}>Enter Description</Text>
            </View>
            <View style={styles.group}>
              <Text style={styles.textWrapper6}>Post</Text>
            </View>
            <View style={{flex:1}}>
            <View style={styles.frame}>
              <View style={styles.overlapGroupWrapper}>
                <View style={styles.overlapGroup}>
                  <View style={styles.rectangle} />
                  <Text style={styles.textWrapper7}>Submit</Text>
                </View>
              </View>
              <Image style={styles.login} alt="Login" source={require('../assets/login-registeration.png')}/>
            </View>
            </View>
          </View>
        </View>
        </ScrollView>
        <View s>
          <Bottom_bar/>
        </View>
        </View>
      );
    };

const styles=StyleSheet.create({ post: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height:'100%'
  },
  div: {
    backgroundColor: '#ffffff',
    height: 844,
    position: 'relative',
    width: 390,
  },
  textWrapper: {
    color: '#00203f',
    fontFamily: 'Poppins, Helvetica',
    fontSize: 22,
    fontWeight: '600',
    left: 38,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 37,
  },
  textWrapper2: {
    color: '#00203f',
    fontFamily: 'Poppins, Helvetica',
    fontSize: 22,
    fontWeight: '600',
    left: 38,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 164,
  },
  textWrapper3: {
    color: '#00203f',
    fontFamily: 'Poppins, Helvetica',
    fontSize: 22,
    fontWeight: '600',
    left: 39,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 397,
  },
  overlap: {
    height: 99,
    left: 30,
    position: 'absolute',
    top: 563,
    width: 330,
  },
  textWrapper4: {
    color: '#00203f',
    fontFamily: 'Poppins, Helvetica',
    fontSize: 22,
    fontWeight: '600',
    left: 9,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 0,
  },
  card: {
    backgroundColor: '#eff1ff',
    borderColor: '#00203f',
    borderRadius: 15,
    borderWidth: 2,
    height: 68,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 31,
    width: 330,
  },
  textWrapper5: {
    color: '#cac5c5',
    fontFamily: 'Poppins, Helvetica',
    fontSize: 20,
    fontWeight: '600',
    left: 38,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 16,
  },
  divWrapper: {
    backgroundColor: '#eff1ff',
    borderColor: '#00203f',
    borderRadius: 15,
    borderWidth: 2,
    height: 68,
    left: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 71,
    width: 330,
  },
  card2: {
    backgroundColor: '#eff1ff',
    borderColor: '#00203f',
    borderRadius: 100,
    borderWidth: 2,
    height: 102,
    left: 144,
    position: 'absolute',
    top: 442,
    width: 102,
  },
  card3: {
    backgroundColor: '#eff1ff',
    borderColor: '#00203f',
    borderRadius: 15,
    borderWidth: 2,
    height: 175,
    left: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 197,
    width: 330,
  },
  group: {
    height: 26,
    left: 166,
    position: 'absolute',
    top: 1,
    width: 47,
  },
  textWrapper6: {
    color: '#00203f',
    fontFamily: 'Poppins, Helvetica',
    fontSize: 18,
    fontWeight: '700',
    left: 0,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 0,
    width: 45,
  },
  frame: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    left: 97,
    position: 'absolute',
    top: 701,
  },
  overlapGroupWrapper: {
    height: 52,
    marginRight: -2,
    position: 'relative',
    width: 196,
  },
  overlapGroup: {
    borderRadius: 10,
    height: 52,
    position: 'relative',
    width: 194,
  },
  rectangle: {
    backgroundColor: '#8ceac1',
    borderRadius: 10,
    height: 52,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 194,
  },
  textWrapper7: {
    color: '#00203f',
    fontFamily: 'Poppins, Helvetica',
    fontSize: 24,
    fontWeight: '700',
    left: 33,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 8,
    width: 97,
  },
  login: {
    height: 44,
    left: 139,
    position: 'absolute',
    top: 4,
    width: 38,
  },
});
export default  post_message