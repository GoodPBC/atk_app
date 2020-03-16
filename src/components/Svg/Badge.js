import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {DIMENSIONS} from '../../constants';

export class BadgeSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height= DIMENSIONS.WINDOW_HEIGHT * 0.035,
        } = this.props;
        return (
            <Svg id="Group_1293" data-name="Group 1293" width={width} height={height} viewBox="0 0 22.013 18.092">
                <Path id="Path_823" data-name="Path 823" d="M18.117,99.325H12.9V95.981H7.115v3.344H1.9a2.9,2.9,0,0,0-2.9,2.9v8.954a2.9,2.9,0,0,0,2.9,2.9h16.22a2.9,2.9,0,0,0,2.9-2.9v-8.954A2.9,2.9,0,0,0,18.117,99.325ZM8.274,97.14h3.465v4.313H8.274Zm11.581,14.036a1.74,1.74,0,0,1-1.738,1.738H1.9a1.74,1.74,0,0,1-1.738-1.738v-8.954A1.74,1.74,0,0,1,1.9,100.484H7.115v2.128H12.9v-2.128h5.22a1.74,1.74,0,0,1,1.738,1.738Z" transform="translate(1 -95.981)" fill="#555"/>
                <Path id="Path_824" data-name="Path 824" d="M4.761,116.942H11.7V110H4.761Z" transform="translate(-1.424 -101.88)" fill="#555"/>
                <Rect id="Rectangle_411" data-name="Rectangle 411" width="5.496" height="1.159" transform="translate(13.318 8.124)" fill="#555"/>
                <Rect id="Rectangle_412" data-name="Rectangle 412" width="5.496" height="1.159" transform="translate(13.318 11.013)" fill="#555"/>
                <Rect id="Rectangle_413" data-name="Rectangle 413" width="5.496" height="1.159" transform="translate(13.318 13.903)" fill="#555"/>
            </Svg>


        )
    }
}
