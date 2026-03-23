import LogoutButton from "@/components/shared/logout-button";
import { routes } from "@/config/routes";
import { authClient } from "@/lib/auth-client";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { data: session } = authClient.useSession();

  return (
    <View className="flex items-center justify-center h-full">
      <View>
        <Text className="text-2xl text-blue-500 font-medium mb-4">
          {session
            ? `Welcome ${session?.user?.name}`
            : "Login or register to access all features"}
        </Text>
        <LogoutButton />
      </View>
      {!session && (
        <View className="flex flex-row items-center justify-center gap-4">
          <View className="mt-4 border border-muted rounded-md py-2 px-4 cursor-pointer">
            <Link href={routes.login}>Login</Link>
          </View>
          <View className="mt-4 border border-muted rounded-md py-2 px-4 cursor-pointer">
            <Link href={routes.register}>Register</Link>
          </View>
        </View>
      )}
    </View>
  );
}
