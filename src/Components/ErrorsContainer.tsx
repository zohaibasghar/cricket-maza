import React, { useEffect } from "react";
import {
  Alert,
  Center,
  CloseIcon,
  HStack,
  IconButton,
  Pressable,
  Stack,
  Text,
  VStack,
} from "native-base";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { removeError } from "../redux/errorSlice";

const ErrorsContainer = () => {
  const dispatch = useAppDispatch();
  const { errors } = useAppSelector((state) => state.errors);

  const removeErrorById = (id: string) => {
    dispatch(removeError({ id }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      errors.forEach((error) => {
        return removeErrorById(error?.id);
      });
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [errors]);

  return (
    <Center position="absolute" w="full" top={100} zIndex={999}>
      <Stack space={3} w="100%" maxW="400">
        {errors?.map((error) => {
          return (
            <Pressable key={error.id} onPress={() => removeErrorById(error?.id)}>
              <Alert w="100%" status={error.status}>
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack
                    flexShrink={1}
                    space={2}
                    justifyContent="space-between"
                    alignItems={"center"}
                  >
                    <HStack space={2} flexShrink={1} alignItems={"center"}>
                      <Alert.Icon mt="1" />
                      <Text fontSize="md" color="coolGray.800">
                        {error.title}
                      </Text>
                    </HStack>
                    <IconButton
                      onPress={() => removeErrorById(error?.id)}
                      variant="unstyled"
                      icon={<CloseIcon size="5" />}
                      _icon={{
                        color: "coolGray.600",
                      }}
                    />
                  </HStack>
                </VStack>
              </Alert>
            </Pressable>
          );
        })}
      </Stack>
    </Center>
  );
};

export default ErrorsContainer;
