import React, {Fragment} from 'react';
import {G, Polygon} from 'react-native-svg';
import {CheckBoxEmptySvg} from './CheckBoxEmpty';
import {COLOR} from '../../constants';

export class CheckBoxAddSvg extends CheckBoxEmptySvg {
  static defaultProps = {
    ...super.defaultProps,
    fill: COLOR.white,
  };

  renderContents() {
    return (
      <Fragment>
        {super.renderContents()}
        <G transform="translate(299.04 301.797)">
          <G transform="translate(0 0)">
            <G>
              <Polygon points="-291.3,-285.2 -296.7,-290.6 -295.3,-292 -291.3,-288.1 -282.7,-296.7 -281.3,-295.3" />
            </G>
          </G>
        </G>
      </Fragment>
    );
  }
}
