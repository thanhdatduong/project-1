/**
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/drawer
yarn add react-native-gesture-handler
yarn add react-native-reanimated
 */
import * as React from 'react';
import {
  Settings,
  ProductGridView,
  ClothesList,
  Profile,
  Chat,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fontSize, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import {View} from 'react-native';
const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View style={{backgroundColor: colors.primary, flex: 1}}></View>
  ),
  tabBarIcon: ({focused, color, size}) => {
    return (
      <Icon
        style={{
          paddingTop: 5,
        }}
        name={
          route.name == 'ProductGridView'
            ? 'align-center'
            : route.name == 'ClothesList'
            ? 'accusoft'
            : route.name == 'Settings'
            ? 'cogs'
            : route.name == 'Profile'
            ? 'user'
            : route.name == 'Chat'
            ? 'comment-dots'
            : ''
        }
        size={23}
        color={focused ? 'white' : colors.inactive}
      />
    );
  },
});
function UITab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={'ClothesList'}
        component={ClothesList}
        options={{
          tabBarLabel: 'Áo Quần Nam',
          tabBarLabelStyle: {
            fontSize: fontSize.h7,
          },
        }}
      />
      <Tab.Screen
        name={'ProductGridView'}
        component={ProductGridView}
        options={{
          tabBarLabel: 'Áo Quần Nữ',
          tabBarLabelStyle: {
            fontSize: fontSize.h7,
          },
        }}
      />
      <Tab.Screen
        name={'Chat'}
        component={Chat}
        options={{
          tabBarLabel: 'Nhắn Tin',
          tabBarLabelStyle: {
            fontSize: fontSize.h7,
          },
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          tabBarLabel: 'Cài Đặt',
          tabBarLabelStyle: {
            fontSize: fontSize.h7,
          },
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarLabel: 'Người Dùng',
          tabBarLabelStyle: {
            fontSize: fontSize.h7,
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default UITab;
