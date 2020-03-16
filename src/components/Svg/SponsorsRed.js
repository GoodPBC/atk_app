import React from 'react';
import Svg, {Path, G,Rect} from 'react-native-svg';
import {DIMENSIONS, COLOR} from '../../constants';

export class SponsorsRedSvg extends React.Component {
    render() {
        const {
            width= 65 ,height=65, fill=COLOR.dark_grey
        } = this.props;
        return (
            <Svg width={width} height={height} viewBox="0 0 30.1 20.7">
                <G id="Group_1334" data-name="Group 1334" transform="translate(0)">
                    <Rect id="Rectangle_515" data-name="Rectangle 515" width="30.1" height="2.1" transform="translate(0 18.6)" fill="#c03"/>
                    <Path id="Path_855" data-name="Path 855" d="M30.1,0,22.2,8,15,0,8,8,0,0V14.8H30.1Z" fill="#c03"/>
                </G>
            </Svg>


        )
    }
}
