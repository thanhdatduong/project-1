import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {images, icons, colors, fontSize} from '../constants';
import Login from './Login';
import {UIButton} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  auth,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
} from '../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Tao ra bien tham chieu den function
function Welcome(props) {
  // state => when a state is changed => UI is reloaded 17->113.
  //like getter/setter
  const [accountTypes, setaccountTypes] = useState([
    {
      name: 'Influencer',
      issSelected: true,
    },
    {
      name: 'Business',
      issSelected: false,
    },
    {
      name: 'Individual',
      issSelected: false,
    },
  ]);
  // navigation
  const {navigation, route} = props;
  //function of navigate to /back
  const {navigate, goBack} = navigation;
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        //dang nhap
        const userId = user.uid;
        //luu du lieu vao firebase
        firebaseSet(firebaseDatabaseRef(firebaseDatabase, `users/${userId}`), {
          email: user.email,
          tokenKey: user.emailVerified,
          accessToken: user.accessToken,
        });
        navigate('UITab');
      }
    });
  });
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={icons.clothes}
              style={{
                marginHorizontal: 10,
                width: 40,
                height: 30,
              }}
            />
            <Text
              style={{
                color: 'black',
              }}>
              SHOPFFYAPP
            </Text>
            <View style={{flex: 100}} />
            <Icon
              name={'question-circle'}
              color={'white'}
              size={20}
              style={{
                marginEnd: 20,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 20,
            width: '100%',
            // backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{marginBottom: 7, color: 'black', fontSize: fontSize.h6}}>
            Welcome to{' '}
          </Text>
          <Text
            style={{
              marginBottom: 7,
              color: 'black',
              fontWeight: 'bold',
              fontSize: fontSize.h5,
            }}>
            SHOPFFYAPP !
          </Text>
          <Text
            style={{marginBottom: 7, color: 'black', fontSize: fontSize.h6}}>
            Please select your account type{' '}
          </Text>
        </View>
        <View
          style={{
            flex: 40,
            // backgroundColor: 'purple',
          }}>
          {accountTypes.map(accountType => (
            <UIButton
              key={accountType.name}
              onPress={() => {
                setaccountTypes(
                  accountTypes.map(eachAccountType => {
                    return {
                      ...eachAccountType,
                      issSelected: eachAccountType.name == accountType.name,
                    };
                  }),
                );
                // setaccountTypes(newAccountTypes);
              }}
              title={accountType.name}
              issSelected={accountType.issSelected}
            />
          ))}
        </View>

        <View
          style={{
            // Next man hinh
            flex: 20,

            // backgroundColor: 'green',
          }}>
          <UIButton
            onPress={() => {
              navigate('Login');
            }}
            title={'Login'.toUpperCase()}></UIButton>
          <Text
            style={{
              color: 'white',
              fontSize: fontSize.h5,
              alignSelf: 'center',
            }}>
            Want to register new Account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              // alert('Press register');
              navigate('Register');
            }}
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                color: colors.red,
                fontSize: fontSize.h5,
                alignSelf: 'center',
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Welcome;
//component == function
