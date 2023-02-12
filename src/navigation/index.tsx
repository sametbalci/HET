import * as WalkthroughScreens from '@/views/Walkthrough';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet} from 'react-native';
import Home from '@/views/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {rs, rsui} from '@/utils';
import * as Icons from '@/components/icons/BottomBar';
import Info from '@/views/Info';
import Settings from '@/views/Settings';
import CategoryItems from '@/views/Home/CategoryItems';
import ItemDetail from '@/views/Home/ItemDetail';

const RootStack = createNativeStackNavigator<RootStackProps>();
const WalkthroughStack = createNativeStackNavigator<WalkthroughStackProps>();
const BottomBar = createBottomTabNavigator<BottomBarProps>();
const Stack = createNativeStackNavigator<StackProps>();

type Props = {
  initial: keyof RootStackProps;
};

export const RootStackScreen = ({initial}: Props) => {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <RootStack.Navigator
        initialRouteName={initial}
        screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name={'Walkthrough'}
          component={WalkthroughScreen}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name={'Main'}
          component={BottomBarScreen}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name={'Detail'}
          component={StackScreens}
          options={{gestureEnabled: false}}
        />
      </RootStack.Navigator>
    </>
  );
};

const WalkthroughScreen = () => {
  return (
    <WalkthroughStack.Navigator
      initialRouteName={'One'}
      screenOptions={{headerShown: false}}>
      <WalkthroughStack.Screen
        name={'One'}
        component={WalkthroughScreens.Screen1}
        options={{gestureEnabled: false}}
      />
      <WalkthroughStack.Screen
        name={'Two'}
        component={WalkthroughScreens.Screen2}
        options={{gestureEnabled: false}}
      />
      <WalkthroughStack.Screen
        name={'Three'}
        component={WalkthroughScreens.Screen3}
        options={{gestureEnabled: false}}
      />
    </WalkthroughStack.Navigator>
  );
};

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={'CategoryDetail'}
        component={CategoryItems}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'LocationDetail'}
        component={ItemDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const BottomBarScreen = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <BottomBar.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBarStyle,
          paddingBottom: bottom + rsui(7),
          height: bottom + rsui(35),
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      <BottomBar.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icons.Location />,
          tabBarLabel: 'Mekanlar',
        }}
      />
      <BottomBar.Screen
        name={'Info'}
        component={Info}
        options={{
          tabBarIcon: ({color}) => <Icons.Info />,
          tabBarLabel: 'Yardım',
        }}
      />
      <BottomBar.Screen
        name={'Settings'}
        component={Settings}
        options={{
          tabBarIcon: ({color}) => <Icons.Settings />,
          tabBarLabel: 'Ayarlar',
        }}
      />
    </BottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#EDEDED',
    borderTopEndRadius: rs(10),
    borderTopStartRadius: rs(10),
  },
  tabBarLabelStyle: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: rs(12),
  },
});
