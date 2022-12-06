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
import {
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from '../firebase/firebase';
function Register(props) {
  const [keyboardIsShown, setkeyboardIsShown] = useState(false);
  // states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // states to store email/password
  const [email, setEmail] = useState('havu@gmail.com');
  const [password, setPassword] = useState('123456Abc');
  const [retypePassword, setRetypePassword] = useState('123456Abc');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true &&
    password == retypePassword;
  useEffect(() => {
    // const xx = auth;
    Keyboard.addListener('keyboardDidShow', () => {
      {
        setkeyboardIsShown(true);
      }
    });
    Keyboard.addListener('keyboardDidHide', () => {
      {
        setkeyboardIsShown(false);
      }
    });
  });
  const {navigation, route} = props;
  //functions of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: colors.primary,
      }}>
      <View
        style={{
          flex: 25,
          flexDirection: 'row',
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
          flex: 45,
          backgroundColor: 'white',
          padding: 10,
          margin: 15,
          borderRadius: 15,
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
            value={email}
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
              marginBottom: 10,
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
            value={password}
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
              marginBottom: 10,
            }}>
            {errorPassword}
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
            Retype password
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 3 characters',
              );
              setRetypePassword(text);
            }}
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Retype enter your password"
            value={retypePassword}
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
              marginBottom: 1,
            }}>
            {errorPassword}
          </Text>
        </View>
        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={() => {
            //alert(`Email = ${email}, password = ${password}`)
            createUserWithEmailAndPassword(auth, email, password)
              .then(userCredential => {
                const user = userCredential.user;

                sendEmailVerification(user).then(() => {
                  console.log('Email verification sent');
                });
                navigate('UITab');
              })
              .catch(error => {
                alert(`Cannot signin, error: ${error.message}`);
              });
          }}
          style={{
            backgroundColor:
              isValidationOK() == true ? colors.red : colors.inactive,
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            alignSelf: 'center',
            borderRadius: 13,
          }}>
          <Text
            style={{
              padding: 8,
              fontSize: fontSize.h5,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      {keyboardIsShown == false && (
        <View
          style={{
            flex: 15,
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
export default Register;
