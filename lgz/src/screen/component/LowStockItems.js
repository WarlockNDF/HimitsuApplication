import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Item,
} from "native-base";
//import http from "../service/axiosService"

const LowStockItems = () => {
  return <View></View>;
};

export default LowStockItems;

const styles = StyleSheet.create({
  background: {
    height: 370,
    borderBottomLeftRadius: 20,
    backgroundColor: "#6495ED",
    borderBottomRightRadius: 20,
  },
  heading: {
    margin: 10,
    fontSize: 35,
    borderRadius: 3,
    color: "#FDFEFE",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#6495ED",
  },
  container: {
    height: 523,
    marginTop: 15,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  btnSty: {
    fontSize: 16,
    color: "white",
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  buttonEd: {
    elevation: 3,
    borderRadius: 4,
    marginVertical: 5,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 50,
    justifyContent: "center",
    backgroundColor: "#ffaa42",
  },
  buttonEn: {
    elevation: 3,
    borderRadius: 4,
    marginVertical: 5,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 50,
    justifyContent: "center",
    backgroundColor: "#f77665",
  },
  product: {
    fontSize: 20,
    color: "#000",
    textAlign: "right",
  },
  buttonImageIconStyle: {
    width: 35,
    height: 35,
    marginLeft: 15,
    resizeMode: "stretch",
  },
  productIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
