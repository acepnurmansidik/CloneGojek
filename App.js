/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
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
              source={require('./src/icons/search.png')}
            />
          </View>
          <View style={{width: 35, height: 41}}>
            <Image
              style={{position: 'absolute', top: 8, left: 8}}
              source={require('./src/icons/promo.png')}
            />
          </View>
        </View>
        {/* Gopay navigation */}
        <View style={{marginTop: 18, borderRadius: 4, overflow: 'hidden'}}>
          <View style={[styles.containerRow, menuSection.menuNavSection]}>
            <Image source={require('./src/icons/gopay.png')} />
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
                <Image source={require('./src/icons/pay.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>Pay</Text>
            </View>
            <View style={navigation.itemNav}>
              <View>
                <Image source={require('./src/icons/nearby.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>Nearby</Text>
            </View>
            <View style={navigation.itemNav}>
              <View>
                <Image source={require('./src/icons/topup.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>TopUp</Text>
            </View>
            <View style={navigation.itemNav}>
              <View>
                <Image source={require('./src/icons/more.png')} />
              </View>
              <Text style={styles.txtGlobalStyle}>More</Text>
            </View>
          </View>
        </View>
        {/* Main Features */}
        <View style={{marginTop: 18}}>
          <View style={[styles.containerRow, mainSection.mainContainer]}>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-ride.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-RIDE
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-car.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-CAR
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-bluebird.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-BLUEBIRD
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-send.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-SEND
              </Text>
            </View>
          </View>
          <View style={[styles.containerRow, mainSection.mainContainer]}>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-deals.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-DEALS
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-pulsa.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-PULSA
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-food.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-FOOD
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={mainSection.contImgSection}>
                <Image
                  style={{width: 58, height: 58}}
                  source={require('./src/icons/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                MORE
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 20, backgroundColor: '#F2F2F4', height: 17}} />
        {/* News Features */}
        <View style={{marginVertical: 16, marginHorizontal: 16}}>
          <View style={{position: 'relative'}}>
            <Image
              style={{width: '100%', height: 200, borderRadius: 5}}
              source={require('./src/img/sepak-bola.jpg')}
            />
            <View
              style={{
                backgroundColor: 'black',
                width: '100%',
                height: '100%',
                position: 'absolute',
                opacity: 0.2,
                borderRadius: 5,
              }}
            />
            <View
              style={{
                width: 55,
                height: 15,
                position: 'absolute',
                marginTop: 5,
                marginLeft: 10,
              }}>
              <Image
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'contain',
                  flex: 1,
                }}
                source={require('./src/icons/white.png')}
              />
            </View>
          </View>
          <View
            style={{
              paddingVertical: 16,
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
              Go News
            </Text>
            <Text style={{fontSize: 14, color: '#7A7A7A'}}>
              Dimas Drajad Selamatkan Penalti, Timnas U-23 Kalahkan Brunei
            </Text>
            <TouchableOpacity style={styles.btnRead}>
              <Text style={styles.txtBtn}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navContainer}>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./src/icons/home-active.png')}
            />
          </View>
          <Text style={[styles.textNav, navigation.active]}>Home</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./src/icons/order.png')}
            />
          </View>
          <Text style={styles.textNav}> Order</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./src/icons/help.png')}
            />
          </View>
          <Text style={styles.textNav}>Help</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./src/icons/inbox.png')}
            />
          </View>
          <Text style={styles.textNav}> Inbox</Text>
        </View>
        <View style={navigation.itemNav}>
          <View style={{backgroundColor: 'white'}}>
            <Image
              style={navigation.iconImg}
              source={require('./src/icons/account.png')}
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
  btnRead: {
    backgroundColor: '#61A756',
    borderRadius: 4,
    marginTop: 11,
    paddingVertical: 11,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
  },
  txtBtn: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 13,
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

const mainSection = StyleSheet.create({
  mainContainer: {
    width: '100%',
    marginBottom: 18,
  },
  contImgSection: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#002',
  },
  mainItem: {
    alignItems: 'space-between',
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
