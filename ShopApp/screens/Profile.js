import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {images, icons, colors, fontSize} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {convertDateTimeToString} from '../utilies/DateTime';
import {
  user as UserRepository,
  population as PopulationRepository,
} from '../repositories';

function Profile(props) {
  const [user, setUser] = useState({});
  const [populations, setPopulations] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    UserRepository.getUserDetail().then(responseUser => setUser(responseUser));
    PopulationRepository.getPopulation({
      drilldowns: 'Nation',
      measures: 'Population',
    }).then(responsePopulations => setPopulations(responsePopulations));
  }, []);
  // UserRepository.getUserDetail();
  const {
    email,
    dateOfBirth,
    gender,
    userId,
    address,
    username,
    url,
    phone,
    registereDate,
  } = user;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // paddingTop: 50,
        paddingStart: 20,
      }}>
      <Image
        style={{
          width: 160,
          height: 160,
          resizeMode: 'cover',
          borderRadius: 80,
          alignSelf: 'center',
          marginBottom: 20,
        }}
        source={{
          uri: url,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: fontSize.h5}}>
          Username:{' '}
        </Text>
        <Text>{username}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: fontSize.h5}}>Email: </Text>
        <Text>{email}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: fontSize.h5}}>DOB: </Text>
        <Text>{convertDateTimeToString(dateOfBirth)}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: fontSize.h5}}>Gender:</Text>
        <Text>{gender}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: fontSize.h5}}>
          Address:
        </Text>
        <Text>{address}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: fontSize.h5}}>Phone:</Text>
        <Text>{phone}</Text>
      </View>
    </SafeAreaView>
  );
}
export default Profile;
