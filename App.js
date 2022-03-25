/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollConatainer}>
        {/* Search Bar */}
        <View style={[styles.containerSeacrhBar, styles.containerRow]}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="What do you eat?"
              style={searchBarSection.searchBar}
            />
            <Image
              style={{position: 'absolute', top: 8, left: 8}}
              source={require('./icons/search.png')}
            />
          </View>
          <View style={{width: 35, height: 41}}>
            <Image
              style={{position: 'absolute', top: 8, left: 8}}
              source={require('./icons/promo.png')}
            />
          </View>
        </View>
        {/* Menu navigation */}
        <View style={{marginTop: 18, borderRadius: 4, overflow: 'hidden'}}>
          <View style={[styles.containerRow, menuSection.menuNavSection]}>
            <Image source={require('./icons/gopay.png')} />
            <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 17}}>
              Rp. 50.000.000
            </Text>
          </View>
          <View
            style={[
              styles.containerRow,
              menuSection.menuNavSection,
              menuSection.menuButton,
            ]}>
            <View style={navigation.itemNav}>
              <View>
                <Image source={require('./icons/pay.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>Pay</Text>
            </View>
            <View style={navigation.itemNav}>
              <View>
                <Image source={require('./icons/nearby.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>Nearby</Text>
            </View>
            <View style={navigation.itemNav}>
              <View>
                <Image source={require('./icons/topup.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>TopUp</Text>
            </View>
            <View style={navigation.itemNav}>
              <View>
                <Image source={require('./icons/more.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>More</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navContainer}>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./icons/home-active.png')}
            />
          </View>
          <Text style={[styles.textNav, navigation.active]}>Home</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./icons/order.png')}
            />
          </View>
          <Text style={styles.textNav}> Order</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./icons/help.png')}
            />
          </View>
          <Text style={styles.textNav}>Help</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./icons/inbox.png')}
            />
          </View>
          <Text style={styles.textNav}> Inbox</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./icons/account.png')}
            />
          </View>
          <Text style={styles.textNav}>Account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollConatainer: {
    flex: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 17,
  },
  navContainer: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerSeacrhBar: {
    paddingTop: 15,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  txtGlobalStyle: {
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 15,
  },
});

const searchBarSection = StyleSheet.create({
  searchBar: {
    borderRadius: 25,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    height: 40,
    fontSize: 13,
    paddingLeft: 40,
    paddingRight: 15,
    backgroundColor: 'white',
    marginRight: 18,
  },
});

const menuSection = StyleSheet.create({
  menuNavSection: {
    backgroundColor: '#2C5FB8',
    padding: 14,
  },
  menuButton: {
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#2F65BD',
  },
});

const navigation = StyleSheet.create({
  itemNav: {
    borderColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  textNav: {
    textAlign: 'center',
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
  },
  active: {
    color: '#43aB4A',
  },
  iconImg: {
    height: 26,
    width: 26,
  },
});
