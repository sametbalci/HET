import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import * as Icons from '@/components/icons';
import {rs, rsui} from '@/utils';

const Info = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FBFBFB', height: 1000}}>
      <Text style={{fontSize: 48, left: rs(25), top: rsui(20)}}>Yardım</Text>
      <View
        style={{
          alignItems: 'center',
          top: rsui(60),
        }}>
        <View
          style={{
            width: 345,
            height: 350,
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
          <View>
            <Text
              style={{
                fontFamily: 'PlusJakartaSans-Regular',
                fontWeight: '600',
                fontSize: 16,
                left: rs(20),
                top: rsui(10),
              }}>
              Adım 1:
            </Text>
            <Text
              style={{
                fontFamily: 'PlusJakartaSans-Regular',
                fontSize: 18,
                left: rs(20),
                top: rsui(20),
              }}>
              Anasayfadan gitmek istediğiniz kategoriyi seçin.
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: '#DFDFDF',
                width: rs(290),
                top: rsui(30),
                left: rs(20),
              }}
            />
          </View>
          <View style={{top: rsui(40)}}>
            <Text
              style={{
                fontFamily: 'PlusJakartaSans-Regular',
                fontWeight: '600',
                fontSize: 16,
                left: rs(20),
                top: rsui(10),
              }}>
              Adım 2:
            </Text>
            <Text
              style={{
                fontFamily: 'PlusJakartaSans-Regular',
                fontSize: 18,
                left: rs(20),
                top: rsui(20),
              }}>
              Seçtiğiniz kategorideki mekanlardan gitmek istediğiniz mekanı seçin.
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: '#DFDFDF',
                width: rs(290),
                top: rsui(30),
                left: rs(20),
              }}
            />
          </View>
          <View style={{top: rsui(80)}}>
            <Text
              style={{
                fontFamily: 'PlusJakartaSans-Regular',
                fontWeight: '600',
                fontSize: 16,
                left: rs(20),
                top: rsui(10),
              }}>
              Adım 3:
            </Text>
            <Text
              style={{
                fontFamily: 'PlusJakartaSans-Regular',
                fontSize: 18,
                left: rs(20),
                top: rsui(20),
              }}>
              Seçtiğiniz mekanın yol tarifini açabilirsiniz.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Info;
