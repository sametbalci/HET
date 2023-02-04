import {NavigationProp, useNavigation} from '@react-navigation/native';

export default function useAppNavigation() {
  return useNavigation<NavigationProp<RootStackProps>>();
}
