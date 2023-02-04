import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '@/utils/hooks';
import * as Icons from '@/components/icons';
import {rs, rsui} from '@/utils';

const Walkthrough1 = () => {
  const navigator = useAppNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: 1000}}>
      <View style={{alignItems: 'center'}}>
        <Image source={require('@/assets/images/walkthrough3.png')} />
      </View>
      <View style={{left: rs(30), top: rsui(20), backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'left',
            fontFamily: 'Plus Jakarta Sans',
          }}>
          Hayatta{'\n'}
          <Text
            style={{
              fontWeight: 'bold',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}>
            Engel
          </Text>
          {'\n'}Tanımayan{'\n'}Bir{'\n'}Uygulama
        </Text>
      </View>
      <View
        style={{alignItems: 'center', top: rsui(130), backgroundColor: '#fff'}}>
        <Icons.Point3 />
      </View>
      <View style={{top: rsui(115)}}>
        <TouchableOpacity
          style={{left: rs(30)}}
          onPress={() => navigator.navigate('Walkthrough', {screen: 'Two'})}>
          <Text style={{color: '#1C215D', textAlign: 'left'}}>Önceki</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{left: rs(300), bottom: rsui(16), width: rs(50)}}
          onPress={() => navigator.navigate('Main', {screen: 'Home'})}>
          <Text style={{color: '#1C215D', textAlign: 'right'}}>Bitti</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Walkthrough1;
