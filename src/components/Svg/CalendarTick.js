import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {COLOR, DIMENSIONS} from '../../constants';

export class CalendarTickSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.20 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.15, fill=COLOR.dark_grey
        } = this.props;
        return (
            <Svg width={width} fill={fill} height={height} viewBox="0 0 71.835 80.342">
                <G id="Group_1331" data-name="Group 1331" transform="translate(-5.785 -6.21)">
                    <G id="Group_1329" data-name="Group 1329" transform="translate(5.785 6.21)">
                        <Path id="Path_852" data-name="Path 852" d="M70.437,14.717H66.126V6.21H54.632v8.507H28.773V6.21H17.279v8.507H12.969A7.2,7.2,0,0,0,5.785,21.9V79.368a7.2,7.2,0,0,0,7.184,7.184H70.437a7.2,7.2,0,0,0,7.184-7.184V21.9A7.2,7.2,0,0,0,70.437,14.717Zm0,64.652H12.969V38.8H70.437Zm0-46.565H12.969V27.075H70.437Z" transform="translate(-5.785 -6.21)" fill="#555"/>
                    </G>
                    <G id="Group_1330" data-name="Group 1330" transform="translate(25.031 45.509)">
                        <Path id="Path_853" data-name="Path 853" d="M21.4,47.912,12.33,38.839l4.063-4.063L21.4,39.784,41.611,19.575l4.063,4.063Z" transform="translate(-12.33 -19.575)" fill="#555"/>
                    </G>
                </G>
            </Svg>
        )
    }
}
