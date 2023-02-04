import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

interface _SVGProps extends SvgProps {
  xmlns?: string;
}
const SvgSettings = (props: _SVGProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.423 11.88v-1.76c0-1.04.817-1.9 1.827-1.9 1.74 0 2.452-1.28 1.577-2.85-.5-.9-.202-2.07.673-2.59l1.663-.99c.76-.47 1.74-.19 2.193.6l.106.19c.865 1.57 2.288 1.57 3.163 0l.106-.19c.452-.79 1.433-1.07 2.192-.6l1.664.99c.875.52 1.173 1.69.673 2.59-.875 1.57-.164 2.85 1.577 2.85 1 0 1.826.85 1.826 1.9v1.76c0 1.04-.817 1.9-1.826 1.9-1.74 0-2.452 1.28-1.577 2.85.5.91.202 2.07-.673 2.59l-1.664.99c-.76.47-1.74.19-2.192-.6l-.106-.19c-.865-1.57-2.288-1.57-3.163 0l-.106.19c-.452.79-1.433 1.07-2.193.6L5.5 19.22a1.89 1.89 0 0 1-.852-1.15 1.966 1.966 0 0 1 .179-1.44c.875-1.57.163-2.85-1.577-2.85-1.01 0-1.827-.86-1.827-1.9Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.038 14a2.83 2.83 0 0 0 2.04-.879c.541-.562.845-1.325.845-2.121s-.304-1.559-.845-2.121A2.83 2.83 0 0 0 11.038 8a2.83 2.83 0 0 0-2.04.879A3.062 3.062 0 0 0 8.155 11c0 .796.304 1.559.845 2.121a2.83 2.83 0 0 0 2.04.879Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSettings;
