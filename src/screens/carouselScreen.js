import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import data from '../data/data';
import CarouselCardItem, {SLIDER_WIDTH} from '../components/carouselCard';
import Index from '../components/ImageComponent';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

const CarouselScreen = ({navigation}) => {
  const isCarousel = React.useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View>
        <Index />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={index => setActiveSlide(index)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={{backgroundColor: 'white'}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'black',
          }}
          inactiveDotStyle={{}}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={{alignItems: 'center', paddingVertical: hp(2)}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fba919',
            width: '80%',
            marginBottom: wp(3),
            alignItems: 'center',
            height: hp(4),
            justifyContent: 'center',
          }}
          onPress={() =>
            navigation.navigate('AuthScreen', {
              isLogin: true,
            })
          }>
          <Text style={{fontSize: 18}}>{'I already have an account'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#d4d4dc',
            width: '80%',
            alignItems: 'center',
            height: hp(4),
            justifyContent: 'center',
          }}
          onPress={() =>
            navigation.navigate('AuthScreen', {
              isLogin: false,
            })
          }>
          <Text style={{fontSize: 18}}>{"I don't have an account"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarouselScreen;
