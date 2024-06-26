import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';

function Success(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/images/item_1_a.png')}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <View style={styles.rating}>
            <Image source={require('../../../assets/icons/star_white.png')} />
            <Text style={[Gs.h5, Gs.textWhite]}>4.5/5</Text>
          </View>
          <View style={styles.booked}>
            <Text style={[Gs.h5, Gs.textWhite]}>Booked</Text>
          </View>
          <View style={styles.label}>
            <Text style={[Gs.h2, Gs.textWhite]}>Surija</Text>
            <Text style={Gs.textWhite}>Denpasar, Bali</Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={[Gs.h1, Gs.textBlack]}>Success Booking</Text>
        <Text style={[Gs.textCenter, Gs.textGrey]}>
          Your Space is ready to use for your growing business and life
        </Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Details')}>
        <Text style={[Gs.textWhite, Gs.h4]}>View Details</Text>
        <Image
          source={require('../../../assets/icons/arrow_right_white.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    backgroundColor: colors.white,
  },
  image: {
    width: 240,
    height: 320,
    ...Gs.cornerXL,
  },
  overlay: {
    position: 'absolute',
    ...Gs.cornerXL,
    backgroundColor: colors.transparentBlack,
    width: 240,
    height: 320,
  },
  rating: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 14,
    width: 60,
    height: 60,
    right: -30,
    top: 30,
    position: 'absolute',
  },
  booked: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 8,
    width: 100,
    height: 40,
    left: -50,
    bottom: 120,
    position: 'absolute',
  },
  label: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textContainer: {
    ...Gs.itemsCenter,
    paddingHorizontal: 76,
    marginVertical: 30,
  },
  icon: {
    marginLeft: 4,
  },
  detailButton: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
});

export default Success;
