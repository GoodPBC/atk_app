import React, {Fragment} from 'react';
import {G, Path, Rect} from 'react-native-svg';
import Svg from './Svg';
import {COLOR} from '../../constants';

export class RaffleTicketFoundSvg extends Svg {
  static get viewBox() {
    return [0, 0, 208.6, 175.4];
  }

  static defaultProps = {
    ...super.defaultProps,
    width: '100%',
    height: '100%',
    fill: COLOR.red,
    lithography: COLOR.white,
  };

  renderContents() {
    const {lithography} = this.props;

    const styles = {
      lithography: {
        fill: lithography,
      },
    };

    return (
      <Fragment>
        <Path
          d="M202.1,70.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.2-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.2-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.2-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.1-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.1-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.2-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.1-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.1-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1-1.7
            c-0.1,0.1-0.2,0.2-0.3,0.2c-1.2,0.7-2.7,0.3-3.4-0.9c-0.7-1.2-0.3-2.7,0.9-3.4c0.1-0.1,0.2-0.1,0.3-0.1l-1.2-2
            c-5.7,3.3-13,1.3-16.3-4.4L9.4,87.1c3.3,5.7,1.3,13-4.4,16.3l1.2,2c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1,1.8c0.1-0.1,0.2-0.2,0.4-0.3c1.2-0.7,2.7-0.3,3.4,0.9
            c0.7,1.2,0.3,2.7-0.9,3.4c-0.1,0.1-0.3,0.1-0.4,0.2l1.2,2c5.7-3.3,13-1.3,16.3,4.4l141.8-81.9c-3.3-5.7-1.3-13,4.4-16.3l-1.2-2
            C202.3,70.1,202.2,70.1,202.1,70.2z"
        />
        <G style={styles.lithography}>
          <Path
            d="M62.4,146l0.3-0.2c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.3,0.1,0.3
              c0,0.1-0.2,0.2-0.4,0.3l-1.7,1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.3-0.3
              l0.2-0.1l0.3-0.2l-2.7-4.7l-0.3,0.2c-0.3,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3
              c0-0.1,0.1-0.2,0.2-0.2l2.2-1.2c0.5-0.3,0.9-0.5,1.2-0.6c0.3-0.1,0.6-0.1,0.8-0.1c0.3,0,0.6,0.1,0.9,0.3c0.3,0.2,0.5,0.4,0.7,0.7
              c0.2,0.4,0.3,0.8,0.2,1.2c-0.1,0.4-0.3,0.8-0.7,1.2c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0.1,0.3,0.1l1.9,1l0.2-0.1
              c0.2-0.1,0.3-0.2,0.4-0.1c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1-0.1,0.2-0.2,0.2l-0.6,0.3
              c-0.2,0.1-0.4,0.1-0.7-0.1c0,0-0.1,0-0.1,0l-1.8-0.9c-0.4-0.2-0.7-0.3-0.8-0.3c-0.2,0-0.4,0-0.6,0.2l-0.7,0.4L62.4,146z
              M59.7,141.3l1.2,2.1l1.1-0.6c0.5-0.3,0.8-0.6,0.9-0.9c0.1-0.3,0.1-0.6-0.1-1c-0.2-0.3-0.5-0.5-0.8-0.6c-0.3,0-0.7,0.1-1.2,0.3
              L59.7,141.3z"
          />
          <Path
            d="M66,137.7L66,137.7c-0.3,0.2-0.4,0.2-0.6,0.2s-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3
              c0-0.1,0.1-0.2,0.2-0.3l0.2-0.1l1-0.6c0.3-0.2,0.5-0.2,0.6-0.2c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.3,0,0.4
              c-0.1,0.1-0.2,0.2-0.5,0.4l-0.2,0.1l1.6,2.8c0.2,0.4,0.4,0.6,0.5,0.8c0.1,0.2,0.3,0.3,0.4,0.4c0.2,0.1,0.5,0.2,0.8,0.2
              c0.3,0,0.5-0.1,0.8-0.2c0.5-0.3,0.8-0.6,0.8-1.1s-0.1-1-0.5-1.6l-1.7-2.9l-0.3,0.2c-0.3,0.2-0.5,0.2-0.6,0.2
              c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0.2-0.2,0.4-0.3l1.1-0.7l0.2-0.1c0.1-0.1,0.2-0.1,0.3-0.1
              c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.3,0.1,0.4s-0.2,0.2-0.4,0.3l-0.1,0l1.7,3c0.5,0.8,0.7,1.6,0.5,2.2
              c-0.1,0.6-0.6,1.2-1.3,1.6c-0.7,0.4-1.3,0.5-2,0.3c-0.6-0.2-1.2-0.6-1.6-1.3L66,137.7z"
          />
          <Path
            d="M79.6,132.9c0.5,0.9,0.7,1.8,0.5,2.7c-0.2,0.9-0.7,1.6-1.5,2c-0.8,0.5-1.6,0.5-2.5,0.2
              c-0.9-0.3-1.6-0.9-2.1-1.8c-0.5-0.9-0.7-1.9-0.6-2.7c0.2-0.9,0.7-1.6,1.5-2c0.8-0.5,1.6-0.5,2.5-0.2
              C78.4,131.4,79.1,132,79.6,132.9z M78.3,137c0.6-0.3,0.9-0.8,1-1.4c0.1-0.6-0.1-1.3-0.6-2.1s-1-1.3-1.5-1.5s-1.2-0.2-1.7,0.1
              c-0.6,0.3-0.9,0.8-1,1.4s0.1,1.3,0.6,2.1c0.4,0.8,1,1.3,1.5,1.5C77.1,137.4,77.7,137.3,78.3,137z"
          />
          <Path
            d="M83.6,133.7l-1.9-3.3l-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3
              c0-0.1,0.1-0.2,0.3-0.3l0.2-0.1l0.5-0.3c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1l0.2,0.3c0.1-0.4,0.3-0.7,0.4-0.9
              c0.2-0.3,0.4-0.5,0.7-0.6c0.5-0.3,1-0.4,1.5-0.2c0.5,0.1,0.9,0.5,1.2,1.1l1.3,2.3l0.2-0.1c0.2-0.1,0.3-0.1,0.4-0.1
              c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0,0.4c0,0.1-0.2,0.2-0.4,0.3l-1.1,0.7c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2-0.1-0.3-0.2
              c-0.1-0.1-0.1-0.2-0.1-0.3s0.2-0.2,0.4-0.3l0.2-0.1l-1.2-2.1c-0.2-0.4-0.5-0.7-0.8-0.8s-0.6-0.1-1,0.1c-0.3,0.2-0.6,0.5-0.7,0.9
              c-0.1,0.4-0.1,0.8,0.1,1.1l1.2,2.1l0.2-0.1c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.3,0.1,0.3
              c0,0.1-0.2,0.2-0.4,0.3l-0.9,0.5l-0.3,0.2c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.3,0-0.3
              c0.1-0.1,0.2-0.2,0.4-0.3L83.6,133.7z"
          />
          <Path
            d="M89.5,123.3l-0.9,0.5c-0.3,0.2-0.6,0.3-0.7,0.3c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3
              s0.1-0.2,0.3-0.3l1.7-1c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1l3.3,5.8l1.6-0.9c0.1-0.1,0.2-0.1,0.3-0.1s0.2,0.1,0.2,0.2
              c0.1,0.1,0.1,0.3,0.1,0.3c0,0.1-0.1,0.2-0.3,0.3l-3.8,2.2c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.2-0.1-0.3-0.2
              c-0.1-0.1-0.1-0.2,0-0.3c0-0.1,0.1-0.2,0.3-0.3l1.4-0.8L89.5,123.3z"
          />
          <Path
            d="M100.7,123.9l1.6-0.9c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0.1,0.2,0.2c0.1,0.1,0.1,0.3,0.1,0.3
              c0,0.1-0.1,0.2-0.3,0.3l-4,2.3c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2,0-0.3c0-0.1,0.1-0.2,0.3-0.3
              l1.6-0.9L98,121l-1,0.6c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.3-0.3
              l1.5-0.9c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1L100.7,123.9z M96.6,118.9c-0.2-0.4-0.3-0.6-0.3-0.8c0-0.1,0.1-0.3,0.3-0.4
              c0.2-0.1,0.4-0.2,0.5-0.1c0.1,0,0.3,0.2,0.4,0.5c0.2,0.3,0.2,0.5,0.2,0.6c0,0.1-0.1,0.2-0.4,0.4c-0.2,0.1-0.4,0.2-0.5,0.1
              C96.8,119.2,96.7,119.1,96.6,118.9z"
          />
          <Path
            d="M105.6,121l-1.9-3.3l-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3
              c0-0.1,0.1-0.2,0.3-0.3l0.2-0.1l0.5-0.3c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1l0.2,0.3c0.1-0.4,0.3-0.7,0.4-0.9
              c0.2-0.3,0.4-0.5,0.7-0.6c0.5-0.3,1-0.4,1.5-0.2c0.5,0.1,0.9,0.5,1.2,1.1l1.3,2.3l0.2-0.1c0.2-0.1,0.3-0.1,0.4-0.1
              s0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0,0.4c0,0.1-0.2,0.2-0.4,0.3L109,120c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2-0.1-0.3-0.2
              c-0.1-0.1-0.1-0.2-0.1-0.3s0.2-0.2,0.4-0.3l0.2-0.1l-1.2-2.1c-0.2-0.4-0.5-0.7-0.8-0.8c-0.3-0.1-0.6-0.1-1,0.1
              c-0.3,0.2-0.6,0.5-0.7,0.9c-0.1,0.4-0.1,0.8,0.1,1.1l1.2,2.1l0.2-0.1c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2,0.1,0.3,0.2
              c0.1,0.1,0.1,0.3,0.1,0.3c0,0.1-0.2,0.2-0.4,0.3l-0.9,0.5l-0.3,0.2c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.2-0.1-0.3-0.2
              c-0.1-0.1-0.1-0.3,0-0.3c0.1-0.1,0.2-0.2,0.4-0.3L105.6,121z"
          />
          <Path
            d="M112.3,115.2c0.3,0.5,0.7,0.8,1.2,0.9c0.5,0.1,1,0,1.5-0.3c0.4-0.2,0.8-0.6,1.1-1.1c0.3-0.5,0.6-0.8,0.7-0.8
              c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0.1,0.2,0.2c0.1,0.1,0.1,0.2,0,0.3c0,0.1-0.1,0.3-0.2,0.4c-0.2,0.4-0.5,0.7-0.8,1
              c-0.3,0.3-0.6,0.5-1,0.8c-0.8,0.4-1.5,0.6-2.3,0.4c-0.7-0.2-1.3-0.6-1.7-1.4c-0.4-0.8-0.5-1.5-0.3-2.3c0.2-0.8,0.7-1.4,1.5-1.8
              c0.7-0.4,1.4-0.5,2.2-0.4c0.7,0.2,1.3,0.6,1.6,1.2c0.1,0.2,0.1,0.3,0.1,0.5c0,0.1-0.2,0.3-0.6,0.5l-0.1,0L112.3,115.2z
              M111.9,114.6l3.3-1.9c-0.3-0.4-0.6-0.6-1.1-0.7c-0.4-0.1-0.9,0-1.3,0.2c-0.5,0.3-0.8,0.6-0.9,1S111.8,114.1,111.9,114.6z"
          />
          <Path
            d="M120.8,105.3c0-0.1,0-0.2,0-0.3c0-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0.1,0.3,0.3
              c0.2,0.3,0.4,0.6,0.5,0.9c0.2,0.3,0.2,0.4,0.2,0.4c0.1,0.2,0.1,0.3,0.1,0.4c0,0.1-0.1,0.2-0.2,0.3c-0.2,0.1-0.5,0.1-0.7-0.2
              c-0.1-0.1-0.1-0.1-0.2-0.2c-0.2-0.2-0.5-0.3-0.8-0.4c-0.3,0-0.7,0.1-1,0.3c-0.6,0.3-1,0.8-1.1,1.5c-0.1,0.7,0,1.3,0.5,2.1
              c0.4,0.7,1,1.2,1.6,1.5s1.2,0.2,1.8-0.2c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.1,0.1-0.3,0.2-0.5
              c0.1-0.2,0.2-0.3,0.2-0.4c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0,0.4c0,0.1-0.1,0.3-0.2,0.6
              c-0.2,0.4-0.4,0.7-0.6,0.9c-0.2,0.3-0.5,0.5-0.8,0.7c-0.8,0.5-1.7,0.6-2.6,0.3c-0.9-0.3-1.6-0.9-2.1-1.8
              c-0.5-0.9-0.7-1.8-0.5-2.8c0.2-0.9,0.7-1.6,1.6-2.1c0.2-0.1,0.5-0.2,0.7-0.3C120.2,105.4,120.5,105.4,120.8,105.3z"
          />
          <Path
            d="M131.3,104c0.4,0.7,0.5,1.5,0.3,2.2c-0.2,0.8-0.7,1.4-1.5,1.8c-0.8,0.5-1.6,0.6-2.3,0.4
              c-0.8-0.2-1.4-0.6-1.8-1.4c-0.4-0.7-0.5-1.5-0.3-2.2c0.2-0.7,0.7-1.4,1.5-1.8s1.6-0.6,2.3-0.4C130.2,102.8,130.8,103.3,131.3,104
              z M129.6,107.3c0.5-0.3,0.9-0.7,1-1.2c0.1-0.5,0.1-1-0.2-1.6c-0.3-0.5-0.7-0.8-1.2-1c-0.5-0.1-1.1-0.1-1.6,0.2
              c-0.5,0.3-0.9,0.7-1,1.2c-0.1,0.5-0.1,1.1,0.2,1.6c0.3,0.5,0.7,0.8,1.2,1C128.5,107.7,129.1,107.6,129.6,107.3z"
          />
          <Path
            d="M134.9,104.1l-1.9-3.3l-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3
              c0-0.1,0.1-0.2,0.3-0.3l0.2-0.1l0.5-0.3c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1l0.2,0.3c0.1-0.4,0.3-0.7,0.4-0.9
              c0.2-0.3,0.4-0.5,0.7-0.6c0.5-0.3,1-0.4,1.5-0.2c0.5,0.1,0.9,0.5,1.2,1.1l1.3,2.3l0.2-0.1c0.2-0.1,0.3-0.1,0.4-0.1
              c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0,0.4c0,0.1-0.2,0.2-0.4,0.3l-1.1,0.7c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2-0.1-0.3-0.2
              c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.2-0.2,0.4-0.3l0.2-0.1l-1.2-2.1c-0.2-0.4-0.5-0.7-0.8-0.8c-0.3-0.1-0.6-0.1-1,0.1
              c-0.3,0.2-0.6,0.5-0.7,0.9c-0.1,0.4-0.1,0.8,0.1,1.1l1.2,2.1l0.2-0.1c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2,0.1,0.3,0.2
              c0.1,0.1,0.1,0.3,0.1,0.3c0,0.1-0.2,0.2-0.4,0.3l-0.9,0.5l-0.3,0.2c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.2-0.1-0.3-0.2
              c-0.1-0.1-0.1-0.3,0-0.3c0.1-0.1,0.2-0.2,0.4-0.3L134.9,104.1z"
          />
          <Path
            d="M150.2,96.2c-0.2,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.2-0.1-0.3-0.3c-0.1-0.2,0-0.8,0.3-1.8l0.1-0.2
              c0-0.2,0.1-0.4,0.2-0.7c0.5-1.8,0.7-2.9,0.4-3.5c-0.2-0.4-0.5-0.6-0.8-0.7c-0.3-0.1-0.7-0.1-1,0.1c-0.2,0.1-0.4,0.3-0.5,0.5
              c-0.1,0.2-0.2,0.4-0.3,0.6c0,0,0,0.1,0,0.2c0,0.3-0.1,0.5-0.2,0.6c-0.1,0.1-0.2,0.1-0.3,0c-0.1,0-0.2-0.2-0.3-0.4
              c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0-0.3c0.1-0.3,0.3-0.7,0.5-1c0.3-0.3,0.5-0.6,0.9-0.8c0.6-0.3,1.1-0.4,1.7-0.3
              c0.6,0.1,1,0.5,1.3,1c0.4,0.7,0.3,1.9-0.2,3.7c-0.1,0.4-0.2,0.8-0.3,1l-0.3,1l2.3-1.3c-0.1-0.2-0.1-0.3-0.1-0.4
              c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3,0c0.1,0,0.2,0.1,0.3,0.3c0,0,0,0,0,0.1c0,0,0,0,0,0.1l0.2,0.4
              c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1-0.1,0.2-0.1,0.2L150.2,96.2z"
          />
          <Path
            d="M159.4,91.2c-0.6,0.4-1.3,0.4-2.1,0s-1.4-1.1-2-2.2c-0.6-1-0.9-2-0.9-2.8c0-0.8,0.4-1.4,1-1.8s1.3-0.4,2.1,0
              c0.7,0.4,1.4,1.1,2,2.2c0.6,1,0.9,2,0.9,2.8C160.3,90.2,160,90.8,159.4,91.2z M155.9,85.1c-0.4,0.2-0.6,0.6-0.5,1.2
              c0.1,0.6,0.3,1.3,0.8,2.2c0.5,0.8,1,1.4,1.5,1.8c0.5,0.3,0.9,0.4,1.3,0.2c0.4-0.2,0.6-0.6,0.5-1.2c-0.1-0.6-0.3-1.3-0.8-2.2
              c-0.5-0.8-1-1.4-1.5-1.8C156.7,84.9,156.3,84.9,155.9,85.1z"
          />
          <Path
            d="M164.8,87.8c-0.2,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.2-0.1-0.3-0.3c-0.1-0.2,0-0.8,0.3-1.8l0.1-0.2
              c0-0.2,0.1-0.4,0.2-0.7c0.5-1.8,0.7-2.9,0.4-3.5c-0.2-0.4-0.5-0.6-0.8-0.7s-0.7-0.1-1,0.1c-0.2,0.1-0.4,0.3-0.5,0.5
              c-0.1,0.2-0.2,0.4-0.3,0.6c0,0,0,0.1,0,0.2c0,0.3-0.1,0.5-0.2,0.6c-0.1,0.1-0.2,0.1-0.3,0c-0.1,0-0.2-0.2-0.3-0.4
              c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0-0.3c0.1-0.3,0.3-0.7,0.5-1s0.5-0.6,0.9-0.8c0.6-0.3,1.1-0.4,1.7-0.3
              c0.6,0.1,1,0.5,1.3,1c0.4,0.7,0.3,1.9-0.2,3.7c-0.1,0.4-0.2,0.8-0.3,1l-0.3,1l2.3-1.3c-0.1-0.2-0.1-0.3-0.1-0.4
              c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3,0c0.1,0,0.2,0.1,0.3,0.3c0,0,0,0,0,0.1s0,0,0,0.1l0.2,0.4c0.1,0.1,0.1,0.2,0.1,0.3
              c0,0.1-0.1,0.2-0.1,0.2L164.8,87.8z"
          />
          <Path
            d="M174,82.7c-0.6,0.4-1.3,0.4-2.1,0c-0.7-0.4-1.4-1.1-2-2.2c-0.6-1-0.9-2-0.9-2.8c0-0.8,0.4-1.4,1-1.8
              s1.3-0.4,2.1,0c0.7,0.4,1.4,1.1,2,2.2c0.6,1,0.9,2,0.9,2.8C175,81.7,174.7,82.3,174,82.7z M170.5,76.6c-0.4,0.2-0.6,0.6-0.5,1.2
              c0.1,0.6,0.3,1.3,0.8,2.2c0.5,0.8,1,1.4,1.5,1.8c0.5,0.3,0.9,0.4,1.3,0.2c0.4-0.2,0.6-0.6,0.5-1.2c-0.1-0.6-0.3-1.3-0.8-2.2
              c-0.5-0.8-1-1.4-1.5-1.8C171.4,76.5,170.9,76.4,170.5,76.6z"
          />
          <Path
            d="M83,73c0.2,0,0.4,0.1,0.6,0.2c0,0,0.1,0,0.1,0l2.4,1.2l0.1,0l0.2-0.1c0.3-0.2,0.6-0.2,0.8-0.2
              c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.6,0.1,0.8c-0.1,0.2-0.3,0.4-0.6,0.6l-0.9,0.5c-0.3,0.2-0.7,0.2-1.1,0l0,0l-3.5-1.8
              c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1l-0.7,0.4l1.2,2l0.1-0.1c0.3-0.2,0.5-0.2,0.7-0.1c0.2,0.1,0.4,0.2,0.6,0.5
              c0.2,0.3,0.2,0.6,0.2,0.8c-0.1,0.2-0.3,0.4-0.6,0.6l-2,1.1c-0.3,0.2-0.6,0.3-0.8,0.2c-0.2,0-0.4-0.2-0.6-0.5
              c-0.2-0.3-0.2-0.5-0.1-0.7c0.1-0.2,0.2-0.4,0.5-0.6l0.1-0.1l-3.3-5.7l-0.1,0.1c-0.3,0.2-0.5,0.2-0.7,0.1
              c-0.2-0.1-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.1-0.8c0.1-0.2,0.3-0.4,0.6-0.6l3.5-2c1.1-0.6,2-0.9,2.8-0.8
              c0.8,0.1,1.4,0.6,1.9,1.4c0.3,0.6,0.5,1.1,0.4,1.7C83.7,71.9,83.5,72.4,83,73z M78,71.5l1.2,2.1l1-0.6c0.6-0.4,1-0.7,1.2-1
              c0.2-0.3,0.1-0.7-0.1-1c-0.2-0.4-0.5-0.6-0.8-0.6c-0.3,0-0.7,0.1-1.3,0.4L78,71.5z"
          />
          <Path
            d="M96.5,68.5l0.1-0.1c0.3-0.2,0.5-0.2,0.7-0.1c0.2,0.1,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.5,0.1,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6l-0.7,0.4c-0.3,0.1-0.5,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.3c-0.3,0.5-0.6,1-1,1.4
              c-0.4,0.4-0.8,0.8-1.3,1c-0.8,0.5-1.6,0.6-2.3,0.5c-0.7-0.1-1.3-0.6-1.7-1.3c-0.4-0.8-0.5-1.5-0.1-2.3c0.4-0.8,1.1-1.5,2.2-2.1
              c0.2-0.1,0.5-0.3,0.8-0.4c0.3-0.1,0.6-0.3,1-0.4L93,66.7c-0.3-0.5-0.6-0.7-0.9-0.8c-0.4-0.1-0.8,0-1.2,0.2
              c-0.3,0.2-0.7,0.6-1.1,1.1c-0.4,0.5-0.7,0.9-0.9,1c-0.2,0.1-0.5,0.2-0.7,0.1c-0.2-0.1-0.4-0.2-0.5-0.4c-0.2-0.4-0.1-0.9,0.3-1.5
              c0.5-0.6,1.2-1.2,2.2-1.8c1.1-0.6,2-0.9,2.7-0.7c0.7,0.1,1.3,0.7,1.9,1.7L96.5,68.5z M93.8,68.1c-0.3,0.1-0.5,0.2-0.8,0.3
              s-0.4,0.2-0.6,0.3c-0.6,0.3-0.9,0.7-1.1,1c-0.2,0.4-0.2,0.7,0,1c0.2,0.3,0.4,0.5,0.7,0.5c0.3,0,0.6-0.1,1-0.3
              c0.3-0.2,0.6-0.4,0.9-0.7c0.2-0.3,0.5-0.6,0.6-1L93.8,68.1z"
          />
          <Path
            d="M101.8,58.6l1.6-0.9c0.3-0.2,0.6-0.3,0.9-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.5,0.1,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6l-1.6,0.9l2,3.5l1.5-0.9c0.3-0.2,0.6-0.3,0.9-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.6,0.1,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6l-4.2,2.4c-0.3,0.2-0.6,0.3-0.9,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.1-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6l0.8-0.5l-2-3.5l-0.8,0.5c-0.3,0.2-0.6,0.3-0.9,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.6-0.2-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6l0.8-0.5l-0.2-0.4c-0.6-1-0.7-1.8-0.5-2.6c0.3-0.7,1-1.4,2.2-2.1c0.6-0.4,1.1-0.6,1.5-0.6
              c0.4,0,0.7,0.1,0.9,0.4c0.1,0.2,0.2,0.4,0.1,0.6c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.1-0.4,0.2-0.7,0.3c-0.3,0.1-0.6,0.2-0.7,0.3
              c-0.5,0.3-0.7,0.6-0.8,0.9c-0.1,0.3,0.1,0.7,0.4,1.3L101.8,58.6z"
          />
          <Path
            d="M112.6,52.3l1.6-0.9c0.3-0.2,0.6-0.3,0.9-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.5,0.1,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6l-1.6,0.9l2,3.5l1.5-0.9c0.3-0.2,0.6-0.3,0.9-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.6,0.1,0.8
              s-0.3,0.4-0.6,0.6l-4.2,2.4c-0.3,0.2-0.6,0.3-0.9,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.1-0.8c0.1-0.2,0.3-0.4,0.6-0.6
              l0.8-0.5l-2-3.5l-0.8,0.5c-0.3,0.2-0.6,0.3-0.9,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.6-0.2-0.8c0.1-0.2,0.3-0.4,0.6-0.6
              l0.8-0.5l-0.2-0.4c-0.6-1-0.7-1.8-0.5-2.6c0.3-0.7,1-1.4,2.2-2.1c0.6-0.4,1.1-0.6,1.5-0.6c0.4,0,0.7,0.1,0.9,0.4
              c0.1,0.2,0.2,0.4,0.1,0.6c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.1-0.4,0.2-0.7,0.3c-0.3,0.1-0.6,0.2-0.7,0.3c-0.5,0.3-0.7,0.6-0.8,0.9
              c-0.1,0.3,0.1,0.7,0.4,1.3L112.6,52.3z"
          />
          <Path
            d="M126.9,50.9l1.6-0.9c0.3-0.2,0.6-0.3,0.8-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.6,0.2,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6l-5.1,3c-0.3,0.2-0.6,0.3-0.8,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.2-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6L125,52l-3.8-6.6l-0.8,0.5c-0.3,0.2-0.6,0.3-0.9,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.6-0.2-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6l2.3-1.3c0.1-0.1,0.3-0.1,0.4-0.1c0.1,0,0.2,0.1,0.3,0.2L126.9,50.9z"
          />
          <Path
            d="M134,45c0.5,0.5,1,0.8,1.5,0.8c0.5,0.1,1.1-0.1,1.7-0.5c0.6-0.4,1.2-0.9,1.6-1.5c0.4-0.7,0.7-1,0.8-1.1
              c0.2-0.1,0.4-0.1,0.6-0.1c0.2,0.1,0.4,0.2,0.5,0.4c0.3,0.5,0.2,1.1-0.3,1.8c-0.5,0.7-1.3,1.4-2.3,2c-1.2,0.7-2.4,0.9-3.6,0.7
              c-1.2-0.2-2.1-0.9-2.7-2c-0.6-1.1-0.7-2.2-0.4-3.3c0.4-1.1,1.2-2,2.4-2.8c1.1-0.6,2.2-0.8,3.3-0.6c1.1,0.2,1.9,0.8,2.4,1.7
              c0.2,0.3,0.2,0.5,0.1,0.7c-0.1,0.2-0.3,0.4-0.8,0.7L134,45z M137.4,41.4c-0.4-0.4-0.8-0.7-1.3-0.7c-0.5-0.1-1,0.1-1.6,0.4
              c-0.6,0.3-0.9,0.7-1.1,1.1c-0.2,0.4-0.2,0.9-0.1,1.5L137.4,41.4z"
          />
          <Path
            d="M92.6,88L91,88.9l3.3,5.7l1.3-0.7c0.3-0.2,0.6-0.3,0.8-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.6,0.2,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6L92,98.1c-0.3,0.2-0.6,0.3-0.8,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.6-0.2-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6l1.3-0.7L89,90L87.5,91l0.8,1.6l0.1,0.2c0.1,0.2,0.2,0.5,0.1,0.7c-0.1,0.2-0.2,0.4-0.4,0.5
              c-0.3,0.2-0.5,0.2-0.7,0.1c-0.2-0.1-0.4-0.3-0.6-0.6l0-0.1l-1.2-2.3c-0.2-0.5-0.3-0.8-0.3-0.9c0.1-0.2,0.3-0.3,0.6-0.5l6.5-3.8
              c0.3-0.2,0.6-0.3,0.7-0.2c0.2,0,0.4,0.3,0.7,0.7l1.4,2.2l0,0.1c0.2,0.3,0.3,0.6,0.2,0.8c0,0.2-0.2,0.4-0.5,0.6
              c-0.3,0.2-0.5,0.2-0.7,0.1s-0.4-0.3-0.6-0.6L92.6,88z"
          />
          <Path
            d="M105.2,88.3l1.6-0.9c0.3-0.2,0.6-0.3,0.9-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.6,0.1,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6l-5.1,3c-0.3,0.2-0.6,0.3-0.9,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.1-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6l1.6-0.9l-2.1-3.7l-0.9,0.5c-0.3,0.2-0.6,0.3-0.8,0.2c-0.2,0-0.4-0.2-0.6-0.5s-0.2-0.6-0.2-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6l2.3-1.3c0.1-0.1,0.3-0.1,0.4-0.1c0.1,0,0.2,0.1,0.3,0.2L105.2,88.3z M99.1,80.1
              c0.4-0.2,0.7-0.3,0.9-0.2c0.2,0.1,0.5,0.4,0.8,0.9c0.3,0.5,0.4,0.9,0.4,1.1c0,0.2-0.3,0.4-0.7,0.6c-0.4,0.2-0.7,0.3-0.9,0.3
              c-0.2-0.1-0.4-0.3-0.6-0.6c-0.4-0.6-0.6-1.1-0.5-1.3C98.5,80.6,98.7,80.4,99.1,80.1z"
          />
          <Path
            d="M114.4,76.4c-0.1-0.2,0-0.4,0-0.6c0.1-0.2,0.2-0.3,0.4-0.4c0.3-0.2,0.5-0.2,0.7-0.1c0.2,0.1,0.4,0.3,0.7,0.8
              l0.7,1.2c0.2,0.3,0.2,0.6,0.2,0.8c0,0.2-0.2,0.4-0.5,0.6c-0.2,0.1-0.4,0.2-0.5,0.1c-0.2,0-0.4-0.1-0.7-0.3
              c-0.4-0.2-0.8-0.3-1.2-0.3c-0.4,0-0.9,0.2-1.3,0.4c-0.6,0.3-1,0.8-1.1,1.4c-0.2,0.6-0.1,1.2,0.3,1.8c0.4,0.6,0.9,1,1.5,1.2
              c0.6,0.2,1.2,0,1.9-0.3c0.6-0.3,1.1-0.9,1.5-1.5c0.4-0.7,0.7-1,0.8-1.1c0.2-0.1,0.4-0.1,0.6-0.1c0.2,0.1,0.4,0.2,0.5,0.4
              c0.3,0.5,0.2,1.1-0.3,1.9c-0.5,0.8-1.3,1.5-2.2,2c-1.2,0.7-2.4,0.9-3.6,0.7c-1.2-0.2-2.1-0.9-2.7-2c-0.6-1.1-0.7-2.2-0.4-3.3
              c0.4-1.1,1.1-2,2.3-2.7c0.4-0.2,0.8-0.4,1.2-0.5C113.5,76.5,113.9,76.4,114.4,76.4z"
          />
          <Path
            d="M123.2,74.6l0.8-2.4c-0.2,0-0.3,0-0.4,0c-0.1-0.1-0.2-0.2-0.3-0.4c-0.2-0.3-0.2-0.6-0.2-0.8
              c0.1-0.2,0.3-0.4,0.6-0.6l1.7-1c0.3-0.2,0.6-0.3,0.8-0.2c0.2,0,0.4,0.2,0.6,0.5c0.1,0.2,0.2,0.4,0.2,0.6c0,0.1-0.2,0.3-0.4,0.5
              c-0.2,0.2-0.4,0.4-0.5,0.6c-0.1,0.2-0.2,0.5-0.3,0.9l-0.2,0.9l3.4,1.3l0.2-0.1c0.3-0.2,0.6-0.2,0.8-0.2c0.2,0.1,0.4,0.2,0.6,0.5
              c0.2,0.3,0.2,0.6,0.2,0.8c-0.1,0.2-0.3,0.4-0.6,0.6l-1.9,1.1c-0.3,0.2-0.6,0.3-0.8,0.2c-0.2,0-0.4-0.2-0.5-0.4
              c-0.1-0.2-0.1-0.4-0.1-0.5c0-0.2,0.1-0.3,0.3-0.5l-2.1-0.8l-0.4,1.4l0.9,1.6c0.1,0.2,0.2,0.3,0.1,0.5c0,0.1-0.1,0.2-0.3,0.3
              l-1.4,0.8c-0.3,0.2-0.6,0.3-0.8,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.1-0.7c0.1-0.2,0.2-0.4,0.5-0.6l0.1-0.1l-3.8-6.6
              l-0.1,0.1c-0.3,0.2-0.5,0.2-0.7,0.1c-0.2-0.1-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.1-0.8c0.1-0.2,0.3-0.4,0.6-0.6l1.4-0.8
              c0.2-0.1,0.3-0.1,0.4-0.1c0.1,0,0.2,0.1,0.3,0.3L123.2,74.6z"
          />
          <Path
            d="M133.9,69.9c0.5,0.5,1,0.8,1.5,0.8c0.5,0.1,1.1-0.1,1.7-0.5c0.6-0.4,1.2-0.9,1.6-1.5c0.4-0.7,0.7-1,0.8-1.1
              c0.2-0.1,0.4-0.1,0.6-0.1c0.2,0.1,0.4,0.2,0.5,0.4c0.3,0.5,0.2,1.1-0.3,1.8c-0.5,0.7-1.3,1.4-2.3,2c-1.2,0.7-2.4,0.9-3.6,0.7
              c-1.2-0.2-2.1-0.9-2.7-2c-0.6-1.1-0.7-2.2-0.4-3.3c0.4-1.1,1.2-2,2.4-2.8c1.1-0.6,2.2-0.8,3.3-0.6c1.1,0.2,1.9,0.8,2.4,1.7
              c0.2,0.3,0.2,0.5,0.1,0.7c-0.1,0.2-0.3,0.4-0.8,0.7L133.9,69.9z M137.3,66.3c-0.4-0.4-0.8-0.7-1.3-0.7c-0.5-0.1-1,0.1-1.6,0.4
              c-0.6,0.3-0.9,0.7-1.1,1.1c-0.2,0.4-0.2,0.9-0.1,1.5L137.3,66.3z"
          />
          <Path
            d="M144.2,59.2l2.3-1.3c0.3-0.2,0.6-0.3,0.9-0.2c0.2,0,0.4,0.2,0.6,0.5c0.2,0.3,0.2,0.6,0.1,0.8
              c-0.1,0.2-0.3,0.4-0.6,0.6l-2.3,1.3l1.1,1.9c0.3,0.5,0.6,0.9,0.9,1c0.3,0.1,0.6,0,1.1-0.2c0.4-0.2,0.8-0.6,1.2-1.1s0.7-0.9,0.9-1
              c0.2-0.1,0.4-0.1,0.7-0.1c0.2,0.1,0.4,0.2,0.6,0.5c0.2,0.4,0.1,0.9-0.4,1.7c-0.5,0.7-1.2,1.3-2.1,1.9c-0.5,0.3-1,0.5-1.5,0.6
              c-0.5,0.1-0.9,0.1-1.3-0.1c-0.3-0.1-0.5-0.3-0.8-0.5c-0.2-0.2-0.5-0.7-0.9-1.4l-0.1-0.2l-1.1-1.9l-0.7,0.4
              c-0.3,0.2-0.6,0.3-0.8,0.2c-0.2,0-0.4-0.2-0.6-0.5c-0.2-0.3-0.2-0.5-0.2-0.8c0.1-0.2,0.3-0.4,0.6-0.6l0.7-0.4l-1-1.8
              c-0.2-0.3-0.3-0.6-0.2-0.9c0.1-0.2,0.3-0.4,0.6-0.6c0.3-0.2,0.6-0.3,0.8-0.2c0.2,0.1,0.4,0.3,0.6,0.6L144.2,59.2z"
          />
          <Path
            d="M71,104.2l3.6-2.1c1-0.6,1.8-0.8,2.5-0.7c0.7,0.1,1.2,0.6,1.7,1.4c0.5,0.8,0.6,1.5,0.4,2.2
              c-0.2,0.6-0.8,1.2-1.8,1.8l-13,7.5c-1,0.6-1.8,0.8-2.5,0.7s-1.2-0.6-1.7-1.4c-0.5-0.8-0.6-1.6-0.4-2.2c0.2-0.6,0.8-1.2,1.8-1.8
              l4.1-2.4L54.9,88.7l-2.1,2.1c-0.3,0.3-0.6,0.6-0.8,0.7c-0.2,0.2-0.4,0.3-0.5,0.4c-0.6,0.3-1.2,0.4-1.7,0.2
              c-0.6-0.2-1-0.6-1.4-1.3c-0.3-0.5-0.4-1.1-0.2-1.6c0.2-0.6,0.6-1.2,1.2-1.8l4.6-4.7c0.4-0.4,0.7-0.7,1-0.9
              c0.3-0.2,0.5-0.4,0.7-0.5c0.6-0.3,1.1-0.4,1.5-0.2c0.4,0.2,0.9,0.7,1.3,1.4L71,104.2z"
          />
          <Path
            d="M194.3,86.7L57.8,165.5l-0.5-0.5c-3.2-3-7.5-4.5-11.9-4.3l-0.6,0l-33.6-58.1l0.3-0.5
              c2.4-3.7,3.3-8.2,2.3-12.5l-0.2-0.7l136.5-78.8l0.5,0.5c3.2,3.1,7.7,4.6,12.2,4.2l0.6,0l33.5,58l-0.3,0.5
              c-2.6,3.7-3.4,8.3-2.4,12.7L194.3,86.7z M58.1,163.2l134.2-77.5c-0.9-4.5,0-9.1,2.5-13l-32.3-56c-4.6,0.2-9.1-1.3-12.5-4.3
              L15.8,90c0.9,4.4,0,8.9-2.4,12.7l32.5,56.2C50.3,158.8,54.7,160.3,58.1,163.2z"
          />
          <Rect
            x="47.1"
            y="96.9"
            transform="matrix(0.866 -0.5 0.5 0.866 -34.0895 68.1118)"
            width="125.8"
            height="1.6"
          />
        </G>
      </Fragment>
    );
  }
}