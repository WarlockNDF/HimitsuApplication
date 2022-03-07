import { StyleSheet, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Input,
  Button,
  Item
} from "native-base";

const Search = () => {
  const [text, Searchitem] = useState("");
  return (
    <SafeAreaView style={(styles.background, { flex: 1 })}>
      <View style={{ flex: 1 }}>
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
        </Container>
      </View>

       <Container style={{ flex:8}}>
       <Content>
            <List>

              <ListItem>
                <Left>
                  <Text>Simon Mignolet</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <Text>Nathaniel Clyne</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <Text>Dejan Lovren</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

            </List>
          </Content>
      </Container>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#6495ED",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 370,
  },
  heading: {
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
    color: "#FDFEFE",
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
    width: 375,
  },
  Product: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  container: {
    height: 450,
    marginTop: 10,
    marginLeft: 20,
    borderWidth: 2,
    marginRight: 20,
    backgroundColor: "#FDFEFE",
    alignItems: "center",
    borderRadius: 10,
  },
});
