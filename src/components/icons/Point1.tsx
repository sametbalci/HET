import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';

interface _SVGProps extends SvgProps {
  xmlns?: string;
}
const SvgPoint1 = (props: _SVGProps) => (
  <Svg
    width={56}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={5} cy={5} r={5} fill="#1C215D" />
    <Circle cx={28} cy={5} r={5} fill="#8D8FAD" />
    <Circle cx={51} cy={5} r={5} fill="#8D8FAD" />
  </Svg>
);

export default SvgPoint1;
