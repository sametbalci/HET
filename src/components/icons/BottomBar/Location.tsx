import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

interface _SVGProps extends SvgProps {
  xmlns?: string;
}
const SvgLocation = (props: _SVGProps) => (
  <Svg
    width={19}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.615 12.43a2.9 2.9 0 0 0 1.148-.238c.364-.156.695-.386.974-.676.278-.29.5-.634.65-1.012a3.228 3.228 0 0 0 0-2.388 3.131 3.131 0 0 0-.65-1.012c-.279-.29-.61-.52-.974-.677a2.9 2.9 0 0 0-1.148-.237c-.795 0-1.558.329-2.121.914a3.184 3.184 0 0 0-.879 2.206c0 .827.316 1.621.879 2.206a2.943 2.943 0 0 0 2.121.914Z"
      stroke="#000"
      strokeWidth={1.5}
    />
    <Path
      d="M1.558 7.49c1.894-8.66 14.23-8.65 16.115.01 1.106 5.08-1.933 9.38-4.596 12.04a4.894 4.894 0 0 1-3.466 1.455 4.894 4.894 0 0 1-3.467-1.455C3.49 16.88.452 12.57 1.558 7.49Z"
      stroke="#000"
      strokeWidth={1.5}
    />
  </Svg>
);

export default SvgLocation;
