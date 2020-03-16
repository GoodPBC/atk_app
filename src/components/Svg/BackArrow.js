import React from 'react';
import Svg, {Polygon} from 'react-native-svg';
import {DIMENSIONS, COLOR} from '../../constants';

export class BackArrowSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height= DIMENSIONS.WINDOW_HEIGHT * 0.035, fill=COLOR.sky_button
        } = this.props;
        return (
            <Svg width={width} height={height} fill={fill} version="1.1" id="Layer_1"
                 viewBox="0 0 19.1 26.2" style="enable-background:new 0 0 19.1 26.2;">

                <Polygon className="st0"
                         points="19.1,11.6 5.7,11.6 15.2,2.1 13.1,0 0,13.1 13.1,26.2 15.2,24 5.7,14.6 19.1,14.6 "/>
            </Svg>
        )
    }
}
