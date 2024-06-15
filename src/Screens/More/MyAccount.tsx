import { View, Text, VStack, HStack, Divider, ScrollView, Modal, Button, Toast } from "native-base";
import React, { useState } from "react";
import { Center } from "native-base";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { AntDesign, Entypo, FontAwesome6, MaterialIcons, Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../redux/authSlice";

const MyAccount = () => {
  const { user } = useAppSelector((state) => state.auth);
  const nav = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const dispatch = useAppDispatch();
  function handleLogout() {
    dispatch(logout());
    Toast.show({
      description: "You are logged out!",
      title: "Logged out!",
      alignItems: "center",
    });
    setShowModal(false);
    nav.navigate("HomeTabs", { screen: "More" });
  }
  return (
    <View flex={1}>
      <ScrollView>
        <Center my={4}>
          <Text fontSize={"5xl"} my={4}>
            Logo
          </Text>
          <Text>My Account</Text>
          <VStack w={"90%"} space={6}>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text fontFamily={"es_semiBold"}>{user?.name}</Text>
              <Entypo name="user" size={24} color="gray" />
            </HStack>
            <Divider />
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text fontFamily={"es_semiBold"}>{user?.email}</Text>
              <AntDesign name="mail" size={24} color="gray" />
            </HStack>
            <Divider />
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text fontFamily={"es_semiBold"}>{user?.mobile}</Text>
              <AntDesign name="mobile1" size={24} color="gray" />
            </HStack>
            <Divider />
            <TouchableOpacity onPress={() => nav.navigate("Transactions" as never)}>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Text fontFamily={"es_semiBold"}>Transaction History</Text>
                <Entypo name="chevron-small-right" size={24} color="white" />
              </HStack>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => nav.navigate("ChangePassword" as never)}>
              <Text fontFamily={"es_semiBold"}>Change Password</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Text fontFamily={"es_semiBold"}>Logout</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => setDeleteModal(true)}>
              <Text fontFamily={"es_semiBold"}>Delete Account</Text>
            </TouchableOpacity>
            <Divider />
            <HStack space={2} justifyContent={"center"} alignItems={"center"}>
              <Octicons name="versions" size={24} color="#fff" />
              <Text>Version: 1.0</Text>
            </HStack>
          </VStack>
        </Center>
      </ScrollView>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" borderColor={"#5E41E6"} borderWidth={1}>
          <Modal.Body m={4}>
            <VStack alignItems={"center"} space={4} my={4}>
              <MaterialIcons name="logout" size={64} color="#5E41E6" />
              <Text fontFamily={"es_semiBold"} textAlign={"center"}>
                Are you sure you want to logout?
              </Text>
            </VStack>
            <HStack justifyContent={"space-between"}>
              <Button
                w={"45%"}
                onPress={() => setShowModal(false)}
                bg={"transparent"}
                borderColor={"#aaa"}
                borderWidth={1}
                borderRadius={100}
              >
                CANCEL
              </Button>
              <Button w={"45%"} onPress={handleLogout}>
                YES
              </Button>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Content maxWidth="400px" borderColor={"#5E41E6"} borderWidth={1}>
          <Modal.Body m={4}>
            <VStack alignItems={"center"} space={4} my={4}>
              <FontAwesome6 name="triangle-exclamation" size={64} color="#5E41E6" />
              <Text textAlign={"center"} fontFamily={"es_semiBold"}>
                Are you sure you want to delete your account?
              </Text>
            </VStack>
            <HStack justifyContent={"space-between"}>
              <Button
                w={"45%"}
                onPress={() => setDeleteModal(false)}
                bg={"transparent"}
                borderColor={"#aaa"}
                borderWidth={1}
                borderRadius={100}
              >
                CANCEL
              </Button>
              <Button w={"45%"} onPress={handleLogout}>
                YES
              </Button>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default MyAccount;
