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
import {images, icons, colors, fontSize} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import UIHeader from './../../components/UIheader';
import {FlatList} from 'react-native-gesture-handler';
import ChatItem from './ChatItem';
import {
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  child,
  get,
  onValue,
} from '../../firebase/firebase';
function Chat(props) {
  const [user, setUser] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      name: 'Amanda Weler',
      message: 'Hello, how are you ?',
    },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/80.jpg',
    //     name: 'Amanda asdaaaasd',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/10.jpg',
    //     name: 'Amanda Weleasdasdar',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/20.jpg',
    //     name: 'Amanda asdasasdd',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/30.jpg',
    //     name: 'Amanda  sadsWeler',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/40.jpg',
    //     name: 'Amanda asdaadasdassdsd',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/50.jpg',
    //     name: 'Amanda  sadsWaasaweler',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/60.jpg',
    //     name: 'Amanda asdaaaaaasdsd',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/22.jpg',
    //     name: 'Amanda  sadaaaasWeler',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
    //   {
    //     url: 'https://randomuser.me/api/portraits/men/31.jpg',
    //     name: 'Amanda asdaaaaasdsd',
    //     message: 'Hello, how are you ?',
    //     numberOfUnreadMessages: 3,
    //   },
  ]);
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  useEffect(() => {
    onValue(firebaseDatabaseRef(firebaseDatabase, 'user'), snapshot => {
      if (snapshot.exists()) {
        let value = snapshot.val();
        setUser(
          Object.values(value).map(eachObject => {
            return {
              // profile mac dinh
              url: 'https://www.w3schools.com/howto/img_avatar.png',
              name: eachObject.email,
              email: eachObject.email,
              accessToken: eachObject.accessToken,
              numberOfUnreadMessages: 0,
            };
          }),
        );
      } else {
        console.log('No da available');
      }
    });
  }, []);
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <UIHeader
        title={'notifications'}
        leftIconName={'arrow-left'}
        rightIconName={'search'}
        onPressLeftIcon={() => {
          alert('left Icon');
        }}
        onPressRightIcon={() => {
          alert('right Icon');
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingStart: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h6,
          }}>
          6 unread messages
        </Text>
        <Icon
          name={'search'}
          style={{padding: 15}}
          size={15}
          color={'black'}
          onPress={() => {
            alert('delete');
          }}
        />
      </View>
      <FlatList
        style={
          {
            //   backgroundColor: 'red',
          }
        }
        data={user}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => {
              //   alert(`You press item's name: ${item.name}`);
              navigate('Messenger', {user: item});
            }}
            user={item}
            key={item.url}
          />
        )}
        keyExtractor={item => item.url}
      />
    </View>
  );
}
export default Chat;
