import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../redux/product/productAction';
import AddToCart from './addToCart';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Product({data}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function handleNavigation() {
    dispatch(addProduct(data));
    navigation.navigate('Product');
  }
  return (
    <TouchableOpacity
      onPress={handleNavigation}
      style={styles.productContainer}>
      <Image
        style={styles.productImage}
        source={{uri: data.thumbnail}}
        resizeMode="cover"
      />
      <View style={styles.productDetails}>
        <Text numberOfLines={1} style={styles.productTitle}>
          {data.title}
        </Text>
        <Text style={styles.productBrand}>{data.brand}</Text>
        <View style={styles.productPriceContainer}>
          <Text style={styles.productPrice}>{`₹${data.price}`}</Text>
          <Text
            style={
              styles.productDiscount
            }>{`${data.discountPercentage}% off`}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{data.rating.toFixed(1)}</Text>
          <Icon name="star" size={14} color={'#FFA500'} />
        </View>
        <AddToCart data={data} />
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  productContainer: {
    flex: 1,
    margin: 4,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    width: '48%',
    // height: 300,
  },
  productImage: {
    marginTop: 2,
    borderRadius: 10,
    width: '100%',
    height: 200,
  },
  productDetails: {
    margin: 4,
  },
  productTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  productBrand: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    fontFamily: 'OpenSans-Regular',
  },
  productPriceContainer: {
    flexDirection: 'row',
  },
  productPrice: {
    fontWeight: '500',
    fontSize: 12,
    color: 'black',
    marginRight: 4,
    fontFamily: 'OpenSans-Regular',
  },
  productDiscount: {
    fontWeight: '500',
    fontSize: 10,
    color: 'green',
    marginRight: 2,
    fontFamily: 'OpenSans-Bold',
  },
  productRating: {
    margin: 0,
    padding: 0,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: ,
  },
};
