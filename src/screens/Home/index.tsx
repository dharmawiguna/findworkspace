import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import {Gs} from '../../../assets/styles/GlobalStyle';
import InputText from '../../components/InputText';
import NewsworthyItem from '../../components/NewsworthyItem';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';
import BottomNav from '../../components/BottomNav';

function Home(): React.JSX.Element {
  const newsworthyData = [
    {
      title: 'Surija',
      address: 'Denpasar',
      price: '$123/day',
      image: require('../../../assets/images/item_2_a.png'),
    },
    {
      title: 'Deepwork',
      address: 'Denpasar',
      price: '$300/day',
      image: require('../../../assets/images/item_2_b.png'),
    },
  ];

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            source={require('../../../assets/images/profile_2.png')}
            style={styles.profileContainer}
          />
          <View>
            <Text style={Gs.textBlack}>Hi, Dharma</Text>
            <Text style={[Gs.font700, Gs.textBlack]}>@dharma_wgn</Text>
          </View>
        </View>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/icons/gift.png')}
            style={styles.iconContainer}
          />
          <Image
            source={require('../../../assets/icons/notification.png')}
            style={styles.iconContainer}
          />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.sectionContainer}>
        <InputText
          icon={require('../../../assets/icons/location.png')}
          placeholder="Find Work Space in Singapore"
        />
      </View>
    );
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderPopularSelection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, Gs.h1]}>Popular</Text>

        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/item_1_a.png')}
            style={styles.popularMainImage}
          />
          <View>
            <Image
              source={require('../../../assets/images/item_1_b.png')}
              style={styles.popularImage}
            />
            <Image
              source={require('../../../assets/images/item_1_c.png')}
              style={styles.popularImage}
            />
          </View>
        </View>
        <View style={styles.popularContent}>
          <View>
            <Text style={[Gs.h2, Gs.textBlack]}>IndoorWork</Text>
            <Text style={[Gs.textGrey]}>Tirta Lepang II</Text>
          </View>
          <View style={styles.popularPriceContainer}>
            <Text style={styles.popularPriceLabel}>$500/day</Text>
          </View>
        </View>
      </View>
    );
  };

  const handlePress = () => {
    navigation.navigate('Details');
  };

  const renderNewsworthy = () => {
    return (
      <View style={[styles.sectionContainer]}>
        <Text style={[styles.sectionTitle, Gs.h1]}>News Worthy</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newsworthyData}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <NewsworthyItem
              title={item.title}
              address={item.address}
              price={item.price}
              image={item.image}
              onPress={handlePress}
            />
          )}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderHeader()}
        {renderSearch()}
        <ScrollView style={styles.scrollContainer}>
          {renderPopularSelection()}
          {renderNewsworthy()}
        </ScrollView>
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
  },
  headerContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  popularMainImage: {
    ...Gs.cornerXL,
    flex: 1,
    height: 200,
    marginRight: 10,
  },
  popularImage: {
    ...Gs.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  sectionTitle: {
    ...Gs.textBlack,
    marginBottom: 12,
  },
  popularContent: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  popularPriceContainer: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  popularPriceLabel: {
    ...Gs.font600,
    ...Gs.textPrimary,
  },
  scrollContainer: {
    height: '100%',
  },
});

export default Home;
