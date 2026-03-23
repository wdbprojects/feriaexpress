import { authClient } from "@/lib/auth-client";
import React from "react";
import { Pressable, Text, View } from "react-native";

const LogoutButton = () => {
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <View>
      <Pressable
        className="rounded-md bg-blue-700 p-2 text-center"
        onPress={handleLogout}
      >
        <Text className="text-center text-white">Log Out</Text>
      </Pressable>
    </View>
  );
};

export default LogoutButton;
