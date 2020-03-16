import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {COLOR, DIMENSIONS} from '../../constants';

export class CollectionSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.035, fill=COLOR.dark_grey
        } = this.props;
        return (
            <Svg width={width} height={height} fill={fill} version="1.1" id="Layer_1"
                 viewBox="0 0 17.3 13.9" style="enable-background:new 0 0 17.3 13.9;" >
                <G id="Group_1174" transform="translate(0 -4.759)">
	                <Path id="Path_749" className="st0" d="M0,16.4v2.3h2.6C2.4,17.4,1.3,16.4,0,16.4z"/>
                    <Path id="Path_750" className="st0" d="M14.8,18.7h2.6v-2.3C16,16.4,14.9,17.4,14.8,18.7z"/>
                    <Path id="Path_751" className="st0" d="M14.9,4.8h-0.6c0.5,0.8,0.8,1.8,0.8,2.8v2.3h-1V7.5c0.1-1.1-0.4-2.1-1.3-2.8H4.5
                            C3.6,5.4,3.1,6.4,3.2,7.5v2.3h-1V7.5c0-1,0.3-1.9,0.8-2.8H2.4C1.1,4.8,0,5.8,0,7.2c0,0,0,0,0,0v2.6h6V8.7h5.4v1.1h6V7.2
                            C17.3,5.8,16.3,4.8,14.9,4.8z"/>
                    <Path id="Path_752" className="st0" d="M9.9,10.7c0-0.7-0.5-1.2-1.2-1.2C8,9.5,7.5,10,7.5,10.7c0,0.4,0.2,0.8,0.5,1l-0.3,1.2h2
		                    l-0.3-1.2C9.7,11.4,9.9,11.1,9.9,10.7z"/>
                    <Path id="Path_753" className="st0" d="M11.4,11.6v1.2l-1.2,1.2h-3L6,12.8v-1.7H0v4.3c1.9,0,3.4,1.4,3.5,3.3h10.2
		                    c0.2-1.8,1.7-3.3,3.5-3.3v-3.8L11.4,11.6z"/>
                </G>
            </Svg>
        )
    }
}
