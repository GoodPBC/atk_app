import React from 'react';

import Svg, {Path, G} from 'react-native-svg';
import {COLOR, DIMENSIONS} from '../../constants';

export class ScanWhiteSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.04, fill=COLOR.white
        } = this.props;
        return (
            <Svg width={width} height={height} fill={fill} version="1.1" id="Layer_1"
                 viewBox="0 0 19.9 15.7" style="enable-background:new 0 0 19.9 15.7;">
                <G id="Group_1169" transform="translate(0 -4.489)">
	                <G id="Group_1170" transform="translate(0 6.636)">
		                <Path id="Path_738" className="st0" d="M19.7,5.4C19.5,5.1,15.3,0,10,0S0.4,5.1,0.3,5.4L0,5.7L0.3,6c0.2,0.2,4.4,5.4,9.7,5.4
			                    s9.5-5.1,9.7-5.4l0.3-0.3L19.7,5.4z M10,10.3c-4.1,0-7.6-3.5-8.6-4.7c1.7-1.9,3.9-3.4,6.4-4.3c-2.1,1.3-2.8,4-1.5,6s4,2.8,6,1.5
			                    c1.3-0.8,2.1-2.2,2.1-3.8c0-0.1,0-0.3,0-0.4l-0.9,0.1c0,0.1,0,0.2,0,0.3c0,1.9-1.6,3.5-3.5,3.5S6.4,7.1,6.4,5.2S8,1.6,9.9,1.6
			                    c1.3,0,2.6,0.7,3.2,1.9l0.8-0.4c-0.4-0.7-0.9-1.3-1.6-1.8c2.4,0.9,4.6,2.4,6.4,4.3C17.6,6.8,14.1,10.3,10,10.3z"/>
                        <Path id="Path_739" className="st0" d="M10.4,5.1L12.3,4c-0.6-1.3-2.2-1.8-3.5-1.2S7,5,7.6,6.3s2.2,1.8,3.5,1.2
			                    c0.9-0.4,1.5-1.4,1.5-2.4c0-0.1,0-0.2,0-0.2L10.4,5.1z"/>
	                </G>
                    <G id="Group_1171" transform="translate(0 4.489)">
		                <Path id="Path_740" className="st0" d="M1.1,3.3V1.1h2.2V0H0v3.3H1.1z"/>
                        <Path id="Path_741" className="st0" d="M16.6,1.1h2.2v2.2h1.1V0h-3.3V1.1z"/>
	                </G>
                    <G id="Group_1172" transform="translate(0 16.831)">
		                <Path id="Path_742" className="st0" d="M18.8,0v2.2h-2.2v1.1h3.3V0H18.8z"/>
                        <Path id="Path_743" className="st0" d="M3.3,2.2H1.1V0H0v3.3h3.3V2.2z"/>
	                </G>
                </G>
            </Svg>


        )
    }
}
