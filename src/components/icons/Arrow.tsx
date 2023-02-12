import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface _SVGProps extends SvgProps {
  xmlns?: string;
}
const SvgArrow = (props: _SVGProps) => (
  <Svg
    width="26"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.09 20.67a.78.78 0 0 1-.548-.22c-.3-.29-.3-.77 0-1.06l6.742-6.52c.496-.48.496-1.26 0-1.74L9.542 4.61c-.3-.29-.3-.77 0-1.06a.8.8 0 0 1 1.096 0l6.742 6.52c.527.51.827 1.2.827 1.93s-.29 1.42-.827 1.93l-6.742 6.52a.827.827 0 0 1-.548.22Z"
      fill="#000"
      fillOpacity={0.2}
    />
  </Svg>
);

export default SvgArrow;
