import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppNavigation} from '@/utils/hooks';
import {rs, rsui} from '@/utils';
import * as Icons from '@/components/icons';

const ItemDetail = () => {
  const navigator = useAppNavigation();
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', left: rs(20), top: rsui(10)}}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Icons.Back />
        </TouchableOpacity>
        <Text style={{fontSize: rsui(12), bottom: rsui(3)}}>İsot Döner</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('@/assets/images/mekanresim.png')}
          style={{width: rs(330), top: rsui(18), borderRadius: rs(10)}}
        />
      </View>
      <View style={{alignItems: 'center', top: rsui(30)}}>
        <Image
          source={require('@/assets/images/map.png')}
          style={{width: rs(335), borderRadius: rs(10)}}
        />

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps/place/%C4%B0sot+D%C3%B6ner/@38.6091714,27.0712079,15z/data=!4m2!3m1!1s0x0:0x9db73953667c89a2?sa=X&ved=2ahUKEwjgpZi0i5D9AhXLVvEDHafYBUIQ_BJ6BAhqEAg',
            )
          }>
          <View
            style={{
              flexDirection: 'row',
              width: rs(335),
              height: rsui(30),
              borderRadius: rs(10),
              backgroundColor: '#FD6241',
              zIndex: 4,
              bottom: rsui(20),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                top: rsui(5),
                left: rs(10),
              }}>
              <Text style={{fontSize: rsui(16), color: 'white'}}>Mekana Git</Text>
              <Icons.Arrow height={'40'} width={'40'} style={{left: rs(110)}} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          top: rsui(15),
        }}>
        <View
          style={{
            width: rs(335),
            height: rsui(50),
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
          <View style={{flexDirection: 'row', left: rs(15), top: rsui(10)}}>
            <Icons.Article />
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'PlusJakartaSans-Regular',
                left: rs(20),
                bottom: rsui(4),
              }}>
              Engelli Rampası Bulunur
            </Text>
          </View>
          <View style={{flexDirection: 'row', left: rs(15), top: rsui(20)}}>
            <Icons.Article />
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'PlusJakartaSans-Regular',
                left: rs(20),
                bottom: rsui(4),
              }}>
              Engelli Lavabosu Bulunur
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetail;
