import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLOR, DIMENSIONS} from '../../constants';

export class LocationSvg extends React.Component {
    render() {
        const {height = DIMENSIONS.WINDOW_HEIGHT * 0.15, width = DIMENSIONS.WINDOW_WIDTH * 0.20, fill = COLOR.dark_grey} = this.props;
        return (
            <Svg width={width} height={height} fill={fill} viewBox="0 0 47 79.022">
                <Path id="Path_851" data-name="Path 851" d="M31.413,1.378a23.5,23.5,0,0,0-23.5,23.5c0,12.979,23.5,55.522,23.5,55.522s23.5-42.543,23.5-55.522A23.5,23.5,0,0,0,31.413,1.378Zm0,35.885a12,12,0,1,1,12-12A12,12,0,0,1,31.413,37.263Z" transform="translate(-7.913 -1.378)" fill="#555"/>
            </Svg>
        )
    }
}
