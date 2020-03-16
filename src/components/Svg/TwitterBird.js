import React, {Fragment} from 'react';
import {Path, G, Defs, ClipPath} from 'react-native-svg';
import {DIMENSIONS} from '../../constants';
import Svg from './Svg';

export class TwitterBirdSvg extends Svg {
  static get viewBox() {
    return [0, 0, 96, 96];
  }

  static defaultProps = {
    ...super.defaultProps,
    width: DIMENSIONS.WINDOW_WIDTH,
    height: DIMENSIONS.WINDOW_HEIGHT * 0.18,
  };

  renderContents() {
    return (
      <Fragment>
        <Defs>
          <ClipPath id="clip-path">
            <Path d="M0-95H96V1H0Z" transform="translate(0 95)" fill="none" />
          </ClipPath>
        </Defs>
        <G transform="translate(0 95)">
          <G transform="translate(0 -95)" clip-path="url(#clip-path)">
            <G>
              <Path
                d="M1,.5a48,48,0,0,1-48,48A48,48,0,0,1-95,.5a48,48,0,0,1,48-48A48,48,0,0,1,1,.5"
                transform="translate(95 47.5)"
                fill="#1da0f1"
              />
            </G>
            <G transform="translate(20.769 26.582)">
              <Path
                d="M.2.5C22.663.5,34.954-18.114,34.954-34.253c0-.532,0-1.058-.035-1.579a24.854,24.854,0,0,0,6.1-6.327A24.3,24.3,0,0,1,34-40.237a12.257,12.257,0,0,0,5.368-6.755,24.563,24.563,0,0,1-7.754,2.965,12.237,12.237,0,0,0-17.288-.532A12.237,12.237,0,0,0,10.79-32.887,34.686,34.686,0,0,1-14.384-45.65,12.227,12.227,0,0,0-10.6-29.342a12.071,12.071,0,0,1-5.544-1.531v.155a12.218,12.218,0,0,0,9.8,11.975,12.223,12.223,0,0,1-5.517.213A12.229,12.229,0,0,0-.45-10.048,24.493,24.493,0,0,1-15.622-4.809a25.189,25.189,0,0,1-2.905-.177A34.541,34.541,0,0,0,.2.49"
                transform="translate(18.527 47.877)"
                fill="#fff"
              />
            </G>
          </G>
        </G>
      </Fragment>
    );
  }
}
