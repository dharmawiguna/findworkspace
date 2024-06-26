import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';

function Details(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const slider = [
    require('../../../assets/images/item_2_a.png'),
    require('../../../assets/images/item_2_b.png'),
    require('../../../assets/images/item_2_c.png'),
  ];

  const renderSlider = () => {
    return (
      <FlatList
        data={slider}
        renderItem={({item}) => <SliderItem image={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
      />
    );
  };
  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View>
          <Text style={[Gs.textBlack, Gs.h1]}>Homemade Office</Text>
          <Text style={Gs.textGrey}>Denpasar</Text>
        </View>
        <View style={Gs.flexRow}>
          <Image source={require('../../../assets/icons/star_yellow.png')} />
          <Text style={[Gs.textBlack, Gs.h3]}>4.5</Text>
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={[Gs.textBlack, Gs.h3, styles.title]}>About</Text>
        <Text style={Gs.textGrey}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          culpa voluptates beatae sequi officiis eius harum optio sit velit,
          officia iusto nesciunt reiciendis veritatis. Autem pariatur cumque
          aperiam totam nihil.
        </Text>
      </View>
    );
  };

  const renderOwner = () => {
    return (
      <View style={styles.ownerContainer}>
        <Text style={[Gs.textBlack, Gs.h3, styles.title]}>Space Owner</Text>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            source={require('../../../assets/images/profile_2.png')}
            style={styles.ownerImage}
          />
          <View>
            <View style={[Gs.flexRow]}>
              <Text style={Gs.textGrey}>Dharma Wiguna</Text>
              <Image
                source={require('../../../assets/icons/verified_orange.png')}
                style={styles.iconOwner}
              />
            </View>
            <Text style={[Gs.font700, Gs.textBlack]}>@dharma</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookingButton = () => {
    return (
      <View style={styles.bookingButtonContainer}>
        <View>
          <Text style={[Gs.textPrimary, Gs.h1]}>$500</Text>
          <Text style={[Gs.textGrey]}>/day</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Booking');
            }}>
            <Text style={[Gs.textWhite, Gs.h3]}>Start Booking</Text>
            <Image
              source={require('../../../assets/icons/arrow_right_white.png')}
              style={styles.iconOwner}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Office Details"
        subtitle="Space available for today"
        showRightButton
      />
      <ScrollView nestedScrollEnabled>
        {renderSlider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {renderBookingButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderContainer: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  descriptionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 10,
  },
  ownerContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  ownerImage: {
    marginRight: 12,
  },
  iconOwner: {
    marginLeft: 4,
  },
  bookingButtonContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    padding: 24,
  },
  button: {
    ...Gs.flexRow,
    ...Gs.cornerMD,
    paddingHorizontal: 22,
    paddingVertical: 14,
    backgroundColor: colors.primary,
  },
});

export default Details;
