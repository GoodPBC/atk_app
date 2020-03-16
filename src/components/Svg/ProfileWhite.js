import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {COLOR, DIMENSIONS} from '../../constants';

export class ProfileWhiteSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.035, fill=COLOR.white
        } = this.props;
        return (
            <Svg width={width} height={height} fill={fill} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 13.2 15" style="enable-background:new 0 0 13.2 15;">
                <G>
                    <Path className="st0" d="M6.6,1.4c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3C4.3,2.4,5.3,1.4,6.6,1.4 M6.6,0
		                        c-2,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7C10.3,1.6,8.6,0,6.6,0L6.6,0z"/>
                    <Path className="st0" d="M6.6,9.6c1.6,0,4.5,1.2,5,2.3c0,0,0.2,0.4,0.2,1.7H1.4c0-1.3,0.2-1.7,0.2-1.7C2.1,10.8,5,9.6,6.6,9.6 M6.6,8.2
		                        c-1.9,0-5.4,1.4-6.2,3.1C0,12.1,0,13.5,0,15h13.1c0.1-1.5,0-2.9-0.3-3.7C12,9.6,8.5,8.2,6.6,8.2L6.6,8.2z"/>
                </G>
            </Svg>
        )
    }
}
