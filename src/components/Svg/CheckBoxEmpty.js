import React from 'react';
import {Path} from 'react-native-svg';
import Svg from './Svg';
import {COLOR} from '../../constants';

export class CheckBoxEmptySvg extends Svg {
  static get viewBox() {
    return [0, 0, 21, 21];
  }

  static defaultProps = {
    ...super.defaultProps,
    fill: COLOR.sky_button,
    style: {
      marginTop: 10,
    },
  };

  renderContents() {
    return (
      <Path
        d="M3.4,1C2.1,1,1,2.1,1,3.4v14.3C1,18.9,2.1,20,3.4,20h14.3c1.3,0,2.4-1.1,2.4-2.4V3.4C20,2.1,18.9,1,17.6,1H3.4
          M3.4,0h14.3C19.5,0,21,1.5,21,3.4v14.3c0,1.9-1.5,3.4-3.4,3.4H3.4C1.5,21,0,19.5,0,17.6V3.4C0,1.5,1.5,0,3.4,0z"
      />
    );
  }
}
