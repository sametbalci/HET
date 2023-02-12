import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import categoryData from '@/data/CategoryData';
import {rsui} from '@/utils';
import {useAppNavigation} from '@/utils/hooks';

const Item = ({title, image}) => {
  const navigator = useAppNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{alignItems: 'center', top: rsui(5)}}
        onPress={() => navigator.navigate('Detail', {screen: 'CategoryDetail'})}>
        <Image source={image} />
        <Text
          style={{
            fontSize: 20,
            top: rsui(10),
            fontFamily: 'PlusJakartaSans-Regular',
            color: 'black',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const Home = () => {
  return (
    <SafeAreaView style={{top: rsui(20)}}>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={categoryData}
          renderItem={({item}) => (
            <Item image={item.image} title={item.itemTitle} />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 165,
    backgroundColor: '#E9A9A9',
    borderRadius: 12,
    margin: 10,
  },
});
export default Home;
