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
import FiveStars from './FiveStars';
function ProductGridView(props) {
  const [products, setProducts] = useState([
    {
      productName: 'Đầm Nút ',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/10/08/1665214842503a806be7d42f3472b2993acb46cbb5_thumbnail_405x552.webp',
      price: 458,
      specifications: [
        'Màu sắc:	Đen và trắng',
        'Phong cách:	Thanh lịch',
        'Kiểu mẫu:	Khối Màu',
      ],
      reviews: 19,
      stars: 3,
    },
    {
      productName: 'Đầm xoắn lại màu trơn',
      url: 'https://img.ltwebstatic.com/images3_pi/2021/08/19/16293800396010029f26ca7cfbc1dfcb30f5f3cd9b_thumbnail_600x.webp',
      price: 268,
      specifications: [
        'Màu sắc:	màu đen',
        'Phong cách:	Buổi tiệc',
        'Chiều dài tay:	Tay áo mũ',
        'Loại tay áo:	Tay Raglan',
      ],
      reviews: 19,
      stars: 4,
    },
    {
      productName: 'ĐẦM MIDI PHỐI ORGANZA SỌC',
      url: 'https://product.hstatic.net/200000000131/product/den_-_2_899fc03f05544281a72d584da509dd31_grande.jpg',
      price: 342,
      specifications: [
        'Màu sắc:	Đỏ và trắng',
        'Phong cách:	Boho',
        'Kiểu mẫu:	Họa tiết hoa',
      ],
      reviews: 19,
      stars: 3,
    },
    {
      productName: 'Đầm Dải chun Họa tiết hoa Boho',
      url: 'https://img.ltwebstatic.com/images3_pi/2021/11/27/16379821194c8c142c949c4cec2c981b20a27a33a2_thumbnail_600x.webp',
      price: 435,
      specifications: [
        'Chi tiết:	Dải chun ',
        'Kiểu:	Một Line',
        'Viền:	Vòng cổ',
        'Chiều dài tay:	Tay áo dài',
      ],
      reviews: 19,
      stars: 5,
    },
    {
      productName: 'Đầm Tương phản Mesh Dây kéo màu trơn Lãng mạn',
      url: 'https://product.hstatic.net/200000000131/product/xam_hnath027_2_20220712094338_b8d2daa54f4d473e9ea19acf5167bf8d_grande.jpeg',
      price: 714,
      specifications: [
        'Màu sắc:	Màu xanh chanh',
        'Phong cách:	Buổi tiệc',
        'Kiểu mẫu:	màu trơn',
        'Chi tiết:	Tương phản Mesh, Dây kéo',
      ],
      reviews: 19,
      stars: 2,
    },
    {
      productName: 'Đầm Xếp li màu trơn Giải trí',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/09/15/1663222277735bf2ae5149bc9116b651e179cab551_thumbnail_405x552.webp',
      price: 473,
      specifications: [
        'Màu sắc:	Nhiều màu',
        'Kiểu mẫu:	Hoa',
        'Chi tiết:	viền lá sen, Dây kéo',
      ],
      reviews: 19,
      stars: 1,
    },
    {
      productName: 'Đầm viền lá sen Dây kéo Hoa Thanh lịch',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/06/23/1655983013ba4618f30f95eab441ae498308c03ffe_thumbnail_600x.webp',
      price: 351,
      specifications: [
        'Màu sắc:	Nhiều màu',
        'Kiểu mẫu:	Hoa',
        'Chi tiết:	viền lá sen, Dây kéo',
      ],
      reviews: 13,
      stars: 5,
    },
    {
      productName: 'Đầm Ren lên Nút phía trước màu trơn Thanh lịch',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/11/08/166787366728bdf590826bc33a2ccc22927604e942_thumbnail_600x.webp',
      price: 455,
      specifications: [
        'Màu sắc:	Màu Khaki',
        'Phong cách:	Thanh lịch',
        'Kiểu mẫu:	màu trơn',
        'Chi tiết:	Ren lên, Nút phía trước',
      ],
      reviews: 13,
      stars: 5,
    },
    {
      productName:
        'Đầm Viên lá sen Dây kéo Nơ bướm lớn Hoa Tất cả trên in Boho',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_600x.webp',
      price: 732,
      specifications: [
        'Màu sắc:	Màu Hồng baby',
        'Phong cách: Boho',
        'Kiểu mẫu: Hoa, Tất cả trên in',
        'Chi tiết: Viên lá sen, Dây kéo, Nơ bướm lớn',
      ],
      reviews: 13,
      stars: 5,
    },
    {
      productName: 'Đầm Thắt lưng màu trơn Giải trí',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/11/17/1668676542c67134818dcf76a63a002acb1c499253_thumbnail_600x.webp',
      price: 404,
      specifications: [
        'Màu sắc:	Màu be',
        'Phong cách:	Giải trí',
        'Kiểu mẫu:	màu trơn',
        ' Chi tiết:	Thắt lưng',
      ],
      reviews: 13,
      stars: 5,
    },
    {
      productName: 'Đầm Hoa Thanh lịch',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/08/25/16613967362c47246c42c3134e820b50275c868934_thumbnail_600x.webp',
      price: 685,
      specifications: [
        'Màu sắc:	Nhiều màu',
        'Phong cách:	Thanh lịch',
        'Kiểu mẫu:	Hoa',
        'Sợi vải:	Không căng',
      ],
      reviews: 13,
      stars: 5,
    },
    {
      productName: 'Đầm Thắt nút Họa tiết hoa',
      url: 'https://img.ltwebstatic.com/images3_pi/2021/05/24/1621842331ee49a42ee756f8e722f3fa3f16864ef3_thumbnail_600x.webp',
      price: 75,
      specifications: [
        'Màu sắc:	Hồng',
        'Phong cách:	Boho',
        ' Kiểu mẫu:	Họa tiết hoa',
        'Chi tiết:	Trọn gói, Thắt nút',
        ' Kiểu:	Một Line',
      ],
      reviews: 13,
      stars: 5,
    },
    {
      productName: 'Đầm Ren Thắt nơ trước Đồ họa ',
      url: 'https://img.ltwebstatic.com/images3_pi/2022/07/15/1657852650418352d674ed24ac614b02dcb9b53f74_thumbnail_600x.webp',
      price: 522,
      specifications: [
        'Màu sắc:	trắng',
        'Phong cách:	Boho',
        'Kiểu mẫu:	Đồ họa',
        'Chi tiết:	Ren lên, Thùa khuyết, Thắt nơ trước',
      ],
      reviews: 13,
      stars: 5,
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        keyExtractor={item => item.productName}
        renderItem={({item, index}) => (
          <View
            style={{
              //   backgroundColor: index % 2 == 0 ? 'green' : 'red',
              flex: 0.5,
              marginLeft: index % 2 == 0 ? 10 : 0,
              marginTop: 5,
              marginRight: 10,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: colors.inactive,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 5,
              }}>
              <Image
                style={{
                  width: 70,
                  height: 100,
                  resizeMode: 'cover',
                  borderRadius: 20,
                  marginRight: 15,
                }}
                source={{
                  uri: item.url,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  flex: 1,
                  fontSize: fontSize.h5,
                  textAlign: 'right',
                }}>
                {item.price}.000₫
              </Text>
            </View>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 'bold',
                fontSize: fontSize.h5,
                marginHorizontal: 10,
                marginTop: 5,
              }}>
              {item.productName}
            </Text>
            {item.specifications.map(specification => (
              <Text
                key={specification}
                style={{
                  color: 'black',
                  fontSize: fontSize.h6,
                  paddingHorizontal: 5,
                  paddingBottom: 10,
                }}>
                * {specification}
              </Text>
            ))}
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  // let clonedProducts ={...products}//câu lệnh nhân bản
                  let clonedProducts = products.map(eachProduct => {
                    if (item.productName == eachProduct.productName) {
                      // phan tu = vs phan tu ban vao isssave = true
                      // return {...eachProduct, isSaved: true};
                      return {
                        ...eachProduct,
                        isSaved:
                          eachProduct.isSaved == false ||
                          eachProduct.isSaved == undefined
                            ? true
                            : false,
                      };
                    }
                    return eachProduct;
                  });
                  setProducts(clonedProducts);
                }}
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name="heart"
                  style={{
                    marginEnd: 5,
                  }}
                  size={22}
                  color={
                    item.isSaved == undefined || item.isSaved == false
                      ? colors.inactive
                      : colors.red
                  }
                />
                <Text
                  style={{
                    color:
                      item.isSaved == undefined || item.isSaved == false
                        ? colors.inactive
                        : colors.red,
                    fontSize: fontSize.h6 * 0.8,
                    width: 50,
                  }}>
                  Yêu Thích
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                }}>
                <FiveStars numberOfStars={item.stars}></FiveStars>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: fontSize.h6 * 0.8,
                    textAlign: 'right',
                    paddingTop: 5,
                  }}>
                  {item.reviews} đánh giá
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
export default ProductGridView;
