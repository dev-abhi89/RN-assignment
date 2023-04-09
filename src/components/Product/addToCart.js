import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  desreaseQuantity,
  increaseQuantity,
} from '../../redux/Home/homeActions';

const AddToCart = ({
  data,
  buttonTextStyle = {},
  quantityTextStyle = {},
  iconSize = 12,
}) => {
  const dispatch = useDispatch();
  const home = useSelector(store => store.home);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(data.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(desreaseQuantity(data.id));
  };

  return (
    <>
      {home?.cart[data.id] == undefined ? (
        <View style={styles.addToCartContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}>
            <Text style={[styles.addToCartButtonText, buttonTextStyle]}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncreaseQuantity}>
            <Icons name="plus" size={iconSize} color="white" />
          </TouchableOpacity>
          <Text style={[styles.quantityText, quantityTextStyle]}>
            {home?.cart[data.id]?.quantity}
          </Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecreaseQuantity}>
            <Icons name="minus" size={iconSize} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  addToCartContainer: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  addToCartButton: {
    backgroundColor: '#007aff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'OpenSans-Medium',
  },
  quantityContainer: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  quantityButton: {
    backgroundColor: '#A9ABB2',
    borderRadius: 5,
    padding: 4,
  },
  quantityText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: 'black',
    marginHorizontal: 8,
  },
});

export default AddToCart;
