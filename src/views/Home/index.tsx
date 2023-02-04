import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from "react-native";
import categoryData from '@/data/CategoryData';
import {rsui} from '@/utils';

const Item = ({title, image}) => (
  <View style={styles.container}>
    <TouchableOpacity style={{alignItems: 'center', top: rsui(20)}}>
      <Image source={image} />
      <Text
        style={{
          fontSize: 20,
          top: rsui(16),
          fontFamily: 'PlusJakartaSans-Regular',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);
const Home = () => {
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={categoryData}
          renderItem={({item}) => <Item image={item.image} title={item.title} />}
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
