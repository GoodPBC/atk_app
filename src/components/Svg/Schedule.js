import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {COLOR, DIMENSIONS} from "../../constants";

export class ScheduleSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.035, fill=COLOR.dark_grey
        } = this.props;
        return (
            <Svg width={width} height={height} fill={fill} version="1.1" id="Layer_1"
                 viewBox="0 0 13.4 15" style="enable-background:new 0 0 13.4 15;">
                <G id="Group_714" transform="translate(0 55.92)">
	            <G>
		            <G id="Group_484" transform="translate(0 -55.92)">
			            <Path id="Path_287" className="st0" d="M12.1,5H1.3V3.9h10.7L12.1,5z M12.1,13.7H1.3V6.1h10.7L12.1,13.7z M12.1,1.6h-0.8V0H9.1v1.6
				                H4.3V0H2.1v1.6H1.3C0.6,1.6,0,2.2,0,2.9v10.7C0,14.4,0.6,15,1.3,15h10.7c0.7,0,1.3-0.6,1.3-1.3V2.9C13.4,2.2,12.8,1.6,12.1,1.6"
                        />
                        <Path id="Path_288" className="st0" d="M4.3,9.3H2.1V7.1h2.1V9.3z"/>
                        <Path id="Path_289" className="st0" d="M7.8,9.3H5.6V7.1h2.1V9.3z"/>
                        <Path id="Path_290" className="st0" d="M11.3,9.3H9.1V7.1h2.1V9.3z"/>
                        <Path id="Path_291" className="st0" d="M4.3,12.6H2.1v-2.1h2.1V12.6z"/>
                        <Path id="Path_292" className="st0" d="M7.8,12.6H5.6v-2.1h2.1V12.6z"/>
                        <Path id="Path_293" className="st0" d="M11.3,12.6H9.1v-2.1h2.1V12.6z"/>
		            </G>
	            </G>
                </G>
            </Svg>


        )
    }
}
