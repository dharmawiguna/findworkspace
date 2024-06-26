import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../../assets/styles/Colors';
import CardDetail from '../../components/CardDetail';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';

function Checkout(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const checkoutData = [
    {
      label: 'Price per day',
      value: '$500',
      isBold: true,
    },
    {
      label: 'Total day',
      value: '18',
      isBold: false,
    },
    {
      label: 'Start Date',
      value: '26 June 2024',
      isBold: false,
    },
    {
      label: 'End Date',
      value: '30 June 2024',
      isBold: false,
    },
    {
      label: 'Tax 15%',
      value: '$800',
      isBold: true,
    },
    {
      label: 'Insurance',
      value: '$20,000',
      isBold: true,
    },
    {
      label: 'Grand Total',
      value: '$21,300',
      isBold: true,
      isPrimary: true,
    },
  ];

  const borderBottom = {
    borderBottomWidth: 1,
    borderColor: colors.greyContainer,
  };

  const renderCheckoutDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.titleSection}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderCheckoutData = () => {
    return (
      <View style={styles.section}>
        {checkoutData.map((item, index) => {
          const isLast = index === checkoutData?.length - 1;
          return (
            <View
              key={index}
              style={[styles.checkoutItem, !isLast && borderBottom]}>
              <Text style={[Gs.textBlack]}>{item.label}</Text>
              <Text
                style={[
                  Gs.textBlack,
                  item.isBold && Gs.font700,
                  item.isPrimary && Gs.textPrimary,
                ]}>
                {item.value}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.titleSection}>Payment</Text>
        <View style={styles.paymentContainer}>
          <TouchableOpacity style={styles.paymentButton}>
            <Image source={require('../../../assets/icons/wallet.png')} />
            <Text style={[Gs.h5, Gs.textBlack]}>My Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <Image source={require('../../../assets/icons/mastercard.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderPayNow = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Success')}>
          <Text style={[Gs.textWhite, Gs.h4]}>Pay Now</Text>
          <Image
            source={require('../../../assets/icons/pay.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Checkout" subtitle="Ready to start working" />
      <View style={styles.content}>
        <ScrollView nestedScrollEnabled>
          {renderCheckoutDetail()}
          {renderCheckoutData()}
          {renderPaymentMethod()}
        </ScrollView>
        {renderPayNow()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    ...Gs.justifyBetween,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  titleSection: {
    ...Gs.h3,
    ...Gs.textBlack,
    marginBottom: 12,
  },
  checkoutItem: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    paddingVertical: 14,
  },
  paymentContainer: {
    ...Gs.flexRow,
    marginHorizontal: -10,
    marginBottom: 30,
  },
  paymentButton: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerLG,
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 42,
    borderWidth: 1,
    borderColor: colors.greyContainer,
    marginHorizontal: 14,
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
    marginLeft: 5,
  },
});

export default Checkout;
