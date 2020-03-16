import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {COLOR, DIMENSIONS} from '../../constants';

export class HomeSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.035, fill=COLOR.dark_grey
        } = this.props;
        return (
            <Svg width={width} height={height} fill={COLOR.dark_grey} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 15.8 16.5" style="enable-background:new 0 0 15.8 16.5;">
                <G id="Group_1300" transform="translate(0.357 1.685)">
                    <Path id="Path_837" className="st0" d="M12.2,13.1H10v-2.5c0-1.3-1-2.5-2.4-2.5s-2.5,1-2.5,2.4c0,0,0,0.1,0,0.1v2.5H2.9V8.1H1.2v6.6
		                h12.8V8.1h-1.7V13.1z"/>
                    <Path id="Path_838" className="st0" d="M7.7-1.7l-8,8l1.2,1.2l6.8-6.8l6.6,6.6l1.2-1.2L7.7-1.7z"/>
                </G>
            </Svg>
        )
    }
}
