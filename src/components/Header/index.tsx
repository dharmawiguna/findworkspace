import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gs} from '../../../assets/styles/GlobalStyle';

interface HeaderProps {
  title: string;
  subtitle: string;
  showRightButton?: boolean;
}

export default function Header({
  title,
  subtitle,
  showRightButton,
}: HeaderProps): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/icons/arrow_left_black.png')} />
      </TouchableOpacity>
      <View>
        <Text style={[Gs.textCenter, Gs.textBlack, Gs.h1]}>{title}</Text>
        <Text style={[Gs.textCenter, Gs.textGrey]}>{subtitle}</Text>
      </View>
      <TouchableOpacity>
        {showRightButton && (
          <Image source={require('../../../assets/icons/menu.png')} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  button: {
    width: 24,
    height: 24,
  },
});
