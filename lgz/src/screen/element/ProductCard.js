import React,{useState} from "react";
import moment from "moment";
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  Badge,
  View,
  Button,
  Modal
} from "native-base";

moment.locale("th");

const ProductCard = ({navigation, name, typeName, productId, numberOfStock, bbe,supplier, key}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
        <Pressable mt={15} onPress={() => setShowModal(true)}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            width={96}
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "coolGray.100"
            }
            p="5"
            rounded="8"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <HStack>
              <Text
                color="coolGray.800"
                mt="2"
                fontWeight="medium"
                fontSize="xl"
              >
                {`Name: ` + name}
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                {"BBE: " + !bbe
                  ? "ไม่มีการระบุ"
                  : moment(bbe).format("LLL").toString()}
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                {"Price: "}$12,850.05
              </Text>
              <Flex>
                <Badge
                  colorScheme={numberOfStock === 0 ? "danger" : "Blue"}
                  _text={{
                    color: "white",
                  }}
                  variant="solid"
                  rounded="2"
                >
                  {numberOfStock === 0 ? "OUT OF STOCK" : "Available"}
                </Badge>
              </Flex>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Product Detail</Modal.Header>
        <Modal.Body>
          <Text>Product Name : {name}</Text>
          <Text>Supplier Name : {supplier.SupplierName}</Text>
          <Text>--------------------------------------------------------------</Text>
          <Text>Best Before : {moment(bbe).format("L")}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onPress={() => {setShowModal(false);}}>
                close
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
    </View>
  );
};

export default ProductCard;