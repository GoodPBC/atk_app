import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {DIMENSIONS} from '../../constants';

export class TicketSvg extends React.Component {
    render() {
        const {
            width= DIMENSIONS.WINDOW_WIDTH * 0.08 ,height=DIMENSIONS.WINDOW_HEIGHT * 0.035
        } = this.props;
        return (
            <Svg width={width} height={height} viewBox="0 0 23.172 12.983">
                <G id="Group_1382" data-name="Group 1382" transform="translate(-188 -182)">
                    <Path id="Path_826" data-name="Path 826" d="M12.371,114.942a1.326,1.326,0,0,0,1.327,1.327v1.09a1.132,1.132,0,0,0,0,2.263v1.306a1.132,1.132,0,0,0,0,2.263v1.09a1.327,1.327,0,0,0-1.327,1.327h-18.2a1.327,1.327,0,0,0-1.327-1.327v-1.09a1.132,1.132,0,0,0,1.132-1.131,1.132,1.132,0,0,0-1.132-1.132v-1.306a1.132,1.132,0,0,0,1.132-1.132,1.132,1.132,0,0,0-1.132-1.131v-1.09a1.326,1.326,0,0,0,1.327-1.327h18.2m1.159-1.159H-6.989v1.159a.168.168,0,0,1-.168.168H-8.316v10.33h1.159a.168.168,0,0,1,.168.168v1.159H13.529v-1.159a.168.168,0,0,1,.168-.168h1.159V115.11H13.7a.168.168,0,0,1-.168-.168v-1.159Z" transform="translate(196.316 68.217)" fill="#555"/>
                    <G id="Group_1294" data-name="Group 1294" transform="translate(192.39 185.076)">
                        <Path id="Path_827" data-name="Path 827" d="M13.654,125.925H-.738v-6.832H13.654ZM.3,124.892H12.621v-4.766H.3Z" transform="translate(0.738 -119.093)" fill="#555"/>
                    </G>
                </G>
            </Svg>
        )
    }
}
