import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import {Gs} from '../../../assets/styles/GlobalStyle';
import CardDetail from '../../components/CardDetail';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';

function Booking(): React.JSX.Element {
  const inputs = [
    {
      label: 'Total Days',
      placeholder: 'Total Days',
      icon: require('../../../assets/icons/days.png'),
    },
    {
      label: 'Date Start At',
      placeholder: 'Date Start At',
      icon: require('../../../assets/icons/calendar.png'),
    },
    {
      label: 'Complete Name',
      placeholder: 'Complete Name',
      icon: require('../../../assets/icons/user.png'),
    },
    {
      label: 'Phone Number',
      placeholder: 'Phone Number',
      icon: require('../../../assets/icons/phone.png'),
    },
  ];

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderBookingDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.titleSection}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderBookingInformation = () => {
    return (
      <View style={styles.section}>
        <Text style={[Gs.h3, Gs.textBlack]}>Booking Information</Text>
        <Text style={Gs.textGrey}>
          Lorem ipsum dolor sit amet, consectetur.
        </Text>
        {inputs.map((item, index) => {
          return (
            <InputText
              key={index}
              label={item.label}
              placeholder={item.placeholder}
              icon={item.icon}
            />
          );
        })}
      </View>
    );
  };

  const renderProceedPayment = () => {
    return (
      <View style={styles.proceedSection}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Checkout')}>
          <Text style={[Gs.h4, Gs.textWhite]}>Proceed To Payment</Text>
          <Image
            source={require('../../../assets/icons/arrow_right_white.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.termsConditionButton}>
          <Text>Read Terms & All Condition</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Booking" subtitle="Space available for today" />
      <ScrollView nestedScrollEnabled>
        {renderBookingDetail()}
        {renderBookingInformation()}
      </ScrollView>
      {renderProceedPayment()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  proceedSection: {
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  titleSection: {
    ...Gs.h3,
    ...Gs.textBlack,
    marginBottom: 12,
  },
  proceedButton: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
  icon: {
    marginLeft: 4,
  },
  termsConditionButton: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    padding: 14,
  },
});

export default Booking;
