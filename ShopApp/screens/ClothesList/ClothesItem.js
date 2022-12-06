import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fontSize} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
function _getColorFromStatus(status) {
  /*if (status.toLowerCase().trim() == 'opening now') {
    return colors.success;
  } else if (status.toLowerCase().trim() == 'close soon') {
    return colors.alert;
  } else if (status.toLowerCase().trim() == 'comming soon') {
    return colors.warning;
     return colors.success;
  }*/
  return status.toLowerCase().trim() == 'opening now'
    ? colors.success
    : status.toLowerCase().trim() == 'close soon'
    ? colors.alert
    : status.toLowerCase().trim() == 'comming soon'
    ? colors.warning
    : colors.success;
}
function ClothesItem(props) {
  let {name, price, socialNetworks, status, url, website} = props.clothes;
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h5,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSize.h5,
            }}>
            Status:
          </Text>
          <Text
            style={{
              color: _getColorFromStatus(status),
              fontSize: fontSize.h5,
            }}>
            {status.toUpperCase()}
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h5,
          }}>
          Price: {price} $
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h5,
          }}>
          Clothes Type: Áo sơ mi
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h5,
          }}>
          Website:{website}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {socialNetworks['facebook'] != undefined && (
            <Icon
              style={{paddingEnd: 5}}
              name="facebook"
              size={18}
              color={colors.inactive}
            />
          )}
          {socialNetworks['twitter'] != undefined && (
            <Icon
              style={{paddingEnd: 5}}
              name="twitter"
              size={18}
              color={colors.inactive}
            />
          )}

          {socialNetworks['instagram'] != undefined && (
            <Icon name="instagram" size={18} color={colors.inactive} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ClothesItem;
