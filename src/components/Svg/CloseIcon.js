import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {DIMENSIONS, COLOR} from '../../constants';

export class CloseSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height= DIMENSIONS.WINDOW_HEIGHT * 0.035, fill='#4BD1FF'
        } = this.props;
        return (
            <Svg width={width} height={height} fill={fill} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;">
                <Path id="Path_810" className="st0" d="M26,1.9L24.1,0L13,11.1L1.9,0L0,1.9L11.1,13L0,24.1L1.9,26L13,14.9L24.1,26l1.9-1.9L14.9,13
	L26,1.9z"/>
            </Svg>

        )
    }
}
