import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export function rs(size: number) {
  return wp((size / 375) * 100);
}

export function rsui(size: number) {
  'worklet';
  return hp((size / 375) * 100);
}
