import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export function rs(size: number) {
  return wp((size / 375) * 100);
}

export function rsui(size: number) {
  'worklet';
  return wp((size / 375) * 100);
}
