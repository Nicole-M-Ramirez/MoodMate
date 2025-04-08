import {Dimensions, PixelRatio} from 'react-native';

export const colors = {
     aquagreen_1 : '#75c9bc',
     greypurple_2: '#a1a1c5',
     limegreen_3: '#93b875',
     grey_4: '#808080',
     purple_5: '#764170',
     skyblue_6: '#92c6e9',
     ligthgrey_7: '#dfdace',
     yellow_8: '#f8ed9d',
     deepgreen_9: '#1d4640',
     pink_10: '#e387a8',
     forestgreen_11: '#32827e',
     brigthgreen_12: '#6fb353',
     green_13: '#305e47'
}

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

export const dimensions = {
homeHeight           : screenHeight * .07,
headerTopMargin      : screenHeight * .09,
headerHeight         : screenHeight * .08,
bodyTopMarginCal     : screenHeight * .108,
bodyTopMargin        : screenHeight * .178, 
bodyHeight           : screenHeight * .622,
separator            : screenHeight * .008,
footerTopMargin      : screenHeight * .8,
footerHeight         : screenHeight * .1,
emergencyTopMargin      : screenHeight * .9,
emergencyHeight      : screenHeight * .1,

leftMargin           : screenWidth * .5 - screenHeight * .206,
buttonWidth          : screenHeight * .202,
leftMarginRightCol   : screenHeight * .21,

buttonHeight         : screenHeight * .202,
shortButtonHeight    : screenHeight * .101,
topSubtitle          : screenHeight * .8,
subtitleTop          : screenHeight * 0.8,
emergencyTop         : screenHeight * 0.8,
bodyWidth            : screenHeight * 0.412,

separatorWidth       : screenHeight * .008,
//leftMargin           : (screenWidth / 2) - (screenHeight * .206),

headerTopTextMargin  : screenHeight * .014,
dayWidth :  (screenHeight * 0.412) / 7.0,
dayHeight : (screenHeight * .570) / 6,

}
