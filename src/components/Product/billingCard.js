import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearCart} from '../../redux/Home/homeActions';

export default function BillingRow({totalAmount}) {
  function handleCheckout() {
    if (totalAmount <= 0) {
      alert('Add some products');
      return;
    }
    dispatch(clearCart());
    alert('Order has been placed successfully');
  }
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>{`₹${totalAmount}`}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007aff',
  },
  checkoutButton: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
