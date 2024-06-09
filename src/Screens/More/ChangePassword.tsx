import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, Input, Icon, Card, VStack, Button } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
            value={password}
            onChangeText={(e) => setPassword(e)}
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
          <Button mx={8}>UPDATE</Button>
        </VStack>
      </Card>
    </View>
  );
};

export default ChangePassword;
