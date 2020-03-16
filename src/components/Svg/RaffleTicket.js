import React from 'react';
import Svg, {Path, G, Rect} from 'react-native-svg';
import {DIMENSIONS} from '../../constants';

export class RaffleTicketSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.06 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.03
        } = this.props;
        return (
            <Svg width={width} height={height} viewBox="0 0 21.824 11.163">
                <Path id="Path_844" data-name="Path 844" d="M293.5,53.453V51.74a1.924,1.924,0,0,1-1.924-1.925H273.6a1.924,1.924,0,0,1-1.924,1.925v1.713a1.924,1.924,0,0,1,0,3.849v1.713a1.924,1.924,0,0,1,1.924,1.925c0,.012,0,.025,0,.038h17.984c0-.013,0-.026,0-.038a1.924,1.924,0,0,1,1.924-1.925V57.3a1.924,1.924,0,0,1,0-3.849Zm-4.123,5.506H275.8V51.833h13.577Z" transform="translate(-271.681 -49.815)" fill="#555"/>
                <Rect id="Rectangle_506" data-name="Rectangle 506" width="11.152" height="4.701" transform="translate(5.336 3.231)" fill="#555"/>
            </Svg>
        )
    }
}
