import { SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, Input, Card, VStack, Button, useToast, Box } from "native-base";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { changePassword, resetPassword } from "../../redux/actions/authActions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addError } from "../../redux/errorSlice";
import uuid from "../../utils/uuid";

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useAppDispatch();
  const route = useRoute();
  const { email } = route.params as any;
  const [curErr, setCurErr] = useState<string>("");
  const { loading, error } = useAppSelector((state) => state.auth);
  const toast = useToast();
  const nav = useNavigation();
  function handleChangePassword() {
    if (!email) {
      dispatch(addError({ id: uuid(), title: "Email not found!", status: "error" }));
    }
    if (currentPassword !== newPassword) {
      return setCurErr("Passwords does not match!");
    } else {
      setCurErr("");
      dispatch(resetPassword({ newPassword, email })).then(() => {
        if (!error) {
          toast.show({
            render: () => {
              return (
                <Box bg="#5E41E6" px="4" py="2" rounded="sm" mb={5}>
                  <Text fontSize={"lg"}>Password reset successfully!</Text>
                </Box>
              );
            },
          });
          nav.navigate("MoreStack", { screen: "Login" });
        }
      });
    }
  }
  return (
    <View flex={1} justifyContent={"center"} alignItems={"center"}>
      <Card bg={"#222"} m={4} rounded={"2xl"} w={"94%"}>
        <VStack space={8}>
          <Text fontStyle={"italic"} fontWeight={700} fontSize={"lg"}>
            Reset Password
          </Text>
          <Input
            placeholder="Enter new password"
            type="password"
            leftElement={
              <SimpleLineIcons name="lock" size={24} color="white" style={{ marginLeft: 12 }} />
            }
            value={currentPassword}
            autoCapitalize="none"
            onChangeText={(e) => setCurrentPassword(e)}
          />
          <VStack space={2}>
            <Input
              placeholder="Confirm password"
              type="password"
              autoCapitalize="none"
              leftElement={
                <SimpleLineIcons name="lock" size={24} color="white" style={{ marginLeft: 12 }} />
              }
              value={newPassword}
              onChangeText={(e) => setNewPassword(e)}
            />
            {curErr && <Text color={"red.500"}>{curErr}</Text>}
          </VStack>
          <Button mx={8} isLoading={!!loading} disabled={!!loading} onPress={handleChangePassword}>
            RESET
          </Button>
        </VStack>
      </Card>
    </View>
  );
};

export default ResetPassword;
