import { routes } from "@/config/routes";
import { authClient } from "@/lib/auth-client";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authClient.signIn.email({
      email: email,
      password: password,
    });
  };

  return (
    <View className="space-y-4 p-4">
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border rounded-md p-2 border-neutral-400"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border rounded-md p-2 border-neutral-400"
      />
      <Pressable
        className="rounded-md bg-blue-700 p-2 text-center"
        onPress={handleLogin}
      >
        <Text className="text-center text-white">Login to your Account</Text>
      </Pressable>
      <View>
        <Text className="text-right text-xs">
          Don't have an account?{" "}
          <Link
            href={routes.register}
            className="text-blue-800 font-medium hover:underline"
          >
            Register
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
