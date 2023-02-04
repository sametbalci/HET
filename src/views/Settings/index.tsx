import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import * as Icons from '@/components/icons';
import {rs, rsui} from '@/utils';

const Settings = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FBFBFB', height: 1000}}>
      <Text style={{fontSize: 48, left: rs(25), top: rsui(20)}}>Ayarlar</Text>
      <View
        style={{
          alignItems: 'center',
          top: rsui(60),
        }}>
        <View
          style={{
            width: 345,
            height: 231,
            backgroundColor: '#fff',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.02,
            shadowRadius: 2.0,

            elevation: 3,
          }}>
          <View style={{flexDirection: 'row', left: rs(15), top: rsui(20)}}>
            <Icons.Star />
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'PlusJakartaSans-Regular',
                left: rs(20),
                bottom: rsui(1),
              }}>
              Bizi Puanla
            </Text>
          </View>
          <View style={{flexDirection: 'row', left: rs(15), top: rsui(50)}}>
            <Icons.Share />
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'PlusJakartaSans-Regular',
                left: rs(20),
                bottom: rsui(1),
              }}>
              Bizi Paylaş
            </Text>
          </View>
          <View style={{flexDirection: 'row', left: rs(15), top: rsui(80)}}>
            <Icons.Security />
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'PlusJakartaSans-Regular',
                left: rs(20),
                bottom: rsui(1),
              }}>
              Gizlilik Politikası
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
