import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../constants';
function UIButton(props) {
  const {onPress, title, issSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: issSelected == true ? 'white' : null,
      }}>
      {issSelected == true && (
        <Icon
          size={20}
          name={'check-circle'}
          style={{
            color: 'green',
            position: 'absolute',
            left: 10,
            top: 10,
          }}
        />
      )}
      <Text
        style={{
          color: issSelected == true ? colors.primary : 'white',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton;
