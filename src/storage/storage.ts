import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (value: string) => {
  try {
    await AsyncStorage.setItem("auth-token", value);
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("auth-token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("auth-token");
  } catch (error) {
    console.log(error);
  }
};
