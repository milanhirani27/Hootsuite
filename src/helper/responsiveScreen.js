// packages
import {Dimensions, PixelRatio, Platform} from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight =
  (Platform.OS === 'iOS' && Dimensions.get('window').height) ||
  Dimensions.get('window').height - 35;

const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export {widthPercentageToDP, heightPercentageToDP};
