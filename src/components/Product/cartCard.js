import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../../redux/Home/homeActions';
import AddToCart from './addToCart';

export default function ProductCart({data}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image source={{uri: data.images[0]}} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.brand}>{data.brand}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`₹${data.price}`}</Text>
          <Text style={styles.discount}>{data.discountPercentage}% off</Text>
        </View>
        <View style={styles.btnContainer}>
          <AddToCart data={data} />
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart(data.id))}
            style={styles.removeContainer}>
            <Text style={styles.removeBtnTxt}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    backgroundColor: 'white',
  },
  removeContainer: {
    backgroundColor: 'red',
    padding: 4,
    borderRadius: 8,
    marginRight: 12,
  },
  removeBtnTxt: {
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    fontSize: 12,
  },
  btnContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    justifyContent: 'space-between',
  },
  productImage: {
    width: 80,
    height: '100%',
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  brand: {
    fontSize: 14,
    color: '#595F69',
    fontFamily: 'OpenSans-Regular',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 14,
    color: '#595F69',
    marginRight: 4,
  },
  discount: {
    fontSize: 12,
    color: 'green',
    fontFamily: 'OpenSans-Bold',
  },
});
