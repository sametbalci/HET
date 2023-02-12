import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface _SVGProps extends SvgProps {
  xmlns?: string;
}
const SvgBack = (props: _SVGProps) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill="#003441"
    />
    <Path
      d="M13.26 16.28c-.19 0-.38-.07-.53-.22L9.2 12.53a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3 3 3c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22Z"
      fill="#003441"
    />
  </Svg>
);

export default SvgBack;
