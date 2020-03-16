import React from 'react';
import {Path} from 'react-native-svg';
import {COLOR} from '../../constants';
import Svg from './Svg';

export class CheckBoxFillSvg extends Svg {
  static get viewBox() {
    return [0, 0, 25, 25];
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
        d="M21,0H4C1.8,0,0,1.8,0,4v17c0,2.2,1.8,4,4,4h17c2.2,0,4-1.8,4-4V4C25,1.8,23.2,0,21,0z M9.2,19.5l-6.3-6.3
          l1.4-1.4l4.9,4.9L19.6,6.2L21,7.6L9.2,19.5z"
      />
    );
  }
}
