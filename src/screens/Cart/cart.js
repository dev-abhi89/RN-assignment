import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCart from '../../components/Product/cartCard';
import AppBar from '../../components/appbar/appBar';
import BillingRow from '../../components/Product/billingCard';

export default function CartScreen() {
  const {cart} = useSelector(store => store.home);
  const data = Object.values(cart);
  var amount = 0;
  for (let d of data) {
    amount = amount + d.price * d.quantity;
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AppBar title="Cart" />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ProductCart data={item} />;
        }}
      />
      <BillingRow
        totalAmount={amount}
        onCheckoutPressed={() => console.log('pressed')}
      />
    </View>
  );
}
