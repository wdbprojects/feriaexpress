import { routes } from "@/config/routes";
import { authClient } from "@/lib/auth-client";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <View className="space-y-4 p-4">
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="border rounded-md p-2 border-neutral-400"
      />
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
        onPress={handleRegister}
      >
        <Text className="text-center text-white">Create Account</Text>
      </Pressable>
      <View>
        <Text className="text-right">
          Already have an account?{" "}
          <Link
            href={routes.login}
            className="text-blue-800 font-medium hover:underline"
          >
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
