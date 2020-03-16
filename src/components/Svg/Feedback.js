import React, {Fragment} from 'react';
import {Path} from 'react-native-svg';
import Svg from './Svg';

export class FeedbackSvg extends Svg {
  static get viewBox() {
    return [0, 0, 25, 27.8];
  }

  renderContents() {
    return (
      <Fragment>
        <Path
          d="M6.1,27.8v-6.3H5.3c-2.9,0-5.2-2.3-5.3-5.2c0,0,0,0,0-0.1V5.1C0,2.3,2.4,0,5.3,0c0,0,0,0,0,0
            h14.5C22.7,0,25,2.3,25,5.2c0,0,0,0,0,0v11.1c0,2.9-2.4,5.2-5.3,5.2h-7.2L6.1,27.8z M5.3,1.4C3.2,1.4,1.4,3,1.4,5.1c0,0,0,0,0,0.1
            v11.1c0,2.1,1.8,3.8,3.9,3.8h2.3v4.4l4.5-4.4h7.7c2.1,0,3.9-1.7,3.9-3.8V5.2c0-2.1-1.8-3.8-3.9-3.8L5.3,1.4z"
        />
        <Path d="M12.5,14.9l-4.4,2.3L9,12.3L5.4,8.8l4.9-0.7l2.2-4.4l2.2,4.4l4.9,0.7L16,12.3l0.8,4.9L12.5,14.9z" />
      </Fragment>
    );
  }
}
