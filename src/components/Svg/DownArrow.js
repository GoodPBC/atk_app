import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {DIMENSIONS, COLOR} from '../../constants';

export class DownArrowSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.05 ,height= DIMENSIONS.WINDOW_HEIGHT * 0.025, fill="#555"
        } = this.props;
        return (
            <Svg width={width} height={height} viewBox="0 0 15.695 8.687">
                <Path id="Path_944" data-name="Path 944" d="M7.848,0,0,7.214,1.354,8.687,7.848,2.716l6.493,5.971,1.354-1.473Z" transform="translate(15.695 8.687) rotate(180)" fill={fill}/>
            </Svg>
        )
    }
}
