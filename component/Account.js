import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const Account = ({navigation}) => {
  //const {onPress, title = 'Save'} = props;
  return (
    <SafeAreaView style={styles.background}>
      <View>{<Text style={styles.heading}>Account</Text>}</View>
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.text}>
          {'\t Store Name : '}
          {'\n'}
          {'\t Lotus Bang Parrr '}
        </Text>
        <Text></Text>
        <View style={styles.line} />
        <Text></Text>

        <Text style={styles.text}>
          {'\t Name : '}
          {'\n'}
          {'\t Viwat Kiminoto '}
        </Text>
        <Text></Text>
        <View style={styles.line} />
        <Text></Text>

        <Text style={styles.text}>
          {'\t Role : '}
          {'\n'}
          {'\t Store Manager '}
        </Text>
        <Text></Text>
        <View style={styles.line} />
        <Text>{'\n\n\n'}</Text>
        <Pressable style={styles.buttonEd} onPress={onPress}>
          <Text style={styles.btnSty}>แก้ไขข้อมูล</Text>
        </Pressable>
        <Pressable style={styles.buttonEn} onPress={() => navigation.navigate("BackToLogin")}>
          <Text style={styles.btnSty}>ออกจากระบบ</Text>
        </Pressable>
        {/* <Button
          title="แก้ไขข้อมูล"
          color={'yellow'}
          onPress={() => Alert.alert('เหลืองงงง')}></Button>
        <Button
          title="ออกจากระบบ"
          color={'red'}
          onPress={() => Alert.alert('แดงงงงงงง')}></Button> */}
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#6495ED',
    borderRadius: 1,
    borderRadius: 5,
    height: 370,
  },
  heading: {
    fontSize: 35,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
    borderRadius: 1,
    fontWeight: 'bold',
    margin: 10,
    color: '#FDFEFE',
  },
  container: {
    height: 500,
    marginTop: 10,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    backgroundColor: '#FDFEFE',
    borderRadius: 10,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  btnSty: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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
});