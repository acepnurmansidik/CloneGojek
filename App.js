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
        <View style={styles.containerSeacrhBar}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="What do you eat?"
              style={styles.searchBar}
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
        <Text>sad</Text>
      </ScrollView>
      <View style={styles.navContainer}>
        <View style={styles.itemNav}>
          <View style={styles.iconMenu}>
            <Image
              style={styles.iconImg}
              source={require('./icons/home-active.png')}
            />
          </View>
          <Text style={[styles.textNav, styles.active]}>Home</Text>
        </View>
        <View style={styles.itemNav}>
          <View style={styles.iconMenu}>
            <Image
              style={styles.iconImg}
              source={require('./icons/order.png')}
            />
          </View>
          <Text style={styles.textNav}> Order</Text>
        </View>
        <View style={styles.itemNav}>
          <View style={styles.iconMenu}>
            <Image
              style={styles.iconImg}
              source={require('./icons/help.png')}
            />
          </View>
          <Text style={styles.textNav}>Help</Text>
        </View>
        <View style={styles.itemNav}>
          <View style={styles.iconMenu}>
            <Image
              style={styles.iconImg}
              source={require('./icons/inbox.png')}
            />
          </View>
          <Text style={styles.textNav}> Inbox</Text>
        </View>
        <View style={styles.itemNav}>
          <View style={styles.iconMenu}>
            <Image
              style={styles.iconImg}
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
  iconMenu: {
    backgroundColor: 'white',
  },
  iconImg: {
    height: 26,
    width: 26,
  },
  active: {
    color: '#43aB4A',
  },
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
  containerSeacrhBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 15,
  },
});
