import React from 'react';
import Svg, {Polygon} from 'react-native-svg';
import {DIMENSIONS, COLOR} from '../../constants';

export class RightArrowSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height= DIMENSIONS.WINDOW_HEIGHT * 0.03, fill=COLOR.sky_button
        } = this.props;
        return (
            <Svg width={width} height={height} fill={fill} version="1.1" id="Layer_1"
                 viewBox="0 0 19.1 26.2" style="enable-background:new 0 0 19.1 26.2;">
                <Polygon className="st0"
                         points="6,0 3.9,2.1 13.4,11.6 0,11.6 0,14.6 13.4,14.6 3.9,24 6,26.2 19.1,13.1 "/>
            </Svg>
        )
    }
}
