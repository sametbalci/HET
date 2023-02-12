import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import categoryData from '@/data/CategoryData';
import {rs, rsui} from '@/utils';
import * as Icons from '@/components/icons';
import categoryDetail from '@/data/CategoryDetail';
import { useAppNavigation } from "@/utils/hooks";

const Item = ({title}) => {
  const navigator = useAppNavigation();
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigator.navigate('Detail', {screen: 'LocationDetail'})}>
        <View style={styles.itemContainer}>
          <View style={{justifyContent: 'center', width: rs(190)}}>
            <Text style={{fontSize: rsui(12), left: rs(10)}}>{title}</Text>
          </View>
          <View style={{justifyContent: 'center', left: rs(100)}}>
            <Icons.Arrow />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const CategoryItems = () => {
  const navigator = useAppNavigation();
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', left: rs(20), top: rsui(10)}}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Icons.Back />
        </TouchableOpacity>
        <Text style={{fontSize: rsui(12), bottom: rsui(3)}}>Restaurantlar</Text>
      </View>
      <View style={{top: rsui(10)}}>
        <FlatList
          data={categoryDetail}
          renderItem={({item}) => <Item title={item.itemTitle} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: rs(330),
    height: rsui(25),
    backgroundColor: 'rgba(70, 179, 230, 0.67)',
    margin: 10,
    borderRadius: rs(6),
    flexDirection: 'row',
  },
});

export default CategoryItems;
