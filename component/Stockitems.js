import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

const Stockitems = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View>{<Text style={styles.heading}>Stock Items</Text>}</View>
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.text}>
          {'\t สินค้า'}
          {'\n'}
        </Text>
        <View style={styles.line} />

        <Text></Text>
        <View style={styles.productIcon}>
          {/* <Image
            source={require('/rnproject/images/pepsi.png')}
            style={styles.buttonImageIconStyle}></Image> */}
          <Text style={styles.product}>{'เป็ปซี่ \t'}</Text>
        </View>

        <Text style={styles.product}>{'ชิ้น \t'}</Text>
        <Text style={styles.product}>{'บาท \t'}</Text>
        <Text></Text>
        <View style={styles.line} />
        <Text></Text>

        <View style={styles.productIcon}>
          {/* <Image
            source={require('/rnproject/images/sandwich.png')}
            style={styles.buttonImageIconStyle}></Image> */}
          <Text style={styles.product}>{'แซนวิสหมูหยอง \t'}</Text>
        </View>
        <Text style={styles.product}>{'ชิ้น \t'}</Text>
        <Text style={styles.product}>{'บาท \t'}</Text>
        <Text></Text>
        <View style={styles.line} />
        <Text></Text>

        <View style={styles.productIcon}>
          {/* <Image
            source={require('/rnproject/images/tissue-box.png')}
            style={styles.buttonImageIconStyle}></Image> */}
          <Text style={styles.product}>{'ทิชชู่ \t'}</Text>
        </View>
        <Text style={styles.product}>{'ชิ้น \t'}</Text>
        <Text style={styles.product}>{'บาท \t'}</Text>
        <Text></Text>
        <View />
        <Text>{'\n\n\n'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Stockitems;

const styles = StyleSheet.create({
  background: {
    height: 370,
    borderBottomEndRadius: 20,
    backgroundColor: '#6495ED',
  },
  heading: {
    margin: 10,
    fontSize: 35,
    borderRadius: 3,
    color: '#FDFEFE',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
  },
  container: {
    height: 500,
    marginTop: 10,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: '#FDFEFE',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  btnSty: {
    fontSize: 16,
    color: 'white',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  buttonEd: {
    elevation: 3,
    borderRadius: 4,
    marginVertical: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 50,
    justifyContent: 'center',
    backgroundColor: '#ffaa42',
  },
  buttonEn: {
    elevation: 3,
    borderRadius: 4,
    marginVertical: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 50,
    justifyContent: 'center',
    backgroundColor: '#f77665',
  },
  product: {
    color: '#000',
    fontSize: 20,
    textAlign: 'right',
  },
  buttonImageIconStyle: {
    width: 35,
    height: 35,
    marginLeft: 15,
    resizeMode: 'stretch',
  },
  productIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});