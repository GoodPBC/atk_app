import React from 'react';
import {Path} from 'react-native-svg';
import Svg from './Svg';

export class StarSvg extends Svg {
  static get viewBox() {
    return [0, 0, 22.6, 21.5];
  }

  static defaultProps = {
    ...super.defaultProps,
    fill: '#AAA',
  };

  renderContents() {
    return (
      <Path d="M11.3,17.8l-7,3.6l1.3-7.7L0,8.2l7.9-1.1L11.3,0l3.4,7.1l7.9,1.1l-5.6,5.5l1.3,7.7L11.3,17.8z" />
    );
  }
}
