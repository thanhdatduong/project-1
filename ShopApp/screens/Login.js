import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import {images, icons, colors, fontSize} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../utilies/Validations';

function Login(props) {
  const [keyboardIsShown, setkeyboardIsShown] = useState(false);
  // states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // states to store email/password
  const [email, setEmail] = useState('dat@gmail.com');
  const [password, setPassword] = useState('1212323');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  useEffect(() => {
    //componentIdidMount
    Keyboard.addListener('keyboardDidShow', () => {
      {
        // alert('keyboardDidShow');
        setkeyboardIsShown(true);
      }
    });
    Keyboard.addListener('keyboardDidHide', () => {
      {
        // alert('eyboardDidHide');
        setkeyboardIsShown(false);
      }
    });
  });
  const {navigation, route} = props;
  //function of navigate to /back
  const {navigate, goBack} = navigation;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          //   height: 200,
          flex: 30,
          flexDirection: 'row',
          //   backgroundColor: 'green',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h2,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account?
        </Text>
        <Image
          tintColor={colors.red}
          source={images.computer}
          style={{
            width: 120,
            height: 120,

            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 30,
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: colors.red,
            }}>
            Email:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in correct format',
              );
              setEmail(text);
            }}
            style={{
              color: 'black',
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={colors.placeholder}
          />

          <View
            style={{
              height: 1,
              backgroundColor: colors.red,
              width: '100%',
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
          <Text // thong bao email sai dinh dang
            style={{
              color: 'red',
              fontSize: fontSize.h6,
              marginBottom: 15,
            }}>
            {errorEmail}
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: colors.red,
            }}>
            Password:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 3 characters',
              );
              setPassword(text);
            }}
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.red,
              width: '100%',
              marginBottom: 15,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
          <Text // thong bao password sai dinh dang
            style={{
              color: 'red',
              fontSize: fontSize.h6,
              marginBottom: 15,
            }}>
            {errorPassword}
          </Text>
        </View>
      </View>
      {keyboardIsShown == false && (
        <View
          style={{
            flex: 15,
          }}>
          <TouchableOpacity
            disabled={isValidationOK() == false}
            onPress={() => {
              // alert(`Email = ${email}, password = ${password}`);
              navigate('UITab');
            }}
            style={{
              backgroundColor:
                isValidationOK() == true ? colors.red : colors.inactive,
              justifyContent: 'center',
              alignItems: 'center',
              //   marginHorizontal: 30,
              width: '50%',
              alignSelf: 'center',
              borderRadius: 13,
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSize.h5,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Press register');
            }}
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSize.h6,
                color: colors.red,
                alignSelf: 'center',
              }}>
              New user? Register now
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {keyboardIsShown == false && (
        <View
          style={{
            flex: 25,
            //   backgroundColor: 'purple',
          }}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
            <Text
              style={{
                padding: 8,
                fontSize: fontSize.h6,
                color: 'black',
                alignSelf: 'center',
                marginHorizontal: 5,
              }}>
              Use other methods?
            </Text>
            <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon name="facebook" size={40} color={colors.facebook} />
            <View style={{width: 15}}></View>
            <Icon name="google" size={40} color={colors.goolgle} />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
export default Login;
