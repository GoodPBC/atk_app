import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {COLOR, DIMENSIONS} from '../../constants';

export class SettingsSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.12 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.03
        } = this.props;
        return (
            <Svg width={width} height={height} fill={COLOR.sky_button} version="1.1" id="Group_692"
                 viewBox="0 0 20 20">
                <G>
                    <G id="Group_691">
                        <G id="Group_690" transform="translate(0 0)">
                            <Path id="Path_344" className="st0" d="M10,15.6c-3.1,0-5.6-2.5-5.6-5.6S6.9,4.4,10,4.4s5.6,2.5,5.6,5.6S13.1,15.6,10,15.6 M18.4,10
                                c0-0.4,0-0.8-0.1-1.2L20,7.3c-0.2-0.9-0.6-1.7-1-2.4L16.7,5c-0.5-0.6-1-1.2-1.7-1.7L15.2,1c-0.8-0.4-1.6-0.8-2.4-1l-1.5,1.7
                                c-0.4-0.1-0.8-0.1-1.2-0.1c-0.4,0-0.8,0-1.2,0.1L7.3,0C6.4,0.2,5.6,0.6,4.8,1L5,3.3C4.3,3.8,3.8,4.3,3.3,5L1,4.8
                                C0.6,5.6,0.2,6.4,0,7.3l1.7,1.5C1.6,9.2,1.6,9.6,1.6,10c0,0.4,0,0.8,0.1,1.2L0,12.7c0.2,0.9,0.6,1.7,1,2.4L3.3,15
                                c0.5,0.6,1,1.2,1.7,1.7L4.8,19c0.8,0.4,1.6,0.8,2.4,1l1.5-1.7c0.4,0.1,0.8,0.1,1.2,0.1c0.4,0,0.8,0,1.2-0.1l1.5,1.7
                                c0.9-0.2,1.7-0.6,2.4-1L15,16.7c0.6-0.5,1.2-1,1.7-1.7l2.3,0.1c0.4-0.8,0.8-1.6,1-2.4l-1.7-1.5C18.4,10.8,18.4,10.4,18.4,10"/>
                        </G>
                    </G>
                </G>
            </Svg>


        )
    }
}
