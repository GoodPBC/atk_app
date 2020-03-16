import {Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const DIMENSIONS = {
    WINDOW_WIDTH : Dimensions.get('window').width,
    WINDOW_HEIGHT : Dimensions.get('window').height
};

export const FONT_SIZE = {
    // F10: hp('1.5%'),
    // F12: hp('1.8%'),
    // F14: hp('2.1%'),
    // F16: hp('2.4%'),
    // F18: hp('2.7%'),
    // F20: hp('3%'),
    // F21: hp('3.15%'),
    // F24: hp('3.6%'),
    // F25: hp('3.75%'),
    // F26 :hp('3.9%'),
    // F28: hp('4.2%'),
    // F30: hp('4.5%'),

    F10: hp('1.5%'),
    F12: hp('1.7%'),
    F14: hp('1.8%'),
    F16: hp('2.1%'),
    F18: hp('2.5%'),
    F20: hp('2.7%'),
    F21: hp('2.8%'),
    F24: hp('3%'),
    F25: hp('3.1%'),
    F26 :hp('3.2%'),
    F28: hp('3.5%'),
    F30: hp('3.7%'),


}
