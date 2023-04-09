import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Product from '../../components/Product/product';
import AppBar from '../../components/appbar/appBar';
import FetchData from '../../service/fetchData';
import Loader from '../../components/loader/loader';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(10);
  async function handleReq() {
    const data = await FetchData(
      `https://dummyjson.com/products?limit=10&&skip=0`,
    );
    setData(data.products);
    setLoading(false);
  }

  useEffect(() => {
    handleReq();
  }, []);

  async function handlePagination() {
    if (skip == 100 || data.length <= 0 || loading) {
      return;
    }
    setLoading(true);
    const q = await FetchData(
      `https://dummyjson.com/products?limit=10&&skip=${skip}`,
    );
    setData(prevData => [...prevData, ...q.products]);
    setSkip(skip + 10);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <AppBar />

      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => {
          return <Product data={item} />;
        }}
        keyExtractor={item => item.id}
        onEndReachedThreshold={1}
        onEndReached={handlePagination}
        ListFooterComponent={() => {
          return <Loader loading={loading} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
