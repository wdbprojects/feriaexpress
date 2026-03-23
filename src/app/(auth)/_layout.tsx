import { routes } from "@/config/routes";
import { authClient } from "@/lib/auth-client";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

const AuthRoutesLayout = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <ActivityIndicator />;
  if (session) return <Redirect href={routes.home} />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthRoutesLayout;
