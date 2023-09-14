import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.register}>
        <View style={styles.overlap}>
          <View style={styles.rectangle} />
          <View style={styles.group}>
            <View style={styles.overlapGroup}>
              <Image
                style={styles.company}
                source={
                  require(
                    '../assets/company-registeration.png')
                }
              />
            </View>
          </View>
          <View style={styles.overlapWrapper}>
            <View style={styles.divWrapper}>
              <Text style={styles.textWrapper}>Company name</Text>
            </View>
          </View>
        </View>

        <View style={styles.overlapGroup2}>
          <Image
            style={styles.tie}
            source={require('../assets/tie-registeration.png')
            }
          />
          <View style={styles.group2}>
            <View style={styles.overlapGroup3}>
              <View style={styles.rectangle3} />
              <Text style={styles.textWrapper2}>Profession</Text>
            </View>
          </View>
        </View>

        <View style={styles.group3}>
          <View style={styles.overlap2}>
            <View style={styles.group4}>
              <View style={styles.overlapGroup3}>
                <View style={styles.rectangle4} />
                <Image
                  style={styles.password}
                  source={require('../assets/password-registeration.png')
                   }
                />
              </View>
            </View>
            <View style={styles.group5}>
              <View style={styles.overlap3}>
                <View style={styles.rectangle5} />
                <Text style={styles.textWrapper3}>Password</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.group6}>
          <View style={styles.overlap4}>
            <View style={styles.rectangle6} />
            <View style={styles.ellipse2} />
            <View style={styles.group7}>
              <View style={styles.overlapGroup4}>
                <Text style={styles.textWrapper4}>User name</Text>
              </View>
            </View>
            <Image
              style={styles.user}
              source={require('../assets/user-registeration.png')}
            />
          </View>
        </View>

        <View style={styles.group8}>
          <Text style={styles.textWrapper5}>REGISTRATION</Text>
          <View style={styles.rectangle7} />
        </View>

        <View style={styles.groupWrapper}>
          <View style={styles.group9}>
            <View style={styles.overlap5}>
              <View style={styles.group10}>
                <View style={styles.overlapGroup5}>
                  <Text style={styles.textWrapper6}>Create</Text>
                </View>
              </View>
              <Image
                style={styles.addUserMale}
                source={require('../assets/add-user-registeration.png')}
              />
            </View>
          </View>
        </View>

        <View style={styles.group11}>
          <View style={styles.group12}>
            <View style={styles.group13}>
              <Text style={styles.textWrapper7}>Already a user..?</Text>
            </View>
          </View>
        </View>

        <View style={styles.group14}>
          <View style={styles.overlap5}>
            <View style={styles.group10}>
              <View style={styles.overlapGroup6}>
                <View style={styles.rectangle8} />
                <Text style={styles.textWrapper8}>Login</Text>
              </View>
            </View>
            <Image
              style={styles.login}
              source={require('../assets/login-registeration.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    backgroundColor: '#ffffff',
    height: 844,
    position: 'relative',
    width: 390,
  },
  overlap: {
    height: 71,
    left: 27,
    position: 'absolute',
    top: 139,
    width: 341,
  },
  rectangle: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    height: 50,
    left: 0,
    position: 'absolute',
    top: 16,
    width: 327,
  },
  group: {
    height: 66,
    left: 275,
    position: 'absolute',
    top: 5,
    width: 66,
  },
  overlapGroup: {
    // backgroundColor: '#e0e0e0',
    // borderRadius: 34.1,
    height: 70,
    left: -2,
    position: 'relative',
    top: -2,
    width: 70,
  },
  company: {
    height: 47,
    left: 17,
    position: 'absolute',
    top: 10,
    width: 36,
  },
  overlapWrapper: {
    height: 20,
    left: 15,
    position: 'absolute',
    top: 0,
    width: 161,
  },
  divWrapper: {
    backgroundColor: '#ffffff',
    height: 20,
    position: 'relative',
    width: 159,
  },
  textWrapper: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    left: 10,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 5,
    whiteSpace: 'nowrap',
    width: 134,
  },rectangle3: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    height: 50,
    left: 13,
    position: 'absolute',
    top: 260,
    width: 333,
},
  overlapGroup2: {
    height: 19,
    position: 'absolute',
    width: 111,
  },
  tie: {
    // backgroundColor: '#e0e0e0',
  // borderWidth: 2,
  borderColor: '#000', // Use the desired border color
  borderRadius: 34.38, // React Native does not support specifying separate radii for width and height
  height: 40,
  left: 310,
  position: 'absolute',
  top: 363,
  width: 60,
  zIndex: 1, // For iOS
  elevation: 1 
  },
  group2: {
    height: 19,
    left: 16,
    position: 'absolute',
    top: 100,
    width: 113,
  },
  overlapGroup3: {
    backgroundColor: '#ffffff',
    height: 19,
    left: 5,
    position: 'absolute',
    top: 0,
    width: 106,
  },
  textWrapper2: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    left: 30,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 250,
    whiteSpace: 'nowrap',
    width: 111,
    zIndex:1,
    backgroundColor:'#ffffff',
    elevation:1
  },
  group3: {
    height: 70,
    left: 28,
    position: 'absolute',
    top: 455,
    width: 340,
  },
  overlap2: {
    height: 70,
    position: 'relative',
  },
  group4: {
    height: 70,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 340,
  },
  overlapGroup3: {
    height: 72,
    left: -1,
    position: 'relative',
    top: -1,
    width: 342,
  },
  rectangle4: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    height: 47,
    left: 0,
    position: 'absolute',
    top: 11,
    width: 339,
  },
  img: {
    height: 72,
    left: 274,
    position: 'absolute',
    top: 0,
    width: 68,
  },
  password: {
    height: 32,
    left: 290,
    position: 'absolute',
    top: 19,
    width: 37,
  },
  group5: {
    height: 18,
    left: 25,
    position: 'absolute',
    top: 0,
    width: 99,
  },
  overlap3: {
    height: 18,
    position: 'relative',
    width: 97,
  },
  rectangle5: {
    backgroundColor: '#ffffff',
    height: 14,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 97,
  },
  textWrapper3: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    left: 5,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    whiteSpace: 'nowrap',
    width: 86,
  },
  group6: {
    height: 67,
    left: 28,
    position: 'absolute',
    top: 245,
    width: 340,
  },
  overlap4: {
    height: 71,
    left: -1,
    position: 'relative',
    top: -2,
    width: 343,
  },
  rectangle6: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    height: 49,
    left: 0,
    position: 'absolute',
    top: 15,
    width: 330,
  },
  ellipse2: {
    // backgroundColor: '#e0e0e0',
    // borderWidth: 2,
    borderRadius: 33.81,
    height: 71,
    left: 273,
    position: 'absolute',
    top: 0,
    width: 70,
  },
  group7: {
    height: 17,
    left: 21,
    position: 'absolute',
    top: 2,
    width: 111,
  },
  overlapGroup4: {
    backgroundColor: '#ffffff',
    height: 17,
    position: 'relative',
    width: 109,
  },
  textWrapper4: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    left: 4,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    whiteSpace: 'nowrap',
    width: 105,
  },
  user: {
    height: 33,
    left: 289,
    position: 'absolute',
    top: 19,
    width: 37,
  },
  group8: {
    height: 50,
    left: 98,
    position: 'absolute',
    top: 44,
    width: 206,
  },
  textWrapper5: {
    color: '#00203f',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    left: 0,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    width: 204,
  },
  rectangle7: {
    backgroundColor: '#8ceac1',
    borderRadius: 2,
    height: 5,
    left: 65,
    position: 'absolute',
    top: 45,
    width: 68,
  },
  groupWrapper: {
    height: 52,
    left: 103,
    position: 'absolute',
    top: 578,
    width: 194,
  },
  group9: {
    height: 52,
  },
  overlap5: {
    height: 52,
    position: 'relative',
    width: 196,
  },
  group10: {
    height: 52,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 196,
  },
  overlapGroup5: {
    backgroundColor: '#00203f',
    borderRadius: 10,
    height: 52,
    position: 'relative',
    width: 194,
  },
  textWrapper6: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    left: 34,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 6,
    width: 88,
  },
  addUserMale: {
    height: 44,
    left: 133,
    position: 'absolute',
    top: 0,
    width: 38,
  },
  group11: {
    height: 26,
    left: 39,
    position: 'absolute',
    top: 651,
    width: 322,
  },
  group12: {
    height: 26,
    position: 'relative',
  },
  group13: {
    height: 26,
    left: 85,
    position: 'absolute',
    top: 0,
    width: 162,
  },
  textWrapper7: {
    color: '#cac5c5',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    left: 0,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 0,
    width: 160,
  },
  line: {
    height: 2,
    left: -1,
    position: 'absolute',
    top: 12,
    width: 66,
  },
  line2: {
    height: 2,
    left: 257,
    position: 'absolute',
    top: 12,
    width: 66,
  },
  group14: {
    height: 52,
    left: 107,
    position: 'absolute',
    top: 696,
    width: 194,
  },
  overlapGroup6: {
    borderRadius: 10,
    height: 52,
    position: 'relative',
    width: 194,
  },
  rectangle8: {
    backgroundColor: '#8ceac1',
    borderRadius: 10,
    height: 52,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 194,
  },
  textWrapper8: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    left: 33,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 8,
    width: 74,
  },
  login: {
    height: 44,
    left: 139,
    position: 'absolute',
    top: 4,
    width: 38,
  },
});


export default Register;
