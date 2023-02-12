import React from 'react';
import { Image, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import {useAppNavigation} from '@/utils/hooks';
import * as Icons from '@/components/icons';
import {rs, rsui} from '@/utils';

const Walkthrough3 = () => {
  const navigator = useAppNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff", height: 1000, flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }}>
      <View style={{alignItems: 'center'}}>
        <Image source={require('@/assets/images/walkthrough3.png')} />
      </View>
      <View style={{left: rs(30), top: rsui(20), backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: rsui(21),
            textAlign: 'left',
            fontFamily: 'Plus Jakarta Sans',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}>
            Engel
          </Text>
          leri
          {'\n'}Hep{'\n'}
          <Text style={{fontWeight: 'bold'}}>Beraber</Text>
          {'\n'}Aşıyoruz!
        </Text>
      </View>
      <View
        style={{alignItems: 'center', top: rsui(90), backgroundColor: '#fff'}}>
        <Icons.Point3 />
      </View>
      <View style={{top: rsui(83), flexDirection: 'row'}}>
        <TouchableOpacity
          style={{left: rs(30)}}
          onPress={() => navigator.navigate('Walkthrough', {screen: 'Two'})}>
          <Text style={{color: '#1C215D', textAlign: 'left'}}>Önceki</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{left: rs(255), width: rs(50)}}
          onPress={() => navigator.navigate('Main', {screen: 'Home'})}>
          <Text style={{color: '#1C215D', textAlign: 'right'}}>Bitti</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Walkthrough3;
