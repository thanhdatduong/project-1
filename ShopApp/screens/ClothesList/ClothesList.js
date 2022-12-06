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
  ScrollView,
  FlatList,
} from 'react-native';
import {images, icons, colors, fontSize} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../../utilies/Validations';
import ClothesItem from './ClothesItem';
/**
  - ListView from a map of objects
  - FlatList  
 */
function ClothesList(props) {
  //list of Clothes = state
  const [clothess, setClothes] = useState([
    {
      name: 'Áo Sơ Mi Dài Tay Rập Nhăn, Áo Sơ Mi Dài Tay Rập Nhăn, Áo Sơ Mi Dài ',
      url: 'https://static.edupia.vn/uploads/photos/%C4%91%C4%83ng%20b%C3%A0i%2027/11/96.%20ti%E1%BA%BFng%20anh%20tr%E1%BA%BB%20em%20ch%E1%BB%A7%20%C4%91%E1%BB%81%20qu%E1%BA%A7n%20%C3%A1o/so-mi-ke.png',
      status: 'Opening soon',
      price: 123.56,
      website: 'https://www.shein.com.vn',
      socialNetworks: {
        facebook: 'https://www.facebook.com/teoem2104',
        twitter: 'https://www.facebook.com/teoem2104',
        instagram: 'https://www.facebook.com/teoem2104',
      },
    },
    {
      name: 'Áo Sơ Mi Dài Cổ ngắn',
      url: 'https://tronhouse.com/assets/data/editor/source/nhung-cach-chup-hinh-quan-ao-duoc-uu-chuong-nhat/chup-hinh-sang-tao-2.jpg',
      status: 'Opening now',
      price: 123.56,
      website: 'https://www.shein.com.vn',
      socialNetworks: {
        facebook: 'https://www.facebook.com/teoem2104',
        twitter: 'https://www.facebook.com/teoem2104',
        instagram: 'https://www.facebook.com/teoem2104',
      },
    },
    {
      name: 'Áo Sơ Mi Dài Tay Rập Nhăn',
      url: 'https://tiemchupanh.com/wp-content/uploads/2021/11/1-43.jpg',
      status: 'Close soon',
      price: 123.56,
      website: 'https://www.shein.com.vn',
      socialNetworks: {
        facebook: 'https://www.facebook.com/teoem2104',
        instagram: 'https://www.facebook.com/teoem2104',
        instagram: 'https://www.facebook.com/teoem2104',
      },
    },
    {
      name: 'Áo Sơ Mi Dài Tay',
      url: 'https://cdn.alongwalker.co/vn/wp-content/uploads/2022/03/25083936/image-huong-dan-cach-setup-chup-quan-ao-dinh-nhu-studio-mach-nuoc-cho-shop-online-164814717639391.jpg',
      status: 'Close soon',
      price: 123.56,
      website: 'https://www.shein.com.vn',
      socialNetworks: {
        instagram: 'https://www.facebook.com/teoem2104',
      },
    },
    {
      name: 'Áo Sơ Mi Dài',
      url: 'https://tronhouse.com/assets/data/editor/source/nhung-cach-chup-hinh-quan-ao-duoc-uu-chuong-nhat/chup-hinh-sang-tao-2.jpg',
      status: 'Opening now',
      price: 123.56,
      website: 'https://www.shein.com.vn',
      socialNetworks: {
        facebook: 'https://www.facebook.com/teoem2104',
        twitter: 'https://www.facebook.com/teoem2104',
        instagram: 'https://www.facebook.com/teoem2104',
      },
    },
    {
      name: 'Áo Sơ Mi Dài Tay Cổ lọ ',
      url: 'https://vn-live-01.slatic.net/p/ae04deb5b7f05fbfc15a4e0eb55dd772.jpg',
      status: 'Closing soon',
      price: 12312123123,
      website: 'https://beecost.vn',
      socialNetworks: {
        instagram: 'https://www.facebook.com/teoem2104',
      },
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: 'Áo',
      url: 'https://product.hstatic.net/200000053174/product/10_b6e996b6d9b249728ce9e760a0069b61_master.jpg',
    },
    {
      name: 'Quần',
      url: 'https://bucket.nhanh.vn/store/7136/ps/20210301/153202125312_IMG_3767.jpg',
    },
    {
      name: 'Giày',
      url: 'https://laz-img-sg.alicdn.com/p/0acc483a43e89df61a57b15250a095e9.jpg',
    },
    {
      name: 'Mũ',
      url: 'https://vn-test-11.slatic.net/p/c0e1e0d0e45eb40f6a2cfc02e7871d15.jpg',
    },
    {
      name: 'Tất',
      url: 'https://iweb.tatthanh.com.vn/pic/12/thumb/medium/product/149873-abstract-red-and-white-business-brochure-template.jpg',
    },
    {
      name: 'Đồng Hồ',
      url: 'https://choihay.vn/images/products/2021/06/18/original/q18den_1624013200.jpg',
    },
    {
      name: 'Dây Chuyền',
      url: 'https://salt.tikicdn.com/ts/tmp/65/75/e2/5f59efe6b63173e1e2767bd1a50ee994.jpg',
    },
    {
      name: 'Bông Tay',
      url: 'https://ngoctham.com/wp-content/uploads/2022/04/bong-tai-vang-trang-dvbottt0000i637-ntj-01-3-688x774.jpg',
    },
    {
      name: 'Nhẫn',
      url: 'https://www.tierra.vn/files/800x/8-yt8MQhkqhT.jpg',
    },
  ]);
  const [searchText, setSerachText] = useState('');
  const filteredClothess = () =>
    clothess.filter(eachClothes =>
      eachClothes.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="search"
            size={15}
            color={'black'}
            style={{
              position: 'absolute',
              top: 12,
              left: 10,
            }}
          />
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSerachText(text);
            }}
            style={{
              backgroundColor: colors.inactive,
              height: 40,
              flex: 1,
              marginEnd: 8,
              borderRadius: 5,
              opacity: 0.7,
              paddingStart: 30,
            }}
          />
          <Icon name="bars" size={30} color={colors.inactive} />
        </View>
        <View
          style={{
            height: 100,
          }}>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
          <FlatList
            horizontal={true}
            keyExtractor={item => item.name}
            data={categories}
            renderItem={({item}) => {
              return (
                // hien thi danh sach kieu ngang
                <TouchableOpacity
                  onPress={() => {
                    alert(` ${item.name}`);
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      resizeMode: 'cover',
                      borderRadius: 25,
                      margin: 10,
                    }}
                    source={{
                      uri: item.url,
                    }}></Image>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: fontSize.h6 * 0.8,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            style={{flex: 1}}></FlatList>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
        </View>
        {/* <ScrollView>
          {clothess.map(eachClothes => (
            <ClothesItem clothes={eachClothes} key={eachClothes.name} />
          ))}
        </ScrollView> */}
      </View>
      {filteredClothess().length > 0 ? ( //tim kiem
        <FlatList // ListView Doc
          // data={clothess.filter(eachClothes => tim kiem
          //   eachClothes.name.toLowerCase().includes(searchText.toLowerCase()),
          // )}
          data={filteredClothess()}
          renderItem={({item}) => (
            <ClothesItem
              onPress={() => {
                alert(`you press item name: ${item.name}`);
              }}
              clothes={item}
              key={item.name}
            />
          )}
          keyExtractor={eachClothes => eachClothes.name}></FlatList>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{colors: 'black', fontSize: fontSize.h3}}>
            Không tìm thấy{' '}
          </Text>
        </View>
      )}
    </View>
  );
}
export default ClothesList;
