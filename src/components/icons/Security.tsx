import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface _SVGProps extends SvgProps {
  xmlns?: string;
}
const SvgPoint3 = (props: _SVGProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 22.75c-.24 0-.48-.03-.71-.1-5.19-1.43-8.95-6.28-8.95-11.54V6.72c0-1.12.81-2.33 1.85-2.76l5.57-2.28a5.89 5.89 0 0 1 4.48 0l5.57 2.28c1.04.43 1.85 1.64 1.85 2.76v4.39c0 5.25-3.77 10.1-8.95 11.54-.23.07-.47.1-.71.1Zm0-20a4.4 4.4 0 0 0-1.67.33L4.76 5.36c-.48.2-.92.85-.92 1.37v4.39c0 4.59 3.3 8.83 7.85 10.09.2.06.42.06.62 0 4.55-1.26 7.85-5.5 7.85-10.09V6.73c0-.52-.44-1.17-.92-1.37l-5.57-2.28A4.4 4.4 0 0 0 12 2.75Z"
      fill="#000"
    />
    <Path
      d="M12 13.25c-1.52 0-2.75-1.23-2.75-2.75S10.48 7.75 12 7.75s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      fill="#000"
    />
    <Path
      d="M12 16.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      fill="#000"
    />
  </Svg>
);

export default SvgPoint3;
