import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

interface _SVGProps extends SvgProps {
  xmlns?: string;
}
const SvgInfo = (props: _SVGProps) => (
  <Svg
    width={21}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.495 15h.01"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 7v5m0 9c5.289 0 9.615-4.5 9.615-10S15.79 1 10.5 1C5.212 1 .885 5.5.885 11S5.212 21 10.5 21Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgInfo;
