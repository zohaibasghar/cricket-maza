import { SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, Input, Card, VStack, Button, useToast, Box } from "native-base";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { changePassword } from "../../redux/actions/authActions";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const toast = useToast();
  const nav = useNavigation();
  function handleChangePassword() {
    dispatch(changePassword({ currentPassword, newPassword })).then(() => {
      if (error) {
        return toast.show({ description: error });
      }
      toast.show({
        render: () => {
          return (
            <Box bg="#5E41E6" px="4" py="2" rounded="sm" mb={5}>
              <Text fontSize={"lg"}>Password changed successfully!</Text>
            </Box>
          );
        },
      });
      nav.goBack();
    });
  }
  return (
    <View flex={1} justifyContent={"center"} alignItems={"center"}>
      <Card bg={"#222"} m={4} rounded={"2xl"} w={"94%"}>
        <VStack space={8}>
          <Text fontStyle={"italic"}>Change Password</Text>
          <Input
            placeholder="Enter old password"
            type="text"
            leftElement={
              <SimpleLineIcons name="lock" size={24} color="white" style={{ marginLeft: 12 }} />
            }
            value={currentPassword}
            onChangeText={(e) => setCurrentPassword(e)}
          />
          <Input
            placeholder="Enter new password"
            type="text"
            leftElement={
              <SimpleLineIcons name="lock" size={24} color="white" style={{ marginLeft: 12 }} />
            }
            value={newPassword}
            onChangeText={(e) => setNewPassword(e)}
          />
          <Button mx={8} isLoading={!!loading} disabled={!!loading} onPress={handleChangePassword}>
            UPDATE
          </Button>
        </VStack>
      </Card>
    </View>
  );
};

export default ChangePassword;
