import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollConatainer}>
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
    backgroundColor: 'pink',
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
});
