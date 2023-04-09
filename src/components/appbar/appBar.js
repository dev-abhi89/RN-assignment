import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antidesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

export default function AppBar({title = 'Home'}) {
  const navigation = useNavigation();
  const {cart} = useSelector(store => store.home);
  const cartCount = Object.keys(cart).length;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {title != 'Home' ? (
          <Ionicons
            name="chevron-back-outline"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
        ) : (
          <></>
        )}
        <Text style={styles.logoText}>{title}</Text>
      </View>
      {title != 'Cart' ? (
        <View style={styles.cartContainer}>
          <Ionicons
            name="ios-cart"
            size={30}
            color="black"
            backgroundColor={'transparent'}
            onPress={() => {
              navigation.navigate('Cart');
            }}
          />
          {cartCount > 0 && (
            <View style={styles.cartCountContainer}>
              <Text style={styles.cartCountText}>{cartCount}</Text>
            </View>
          )}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 2,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCountContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCountText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
});
