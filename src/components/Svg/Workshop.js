import React from 'react';

import Svg, {
    Path, G,Rect,
} from 'react-native-svg';
import {COLOR, DIMENSIONS} from "../../constants";

export class WorkshopSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.035
        } = this.props;
        return (
            <Svg id="Group_1292" data-name="Group 1292" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15.324 22.934">
                <Path id="Path_821" data-name="Path 821" d="M10.992,17.213V7.745a3.577,3.577,0,0,0,1.015-.7,3.62,3.62,0,0,0-3.9-5.926l2.35,2.35L8.43,5.5,6.08,3.151a3.62,3.62,0,0,0,.8,3.895,3.584,3.584,0,0,0,1.017.7v9.467A3.611,3.611,0,0,0,8.011,23.8V20.476h2.872V23.8a3.611,3.611,0,0,0,.109-6.586Z" transform="translate(-5.825 -0.865)" fill="#555"/>
                <G id="Group_1291" data-name="Group 1291" transform="translate(10.177 0.598)">
                    <G id="Group_1289" data-name="Group 1289">
                        <Path id="Path_822" data-name="Path 822" d="M26.318,23.505H21.171V15.9h.979V6.941l-.526-1.358,1.137-3.817h1.968l1.137,3.817-.527,1.358V15.9h.979ZM22.5,22.179h2.495V17.227h-.979V6.693l.453-1.166-.721-2.418-.721,2.418.452,1.166V17.227H22.5Z" transform="translate(-21.171 -1.766)" fill="#555"/>
                    </G>
                    <G id="Group_1290" data-name="Group 1290" transform="translate(1.91 16.696)">
                        <Rect id="Rectangle_410" data-name="Rectangle 410" width="1.326" height="2.757" fill="#555"/>
                    </G>
                </G>
            </Svg>


        )
    }
}
