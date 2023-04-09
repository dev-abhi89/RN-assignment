import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Loader({loading}) {
  return (
    <View style={{flex: 1}}>
      <>
        {loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator color={'blue'} size={32} />
          </View>
        ) : (
          <></>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
});
